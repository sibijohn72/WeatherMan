export function initialize( appInstance) {
  	let self=this;
		let json=null;
		window.initMap=function(){};
		$.ajax({
			url: "data/properties.json",
			dataType: "text",
			async: false,
			success: function(data){
				let Instance = Ember.Object.extend({
				   url:JSON.parse(data).url,
				   iconURL:JSON.parse(data).iconURL
  				});
				appInstance.register('instance:main',Instance);
  				appInstance.inject('controller', 'instance', 'instance:main');
			}
		});
}

export default {
  initialize
};
