import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import BoardRead from "../components/BoardRead";
import { fetchStart, fetchSuccess, fetchFailure } from "../modules/board";
import { fetchBoardApi, removeBoardApi } from "../lib/api";
import { useNavigate, useParams } from "react-router-dom";

// 상세조회 컨테이너 컴포넌트
const BoardReadContainer = () => {
  const { boardNo } = useParams();
  const navigate = useNavigate();

  //스토어 dispatch 사용 가능
  const dispatch = useDispatch();

  //스토어 상태 조회
  const { board, isLoading } = useSelector((state) => ({
    board: state.board,
    isLoading: state.loading.FETCH,
  }));

  //게시글  상세 조회
  const readBoard = useCallback(
    async (boardNo) => {
      dispatch(fetchStart());
      try {
        const response = await fetchBoardApi(boardNo);

        dispatch(fetchSuccess(response.data)); //상태 업데이트
      } catch (e) {
        dispatch(fetchFailure(e));
        throw e;
      }
    },
    [dispatch]
  );

  //게시글 삭제
  const onRemove = async () => {
    try {
      //게시글 삭제 API 호출
      await removeBoardApi(boardNo);
      alert("삭제되었습니다.");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  //마운트 될 때 게시글 상세정보 가져옴
  useEffect(() => {
    readBoard(boardNo);
  }, [boardNo, readBoard]);
  return (
    <BoardRead
      boardNo={boardNo}
      board={board}
      isLoading={isLoading}
      onRemove={onRemove}
    />
  );
};

export default BoardReadContainer;
