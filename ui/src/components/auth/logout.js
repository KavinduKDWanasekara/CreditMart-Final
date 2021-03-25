import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
export default function Logout() {
	const history = useHistory();

	useEffect(() => {
		axiosInstance.get('api/logout');
		localStorage.removeItem('token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/login');
	});
	return <div>Logout</div>;
}