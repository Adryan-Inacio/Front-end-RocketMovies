import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-o864.onrender.com'
})
