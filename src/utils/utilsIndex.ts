// 打开调试工具
export const openDevTool = (callback: any) => {
  const erudaEl = document.createElement('script')
  erudaEl.setAttribute('type', 'text/javascript')
  erudaEl.setAttribute('src', 'https://cdn.jsdelivr.net/npm/eruda')
  document.head.append(erudaEl)
  erudaEl.onload = (argv) => {
    const win: any = window
    win.eruda.init()
    callback()
  }
}