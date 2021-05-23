import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '08d485b0-c172-4086-90b8-c2840267f674' },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
};
export const followAPI = {
  clickFollow(userId) {
    return instance.post('follow/' + userId);
  },
  clickUnfollow(userId) {
    return instance.delete('follow/' + userId);
  },
};
export const authAPI = {
  getAuth(){
    return instance.get('auth/me')
  }
};
