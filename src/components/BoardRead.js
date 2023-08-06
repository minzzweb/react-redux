import React from "react";
import { Link } from "react-router-dom";

// 상세보기 컴포넌트
//게시글 번호, 게시글 정보, 로딩 여부를 컴포넌트 속성으로 전달받는다.
function BoardRead({ boardNo, board, isLoading, onRemove }) {
  return (
    <div align="center">
      <h2>게시판 상세보기</h2>
      {/* '로딩중...' 표시 */}
      {isLoading && "로딩중..."}
      {/* 상세보기 화면 표시 */}
      {!isLoading && board && (
        <table>
          <tbody>
            <tr>
              <td>번호</td>
              <td>
                <input type="text" value={board.boardNo} readOnly />
              </td>
            </tr>
            <tr>
              <td>등록일시</td>
              <td>
                <input type="text" value={board.regDate} readOnly />
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" value={board.title} readOnly />
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input type="text" value={board.writer} readOnly />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea value={board.content} readOnly></textarea>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <Link to={`/edit/${boardNo}`}>편집</Link>
      <button onClick={onRemove}>삭제</button>
      <Link to="/">목록</Link>
    </div>
  );
}

export default BoardRead;
