import axios from "axios";

let myAxios = axios.create({
	baseURL: "http://localhost:3000/api",
	headers: {
		'Content-Type': 'application/json',
	}
})

// function getBase(origin, path){
// 	if (path && (path[0]===":")){
// 		if (origin.indexOf(":")!==-1){
// 			origin=origin.replace(/:[0-9]+/,"")
// 		}
// 	}
// 	return origin+(path===undefined ? "" : path);
// }

myAxios.interceptors.request.use(
	config => {
		// if((config.method == 'post' || config.method == 'put') && config.data){
		// 	config.data.LastModifiedBy = AuthUtils.getUserID();
		// 	config.data.LastModified = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
		// }
		config.headers['x-access-token'] = localStorage.token
		return config
	},
	error => Promise.reject(error)
)

export default myAxios