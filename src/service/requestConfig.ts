/*
 * @Descripttion: 请求配置文件
 * @Author: 杨晨
 * @Date: 2021-05-29 20:04:29
 * @LastEditors: 杨晨
 * @LastEditTime: 2021-06-01 20:32:55
 */
import packAxios from './configAxios'
import url from './url'

/**
 * 任务列表
 * @param {number} pageSize       数量
 * @param {number} pageNum        页码
 * @param {ParamsFilter} filter   查询参数
 */
export function axiosTaskList(pageSize: number, pageNum: number) {
  return packAxios({
    method: 'post',
    url: `${url()}`,
    data: {
      pageSize,
      pageNum
    }
  })
}