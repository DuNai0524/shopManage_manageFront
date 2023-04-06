import request from "@/utils/request";

export function useRuleApi() {
  return {
    getRules: (params) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/rule/selectlist`,
        method: "get",
        params: {
          page: params.page,
          size: params.size,
        },
      });
    },

    getById: (id) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/rule/selectbyid`,
        method: "get",
        params: {
          id: id,
        },
      });
    },

    deleteRule: (id) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/rule/deleterule`,
        method: "put",
        params: {
          id: id,
        },
      });
    },

    addRule: (params) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/rule/createstore`,
        method: "post",
        data:params,
      });
    },

    updateRule: (params) => {
      return request({
        url: `${process.env.VUE_APP_STORE_RULE_URL}/rule/updatebyid`,
        method: "put",
        data:params,
      });
    },
  };
}
