import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'http://hackathon-backend-blue.vercel.app',
    headers: {
        'Content-Type': 'application/json',
    },
})

export default ApiInstance;