import request from "@/utils/request";

export function useStoreApi() {
  return {
    getStore: (params) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/store/selectlist`,
        method: "get",
        params: {
          page: params.page,
          size: params.size,
        },
      });
    },

    getById: (id) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/store/selectbyid`,
        method: "get",
        params: {
          id: id,
        },
      });
    },

    deleteStore: (id) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/store/deletebyid`,
        method: "put",
        params: {
          id: id,
        },
      });
    },

    addStore: (params) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/store/createstore`,
        method: "post",
        data:params,
      });
    },

    updateStore: (params) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/store/updatebyid`,
        method: "put",
        data:params,
      });
    },
  };
}