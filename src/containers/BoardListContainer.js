import React, { useEffect, useCallback } from "react";
import BoardList from "../components/BoardList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoardListApi } from "../lib/api";
import {
  fetchListStart,
  fetchListSuccess,
  fetchListFailure,
} from "../modules/board";

// 목록조회 컨테이너 컴포넌트
const BoardListContainer = () => {
  //디스패치 정의
  const dispatch = useDispatch();

  //상태 조회

  const { boards, isLoading } = useSelector((state) => ({
    boards: state.boards,
    isLoading: state.loading.FETCH_LIST,
  }));

  //api 호출해서 상태 자식 컴포넌트에게 건내주는 함수 만들기
  const listBoard = useCallback(async () => {
    dispatch(fetchListStart());

    try {
      const response = await fetchBoardListApi(); //응답데이터 response에 넣어주고~
      dispatch(fetchListSuccess(response.data)); //dispatch해서 목록 상태 바꿔주고 ~ 그 상태를 BoardList컴포넌트에 넣어주고~
    } catch (e) {
      dispatch(fetchListFailure(e));
      throw e;
    }
  }, [dispatch]);

  //마운트될 때 게시글 목록 가져옴
  useEffect(() => {
    listBoard();
  }, [listBoard]);

  return <BoardList boards={boards} isLoading={isLoading} />;
};

export default BoardListContainer;
