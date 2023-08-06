import { createAction, handleActions } from "redux-actions";

//***액션 타입
//상세
const FETCH = "board/FETCH";
const FETCH_SUCCESS = "board/FETCH_SUCCESS";
const FETCH_FAILURE = "board/FETCH_FAILURE";
//목록
const FETCH_LIST = "board/FETCH_LIST";
const FETCH_LIST_SUCCESS = "board/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "board/FETCH_LIST_FAILURE";

//***액션 생성 함수
//상세
export const fetchStart = createAction(FETCH);
export const fetchSuccess = createAction(FETCH_SUCCESS, (data) => data);
export const fetchFailure = createAction(FETCH_FAILURE, (e) => e);
//목록
export const fetchListStart = createAction(FETCH_LIST);
export const fetchListSuccess = createAction(
  FETCH_LIST_SUCCESS,
  (data) => data
);
export const fetchListFailure = createAction(FETCH_LIST_FAILURE, (e) => e);

//게시판 모듈의 초기 상태
const initialState = {
  loading: {
    FETCH: false,
    FETCH_LIST: false,
  },
  board: null,
  boards: [],
  error: null,
};

//리듀서 함수 정의
const board = handleActions(
  {
    [FETCH]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: true,
      },
    }),
    [FETCH_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: false,
      },
      board: action.payload,
    }),
    [FETCH_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH: false,
      },
    }),
    //목록 조회 리듀서 함수 정의
    [FETCH_LIST]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH_LIST: true,
      },
    }),
    [FETCH_LIST_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH_LIST: false,
      },
      boards: action.payload,
    }),
    [FETCH_LIST_FAILURE]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        FETCH_LIST: false,
      },
      error: action.payload,
    }),
  },
  initialState
); //initialState은 초기상태

export default board;
