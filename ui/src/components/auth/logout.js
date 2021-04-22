import React, {  useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
export default function Logout() {
	const history = useHistory();

	useEffect(() => {
		axiosInstance.get('api/logout');
		localStorage.removeItem('token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/');
	});
	return <div>Logout</div>;
}