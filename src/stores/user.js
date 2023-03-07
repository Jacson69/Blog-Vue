import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { reqLogin, reqRegister } from '@/api/user';
import { reqInfo } from '@/api/profile';
// import { reqRegister } from '@/api';

export const useUserStore = defineStore('user', {
  state: () => ({
    token: JSON.parse(localStorage.getItem('TOKEN') || '{"token":""}').token,
    user: JSON.parse(localStorage.getItem('USER') || 'null') || {
      name: '',
      telephone: '',
      email: '',
      img_url: '',
      sex: '',
      team: '',
      introduction: '',
      created_at: '',
      fans: 0,
      follows: '',
    },
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    async login(data) {
      const result = await reqLogin(data);
      // console.log("-----------",result)
      const sdata = { token: result.token, tiemstamp: Date.now() };
      localStorage.setItem('TOKEN', JSON.stringify(sdata));
      this.token = result.token;
      // console.log(123)
      return result.token;
    },
    async register(data) {
      const result = await reqRegister(data);
      // console.log("-----------",result)
      const sdata = { token: result.token, tiemstamp: Date.now() };
      localStorage.setItem('TOKEN', JSON.stringify(sdata));
      this.token = result.token;
      // console.log(123)
      return result.token;
    },
    async setUserInfo(data) {
      if (!data) {
        const result = await reqInfo();
        localStorage.setItem('USER', JSON.stringify(result.user));
        this.user = result.user;
      } else {
        localStorage.setItem('USER', JSON.stringify(data));
        this.user = data;
      }
    },
    exitUser() {
      localStorage.removeItem('USER');
      localStorage.removeItem('TOKEN');
      this.token = JSON.parse('{"token":""}').token;
      this.user = JSON.parse('null');
    },
  },
});
