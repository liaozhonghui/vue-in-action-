import { service as request } from './request';

export const getUserList = async () => {
  const rsp = await request('/api/getUsers');
  console.log('request:get-users:', rsp);
  if (rsp.data.code !== 0) throw new Error(rsp.data.message);
  return rsp?.data.data;
};
