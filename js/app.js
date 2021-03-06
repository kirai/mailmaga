App = Ember.Application.create();

var emails = [{
  "id": "1",
  "email": "d2h@rails.org",
  "name": "d2h",
  "notes": "There are lots of à la carte software environments in this world. Places where in order to eat, you must first carefully look over the menu of options to order exactly what you want."
}, {
  "id": "2",
  "email": "test@gmail.com",
  "name": "test",
  "notes": "A long list of topics were raised and I took a time to ramble at large about all of them at once. Apologies for not taking the time to be more succinct, but at least each topic has a header so you can skip stuff you don't care about.\n\n### Maintainability\n\nIt's simply not true to say that I don't care about maintainability. I still work on the oldest Rails app in the world."
}];

App.Router.map(function() {
	this.resource('emails', function() {
		this.resource('email', { path: ':email_id' });
	});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

App.EmailsRoute = Ember.Route.extend({
	model: function() {
		return emails;
		// return $.getJSON('/testdata.json').then(function(data) {
		// 	console.log(data);
		// 	return data;
		// });
	}
});

App.EmailRoute = Ember.Route.extend({
	model: function(params) {
		return emails.findBy('id', params.email_id);
	}
});

// var testjson = function() {
// 	$.getJSON('http://www.kirainet.com/testdata.json').then(function(data) {
// 		console.log(data);
// 	});
// };