import axios from "axios";

//RESTAPI 서버와 HTTP 통신 구현

//게시글 등록
export const registerBoardApi = (title, content, writer) =>
  axios.post("/boards", {
    title,
    content,
    writer,
  });

//게시글 상세
export const fetchBoardApi = (boardNo) => axios.get(`/boards/${boardNo}`);

//게시글 목록
export const fetchBoardListApi = () => axios.get("/boards");

//게시글 삭제
export const removeBoardApi = (boardNo) => axios.delete(`/boards/${boardNo}`);

//게시글 수정
export const modifyBoardApi = (boardNo, title, content) =>
  axios.put(`/boards/${boardNo}`, { title, content });
