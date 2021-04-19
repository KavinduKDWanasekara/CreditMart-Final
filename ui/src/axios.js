import axios from 'axios';

const baseURL = 'https://credit-mart.herokuapp.com/';

const axiosInstance = axios.create({
	baseURL: baseURL,
	// timeout: 10000,
	headers: {
		Authorization: localStorage.getItem('token')
			? 'Token ' + localStorage.getItem('token')
			: null,
		'Content-Type': 'application/json',
		Accept: 'application/json',
	}, 
});



export default axiosInstance;