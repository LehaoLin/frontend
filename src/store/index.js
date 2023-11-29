import { defineStore } from "pinia";
import axios from "axios";

export const useStore = defineStore("store", {
  state: () => {
    return { count: 0 };
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    increment() {
      this.count++;
    },
    async post() {
      let res = await axios({
        method: "post",
        url: "/",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          // Add any other headers required by the API
        },
        responseType: "json",
        data: {},
      });
    },
  },
});
