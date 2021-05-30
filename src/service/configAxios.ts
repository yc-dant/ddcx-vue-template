import axios from 'axios'
import router from '../router'

const packAxios = (option: any) => {
  return new Promise((resolve, reject) => {
    const headers: any = {
      'X-Requested-With': 'XMLHttpRequest',
    }
    if (Object.prototype.toString.call(option.data) == '[object FormData]') {
      headers['Content-Type'] = 'multipart/form-data'
    }
    // 创建一个axios请求
    const instance = axios.create({
      timeout: 30 * 1000, // 请求超时时间,
      withCredentials: true,
      headers
    })

    // 添加请求拦截器
    instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        // 对请求错误做些什么
        // loadingInstance.close()
        reject(err)
      }
    )

    // 添加响应拦截器
    instance.interceptors.response.use(
      (response: any) => {
        const { data } = response || {}
        if (data && data.code == 10008) {
          router.push({ name: 'login' })
        }
        return response
      },
      (err) => {
        const { status, data } = (err || {}).response || {}
        let hint = ''
        if (!navigator.onLine) {
          hint = '网络异常，请检查您的网络连接！'
        } else if (status == 401) {
          console.log('401----', data.location)
          window.location.href = data.location + '&app_callback_index=8'
        } else if (status >= 400 && status < 500) {
          hint = '400开头错误'
        } else if (status >= 500) {
          hint = '系统异常'
        } else {
          hint = '系统异常'
        }
        reject(err)
      }
    )

    // 配置请求成功失败后返回对应失败数据
    instance(option)
      .then((res: any) => {
        try {
          let reslut = res ? res.data : res
          reslut = typeof reslut == 'string' ? JSON.parse(reslut) : reslut
          resolve(reslut)
        } catch (err) {
          reject(err)
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export default packAxios
