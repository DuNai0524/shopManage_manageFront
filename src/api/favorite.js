import request from "@/utils/request.js";

/**
 * 员工偏好API
 * */
export function useFavoriteApi() {
  return {
    getFavorites: (params) => {
      return request({
        url: `${process.env.VUE_APP_FAVORITE_URL}/preference/${params.page}/${params.size}`,
        method: "get",
      });
    },

    addFavoriteInfo: (params, id) => {
      return request({
        url: `${process.env.VUE_APP_FAVORITE_URL}/preference/insert`,
        method: 'post',
        params:{
          staffid:id,
        },
        data:params,
      })
    },

    updateFavoriteInfo: (params) => {
      return request({
        url: `${process.env.VUE_APP_FAVORITE_URL}/preference/update`,
        method: 'put',
        data:params,
      })
    },

    deleteFavorietInfo: (id) => {
      return request({
        url: `${process.env.VUE_APP_FAVORITE_URL}/preference/${id}`,
        method: 'delete',
      })
    },

    searchById: (id) => {
      return request({
        url: `${process.env.VUE_APP_FAVORITE_URL}/preference/${id}`,
        method: 'get',
      })
    }
  };
}
