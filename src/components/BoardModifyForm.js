import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 수정 폼 컴포넌트
function BoardModifyForm({ board, isLoading, onModify }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e) => {
    // 제목 상태값 변경
    setTitle(e.target.value);
  };

  const handleChangeContent = (e) => {
    // 내용 상태값 변경
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onModify(board.boardNo, title, content);
  };

  // 마운트될 때 기존의 제목, 내용을 가져옴
  useEffect(() => {
    if (board) {
      setTitle(board.title);
      setContent(board.content);
    }
  }, [board]);

  return (
    <div align="center">
      <h2>게시판 수정</h2>
      {isLoading && "로딩중..."}
      {!isLoading && board && (
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>번호</td>
                <td>
                  <input value={board.boardNo} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>등록일시</td>
                <td>
                  <input value={board.regDate} type="text" disabled />
                </td>
              </tr>
              <tr>
                <td>제목</td>
                <td>
                  <input
                    type="text"
                    value={title}
                    onChange={handleChangeTitle}
                  />
                </td>
              </tr>
              <tr>
                <td>작성자</td>
                <td>
                  <input type="text" value={board.writer} disabled />
                </td>
              </tr>
              <tr>
                <td>내용</td>
                <td>
                  <textarea
                    value={content}
                    rows="5"
                    onChange={handleChangeContent}
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button type="submit">수정</button>
            <Link to={`/read/${board.boardNo}`}>취소</Link>
          </div>
        </form>
      )}
    </div>
  );
}

export default BoardModifyForm;
