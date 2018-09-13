import Component from '@ember/component';

export default Component.extend({
	didInsertElement(){
		this._super();
		let self=this;
		Ember.run.later('actions',function(){
			let input = document.getElementById("autocomplete");
	      	let autocomplete=new window.google.maps.places.Autocomplete(input);
			google.maps.event.addListener(autocomplete, 'place_changed', function () {
            	let place=autocomplete.getPlace();
            	self.sendAction('placeChanged',place);
	        });
		});
	}
});
