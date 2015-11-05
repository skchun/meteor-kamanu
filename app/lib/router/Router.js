/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Stuff"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/pueo', {
  name: 'Pueo'
});

Router.route('/aukahi', {
  name: 'Aukahi'
});

Router.route('/kamanuv6', {
  name: 'Kamanu V6'
});