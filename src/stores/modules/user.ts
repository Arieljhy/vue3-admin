import { defineStore } from "pinia";
import { UserState } from "@/stores/interface";
import piniaPersistConfig from "@/stores/helper/persist";

export const useUserStore = defineStore(
  "geeker-user",
  () => {
    const userState = reactive<UserState>({
      token: "",
      userInfo: { name: "Geeker" }
    });

    // Set Token
    const setToken = (token: string) => {
      userState.token = token;
    };
    // Set setUserInfo
    const setUserInfo = (userInfo: UserState["userInfo"]) => {
      userState.userInfo = userInfo;
    };
    return {
      ...toRefs(userState),
      setToken,
      setUserInfo
    };
  },
  {
    persist: piniaPersistConfig("geeker-user")
  }
);
