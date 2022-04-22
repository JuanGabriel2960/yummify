import axios from 'axios';

const API_BASE = 'https://yummify-backend.herokuapp.com'

const http = axios.create({ baseURL: API_BASE })

export default http