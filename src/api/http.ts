import axios from 'axios';

const API_BASE = 'http://10.0.2.2:8080'

const http = axios.create({ baseURL: API_BASE })

export default http