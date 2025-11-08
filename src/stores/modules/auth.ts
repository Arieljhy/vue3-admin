import { defineStore } from "pinia";
import { AuthState } from "@/stores/interface";
import { getAuthButtonListApi, getAuthMenuListApi } from "@/api/modules/login";
import { getFlatMenuList, getShowMenuList, getAllBreadcrumbList } from "@/utils";

export const useAuthStore = defineStore("geeker-auth", () => {
  const authState = reactive<AuthState>({
    // 按钮权限列表
    authButtonList: {},
    // 菜单权限列表
    authMenuList: [],
    // 当前页面的 router name，用来做按钮权限筛选
    routeName: ""
  });

  // 按钮权限列表
  const authButtonListGet = computed(() => authState.authButtonList);
  // 菜单权限列表 ==> 这里的菜单没有经过任何处理
  const authMenuListGet = computed(() => authState.authMenuList);
  // 菜单权限列表 ==> 左侧菜单栏渲染，需要剔除 isHide == true
  const showMenuListGet = computed(() => getShowMenuList(authState.authMenuList));
  // 菜单权限列表 ==> 扁平化之后的一维数组菜单，主要用来添加动态路由
  const flatMenuListGet = computed(() => getFlatMenuList(authState.authMenuList));
  // 递归处理后的所有面包屑导航列表
  const breadcrumbListGet = computed(() => getAllBreadcrumbList(authState.authMenuList));

  // Get AuthButtonList
  const getAuthButtonList = async () => {
    const { data } = await getAuthButtonListApi();
    authState.authButtonList = data;
  };
  // Get AuthMenuList
  const getAuthMenuList = async () => {
    const { data } = await getAuthMenuListApi();
    authState.authMenuList = data;
  };
  // Set RouteName
  const setRouteName = (name: string) => {
    authState.routeName = name;
  };

  return {
    ...toRefs(authState),
    authButtonListGet,
    authMenuListGet,
    showMenuListGet,
    flatMenuListGet,
    breadcrumbListGet,
    getAuthButtonList,
    getAuthMenuList,
    setRouteName
  };
});
