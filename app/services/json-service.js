import Service from '@ember/service';
import $ from 'jquery';
import { Promise } from 'rsvp';
import { run } from '@ember/runloop'
export default Service.extend({
	fetch(reqURL, data, method){
		let self=this;
		console.log(reqURL);
		return new Promise((resolve,reject)=>{
			$.ajax({
				crossDomain:true,
				url:reqURL,
				method: method,
				headers: {
							"Content-type":"application/x-www-form-urlencoded"
				}
			}).done(function (data, textStatus, xhr){
				run(function(){
					if(data.error)
						reject("error");
					else
						resolve({
							data:data
						});
				});
			}).fail(function(xhr,textStatus, errorThrown){
				run(function(){
					if (xhr.status === 0)
						reject('Please check your internet connection')
					else{
						reject({errorCode: xhr.status, errorMessage: xhr.statusText});
					}
				})
			})
		});
	}
});
