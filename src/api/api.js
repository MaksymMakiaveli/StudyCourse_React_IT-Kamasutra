import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '08d485b0-c172-4086-90b8-c2840267f674' },
});

export const usersAPI = {
  getUsers(currentPage, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
  },
};
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status });
  },
  avatarProfile(avatar) {
    let formData = new FormData();
    formData.append('image', avatar);
    return instance.put(`profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },
  updateProfile(profile) {
    return instance.put(`profile`, profile);
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
  getAuth() {
    return instance.get('auth/me');
  },

  loginAuth(email, password, captcha = null) {
    return instance.post('auth/login', { email, password, captcha });
  },

  logoutAuth() {
    return instance.delete('auth/login');
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get('security/get-captcha-url');
  },
};
