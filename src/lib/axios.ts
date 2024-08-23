import { env } from '@/constants/env'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: env.BASE_URL,
  timeout: 10000,
  withCredentials: true,
})

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export const get = async <T>(url: string, config?: AxiosRequestConfig) => {
  const res = await axiosInstance.get<T, AxiosResponse<T>>(url, config)
  return res.data
}

export const post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => {
  const res = await axiosInstance.post<T, AxiosResponse<T>>(url, data, config)
  return res.data
}

export const put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig,
) => {
  const res = await axiosInstance.put<T, AxiosResponse<T>>(url, data, config)
  return res.data
}

export const del = async <T>(url: string, config?: AxiosRequestConfig) => {
  const res = await axiosInstance.delete<T, AxiosResponse<T>>(url, config)
  return res.data
}
