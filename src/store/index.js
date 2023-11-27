import { defineStore } from "pinia";

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
  },
});
