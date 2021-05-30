/*
 * @Descripttion: 
 * @Author: 杨晨
 * @Date: 2021-05-29 20:04:29
 * @LastEditors: 杨晨
 * @LastEditTime: 2021-05-29 20:08:23
 */
import packAxios from './configAxios'
import url from './url'

/**
 * 任务列表
 * @param {number} pageSize       数量
 * @param {number} pageNum        页码
 * @param {ParamsFilter} filter   查询参数
 */
interface ParamsFilter {
  // // 当前用户名
  // username: string
  taskId?: string
  // 枚举备注: INIT :未开始 PROCESSING: 进行中 OVER: 已结束 ABORTED: 已中止
  status?: string,
  lifeCycle?: string,
  marketId?: string
  name?: string
  parentId?: string
}
export function axiosTaskList(pageSize: number, pageNum: number, filter: ParamsFilter) {
  return packAxios({
    method: 'post',
    url: `${url()}`,
    data: {
      pageSize,
      pageNum,
      filter,
    }
  })
}