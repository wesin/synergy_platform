import axios from "axios";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// import {progress, Utils} from "calf-common";

/**
 * 请求发起前的拦截器
 * @param config
 * @returns {*}
 */
function beforeStart(config) {
	NProgress.start();
	return config;
}

/**
 * 统一拦截所有失败的请求
 * @param error
 * @returns {Promise<never>}
 */
function onFailure(error) {
	NProgress.done();
	return Promise.reject(error);
}

/**
 * 统一拦截所有成功的请求
 * @param error
 * @returns {Promise<never>}
 */
function onSuccess(config) {
	NProgress.done();
	return config;
}

axios.interceptors.request.use(beforeStart, onFailure);
axios.interceptors.response.use(onSuccess, onFailure);

axios.interceptors.response.use(
	response => {
	  return response;
	},
	error => {
	  if (error.response) {
		switch (error.response.status) {
		  case 401:
		  //跳转登录
		  this.$store.dispatch(logout);
		}
	  }
	}
  );

function request(options) {
	return axios(options).then(res => {
		return res;
	}).catch(error => {
		return Promise.reject(error);
	})
}

export default request;
