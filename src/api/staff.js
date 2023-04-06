import request from "@/utils/request.js";

export function useStaffApi() {
  return {
    getStaff: (params) => {
      return request({
        url: `${process.env.VUE_APP_STAFF_URL}/staff/selectList`,
        method: "get",
        params: {
          page: params.page,
          size: params.size,
        },
      });
    },

    getById: (id) => {
      return request({
        url: `${process.env.VUE_APP_STAFF_URL}/staff/selectById/${id}`,
        method: "get",
      });
    },

    AddStaff: (params) => {
      return request({
        url: `${process.env.VUE_APP_STAFF_URL}/staff/addStaff`,
        method: "post",
        data: params,
      });
    },

    AddStaffPosition: (id, position) => {
      return request({
        url: `${process.env.VUE_APP_STAFF_URL}/staff/addPositionById/${id}/${position}`,
        method: "post",
      });
    },

    deleteStaff: (id) => {
      return request({
        url: `${process.env.VUE_APP_STAFF_URL}/staff/deleteStaff/${id}`,
        method: "delete",
      });
    },


    updateStaff: (params) => {
      return request({
        url: `${process.env.VUE_APP_STAFF_URL}/staff/updateStaffById/`,
        method: "put",
        data:params
      });
    },
  };
}
