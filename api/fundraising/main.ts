import instance from '../axios';
import { DetailPostResponse, Response } from '../../types/post';

export const getForumAll = async () => {
  const { data: response } = await instance.get<Response>(`/boards`, {
    params: {
      page: 0,
      size: 10,
    },
  });
  return response.content;
};

export const getForumContent = async (boardId: number) => {
  const { data: response } = await instance.get<DetailPostResponse>(`/boards/${boardId}`);
  return response;
};
