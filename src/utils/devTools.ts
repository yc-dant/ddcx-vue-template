/*
 * @Descripttion:  统一维护单个功能文件 
 * @Author: 杨晨
 * @Date: 2021-05-14 15:18:16
 * @LastEditors: 杨晨
 * @LastEditTime: 2021-05-29 20:11:08
 */
// 打开调试工具
export const openDevTool = (callback: any) => {
  const erudaEl = document.createElement('script')
  erudaEl.setAttribute('type', 'text/javascript')
  erudaEl.setAttribute('src', 'https://cdn.jsdelivr.net/npm/eruda')
  document.head.append(erudaEl)
  erudaEl.onload = () => {
    const win: any = window
    win.eruda.init()
    callback()
  }
}