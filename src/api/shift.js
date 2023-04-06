import request from "@/utils/request.js";

/**
 * 员工偏好API
 * */
export function useShiftApi () {
  return {
    getShifts: (params) => {
      return request({
        url: `${process.env.VUE_APP_SHIFT_URL}/shift/${params.page}/${params.size}`,
        method: "get",
      });
    },

    getByStoreId: (id) => {
      return request({
        url: `${process.env.VUE_APP_SHIFT_URL}/shift/store/${id}`,
        method: "get",
      });
    },

    deleteByStoreId: (id) => {
      return request({
        url: `${process.env.VUE_APP_SHIFT_URL}/shift/store/${id}`,
        method: "delete",
      });
    },

    addShiftInfo: (params, id) => {
      return request({
        url: `${process.env.VUE_APP_SHIFT_URL}/shift/insert`,
        method: 'post',
        params:{
          staffid:id,
        },
        data:params,
      })
    },

    updateShiftInfo: (params) => {
      return request({
        url: `${process.env.VUE_APP_SHIFT_URL}/shift/update`,
        method: 'put',
        data:params,
      })
    },

    deleteShiftInfo: (id) => {
      return request({
        url: `${process.env.VUE_APP_SHIFT_URL}/shift/${id}`,
        method: 'delete',
      })
    },

    searchById: (id) => {
      return request({
        url: `${process.env.VUE_APP_SHIFT_URL}/shift/${id}`,
        method: 'get',
      })
    }
  };
}