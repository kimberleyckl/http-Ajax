import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json'



axios.interceptors.request.use(request => {
    console.log(request)
    // edit request config
    return request;
    // you need to always return request or it is blocking the request
}, error =>{
    console.log(error)
    return Promise.reject(error)
})  // this error is for errors like internet problem

axios.interceptors.response.use(request => {
    console.log(request)
    // edit request config
    return request;
    // you need to always return request or it is blocking the request
}, error =>{
    console.log(error)
    return Promise.reject(error)
})  // this error is for errors like internet problem

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
