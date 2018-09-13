import Controller from '@ember/controller';

export default Controller.extend({
	jsonService:Ember.inject.service('json-service'),
	place:null,
	generateRandomLong() {
    var num = (Math.random()*180).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
	},
	generateRandomLat() {
    var num = (Math.random()*85).toFixed(3);
    var posorneg = Math.floor(Math.random());
    if (posorneg == 0) {
        num = num * -1;
    }
    return num;
	},
	actions:{
		placeChanged(place){
			let self=this;
			if(place.id)
			{
				self.set('place',place);
				self.set('showWeather',false);
				self.get('jsonService').fetch(self.get('instance').url+'lat='+place.geometry.location.lat()+'&lon='+place.geometry.location.lng(),null,'GET').then(function(json){
					self.set('currentWeatherObject',json.data);
					self.set('showWeather',true);
				},function(reason){
					console.log(JSON.stringify(reason));
				});
			}
			else
			{
				self.set('currentWeatherObject',null);
				console.log("place not found");
			}
		},
		showRandomWeather(){
			let self=this;
			self.get('jsonService').fetch(self.get('instance').url+'lat='+self.generateRandomLat()+'&lon='+self.generateRandomLong(),null,'GET').then(function(json){
				self.set('currentWeatherObject',json.data);
				self.set('place',null);
				self.set('showWeather',true);
			},function(reason){
				console.log(JSON.stringify(reason));
			});
			
		}
	}});
