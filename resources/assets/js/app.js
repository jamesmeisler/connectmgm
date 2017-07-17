
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

Vue.component('page-header', require('./components/page-header.vue'));
Vue.component('breadcrumbs', require('./components/breadcrumbs.vue'));
Vue.component('jobs-page', require('./components/jobs-page.vue'));

const app = new Vue({
  el: '#app'
});



