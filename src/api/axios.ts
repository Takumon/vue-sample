import Axios from 'axios'

export const Api = Axios.create({
  baseURL: `http://127.0.0.1:3000`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
