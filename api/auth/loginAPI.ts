import instance from '../axios';

export const postLogin = async (email: string, password: string) => {
  const response = await instance.post('/users/login', { email, password });
  return response.data;
};
