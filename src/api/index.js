import axios from 'axios'
export const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {'Content-Type': "application/json;charset='utf-8'"}
})

http.interceptors.request.use(
  config => {
    console.log(config)
    return config
  }
)

http.interceptors.response.use(
  res => {
    console.log(res)
  },
  error => {
    console.log(error)
  }
)
