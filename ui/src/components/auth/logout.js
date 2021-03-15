import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axios';

export default function Logout() {
	

	useEffect(() => {
		const response = axiosInstance.post('user/logout/', {
			token: localStorage.getItem('Token'),
		});
		localStorage.removeItem('Token');
		axiosInstance.defaults.headers['Authorization'] = null;
		this.props.history.push('/login');
	});
	return <div>Logout</div>;
}