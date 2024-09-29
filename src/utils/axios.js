import axios from 'axios'

// 请求超时
const timeout = import.meta.env.VITE_API_TIMEOUT
const baseURL = import.meta.env.VITE_API_BASE_URL
// 创建 axios 实例
const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: timeout ? Number.parseInt(timeout) : 0,
})

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
    // 可以在此添加通用的请求头或其他配置
    // 例如在每个请求中都加上 token
    const token = localStorage.getItem('token');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    console.error('Request Error: ', error);
    return Promise.reject(error);
})

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response) => {
        // 响应数据处理
        const res = response.data;
        if (response.status !== 200) {
            return Promise.reject(res);
        } else {
            return res;
        }
    },
    (error) => {
        console.error('Response Error: ', error);
        return Promise.reject(error);
    })
// 此处相当于二次响应拦截
// 为响应数据进行定制化处理

const requestInstance = (config) => {
    return new Promise((resolve, reject) => {
        axiosInstance.request(config).then((res) => {
            const data = res; // 如果data.code为错误代码返回message信息
            resolve(data)
        });
    });
};
export function get(config, url, parms, type) {
    return requestInstance({ ...config, url, method: 'GET', params: parms, responseType: type });
}
export function post(config, url, data, type) {
    return requestInstance({ ...config, url, method: 'POST', data: data, responseType: type });
}
export function put(config, url, parms) {
    return requestInstance({ ...config, url, method: 'PUT', params: parms });
}
export function del(config, url, data) {
    return requestInstance({ ...config, url, method: 'DELETE', data: data });
}
