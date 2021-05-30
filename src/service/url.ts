/*
 * @Descripttion: 统一接口维护地方
 * @Author: 杨晨
 * @Date: 2021-05-29 20:04:29
 * @LastEditors: 杨晨
 * @LastEditTime: 2021-05-29 20:14:17
 */
export const DOMAIN = {
  // 正式环境域名
  cxapi: '',
  // pre环境域名
  cxapi_pre: '',
  // sim环境
  cxapi_sim: '',
  // 测试环境域名-后端pre环境
  cxapi_test: ''
}

const getApi = (envType: string) => {
  return {
    test: envType + '/url',
  }
}

// 固定接口
const FIXED_URL = {
  demo: 'url'
}

export default function () {
  const config: any = {
    prod: DOMAIN.cxapi,
    pre: DOMAIN.cxapi_pre,
    sim: DOMAIN.cxapi_sim,
    dev: DOMAIN.cxapi_test,
  }
  const ENVTYPE = config[((process.env || {}).VUE_APP_ENV)] || config.prod;
  return Object.assign(getApi(ENVTYPE), FIXED_URL)
}
