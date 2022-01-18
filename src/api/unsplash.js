import axios from 'axios';

// Creates an instance of the axios client with defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID DWpXUqOHifDYUuhearjcQznSOoiEdIsP6TcRkB8AGZA'
    }
})