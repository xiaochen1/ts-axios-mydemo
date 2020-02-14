import { AxiosRequestConfig } from '../types'
export default function xhr(config: AxiosRequestConfig): void {
  let { url, method = 'get', data = null } = config
  let req = new XMLHttpRequest()
  req.open(method.toUpperCase(), url, true)
  req.send(data)
}
