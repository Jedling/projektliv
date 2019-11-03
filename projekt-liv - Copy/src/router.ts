import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import FindUs from './views/FindUs.vue';
import Partners from './views/Partners.vue';
import Workshop from './views/Workshop.vue';
import Events from './views/Events.vue';
import Schedule from './views/Schedule.vue';
import Activities from './views/Activities.vue';
import Media from './views/Media.vue';
import Application from './views/Application.vue';
import AboutUs from './views/AboutUs.vue';
import Ebook from './views/Ebook.vue';
import Excercises from './views/Excercises.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/hitta-oss',
      name: 'hitta-oss',
      component: FindUs,
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners,
    },
    {
      path: '/workshop',
      name: 'Workshop',
      component: Workshop,
    },
    {
      path: '/evenemang',
      name: 'evenemang',
      component: Events,
    },
    {
      path: '/schema-aktiviteter',
      name: 'schema-aktiviteter',
      component: Schedule,
    },
    {
      path: '/activities',
      name: 'Activities',
      component: Activities,
    },
    {
      path: '/media',
      name: 'media',
      component: Media,
    },
    {
      path: '/appen',
      name: 'appen',
      component: Application,
    },
    {
      path: '/om-projekt-liv',
      name: 'om-projekt-liv',
      component: AboutUs,
    },
    {
      path: '/e-boken',
      name: 'e-boken',
      component: Ebook,
    },
    {
      path: '/övningar',
      name: 'övningar',
      component: Excercises,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
  }
});
