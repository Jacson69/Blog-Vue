import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { reqLogin, reqRegister } from '@/api/user';
// import { reqRegister } from '@/api';

export const useUserStore = defineStore('user', {
  state: () => ({ token: JSON.parse(localStorage.getItem('TOKEN') || '{"token":""}').token }),
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
  },
});
