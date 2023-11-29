import { defineStore } from "pinia";
import axios from "axios";
import { io } from "socket.io-client";

export const useStore = defineStore("store", {
  state: () => {
    return {
      count: 0,
      socket: io(),
    };
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
    send_msg() {
      this.socket.emit("chat", { test: 1 });
    },
  },
});
