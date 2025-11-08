import { defineStore } from "pinia";

export const useKeepAliveStore = defineStore("geeker-keepAlive", () => {
  const keepAliveName = ref<string[]>([]);
  // Add KeepAliveName
  const addKeepAliveName = (name: string) => {
    !keepAliveName.value.includes(name) && keepAliveName.value.push(name);
  };
  // Remove KeepAliveName
  const removeKeepAliveName = (name: string) => {
    keepAliveName.value = keepAliveName.value.filter(item => item !== name);
  };
  // Set KeepAliveName
  const setKeepAliveName = (names: string[] = []) => {
    keepAliveName.value = names;
  };
  return {
    keepAliveName,
    addKeepAliveName,
    removeKeepAliveName,
    setKeepAliveName
  };
});
