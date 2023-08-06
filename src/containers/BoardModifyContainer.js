import React, { useEffect, useCallback } from "react";
import BoardModifyForm from "../components/BoardModifyForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchStart, fetchSuccess, fetchFailure } from "../modules/board";
import { modifyBoardApi, fetchBoardApi } from "../lib/api";

// 수정 컨테이너 컴포넌트
const BoardModifyContainer = () => {
  const { boardNo } = useParams();
  //디스패치 정의
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //상태 조회
  const { board, isLoading } = useSelector((state) => ({
    board: state.board,
    isLoading: state.loading.FETCH,
  }));

  //read해서  데이터 가져오기
  const readBoard = useCallback(
    async (boardNo) => {
      dispatch(fetchStart());
      try {
        const response = await fetchBoardApi(boardNo);

        dispatch(fetchSuccess(response.data));
      } catch (e) {
        dispatch(fetchFailure(e));
        throw e;
      }
    },
    [dispatch]
  );

  //수정 처리

  const onModify = async (boardNo, title, content) => {
    try {
      await modifyBoardApi(boardNo, title, content);
      alert("수정되었습니다.");
      navigate("/read/" + boardNo);
    } catch (e) {
      console.log(e);
    }
  };

  useCallback(() => {
    readBoard(boardNo);
  }, readBoard);

  return (
    <BoardModifyForm board={board} isLoading={isLoading} onModify={onModify} />
  );
};

export default BoardModifyContainer;
