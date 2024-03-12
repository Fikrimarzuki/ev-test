import { defineStore } from "pinia";

export const useUserStore = defineStore("users", () => {
  const user = ref<User | null>(null)

  return {
    user
  }
})

interface User {
  name: string;
  email: string;
}