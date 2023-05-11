import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        
        key: '0f4275f3e92145c8a5354c1ba3b4f6eb'

    }
})