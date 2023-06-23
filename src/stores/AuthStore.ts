import { defineStore } from "pinia";
import type { RegisterRequest } from "@/types/RegisterRequest";
import { register } from "@/service/AuthService";


export const useAuthModule = defineStore("auth", {
  state: () => {
    return {
      auth_token: ""
    };
  },

  getters: {
    token(state) {
      return state.auth_token;
    },
  },

  actions: {
    async register(registerRequest: RegisterRequest) {
      const res = await register(registerRequest);
      if (res) {
        this.auth_token = res;
        return true;
      }
      return false;
    },
  },
});
