import { AxiosRequestConfig } from './types'
import xhr from './xhr/xhr'
function axios(config: AxiosRequestConfig) {
  console.log('axios 方法')
  xhr(config)
}

export default axios
