import request from "@/utils/request.js";

export function useForecastApi() {
  return {
    getForecast: (params) => {
      return request({
        url: `${process.env.VUE_APP_FORECAST_URL}/flow/selectList`,
        method: "get",
        params: {
          page: params.page,
          size: params.size,
        },
      });
    },

    getById: (id) => {
      return request({
        url: `${process.env.VUE_APP_FORECAST_URL}/flow/selectForecast/${id}`,
        method: "get",
      });
    },

    getByStoreId: (id) => {
      return request({
        url: `${process.env.VUE_APP_FORECAST_URL}/flow/selectByForecastId/${id}`,
        method: "get",
      });
    },

    AddForecast: (params) => {
      return request({
        url: `${process.env.VUE_APP_FORECAST_URL}/flow/addForecast`,
        method: "post",
        data: params,
      });
    },

    deleteForecast: (id) => {
      return request({
        url: `${process.env.VUE_APP_FORECAST_URL}/flow/deleteForecast/${id}`,
        method: "delete",
      });
    },


    updateForecastInfo: (params) => {
      return request({
        url: `${process.env.VUE_APP_FORECAST_URL}/flow/updateForecast/`,
        method: "put",
        data:params
      });
    },
  };
}
