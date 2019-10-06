import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Words from './views/Words.vue'
import Gender from "@/views/Gender"
import Province from "@/views/Province"
import Constellation from "@/views/Constellation"
import Ages from "@/views/Ages"
import Publish from "@/views/Publish"
import Singer from "@/views/Singer"
import Sentence from "@/views/Sentence"
import Forecast from "@/views/Forecast"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/words',
      name: 'words',
      component: Words
    }, {
      path: '/gender',
      name: 'gender',
      component: Gender
    }, {
      path: '/province',
      name: 'province',
      component: Province
    }, {
      path: '/constellation',
      name: 'constellation',
      component: Constellation
    }, {
      path: '/ages',
      name: 'ages',
      component: Ages
    }, {
      path: '/publish',
      name: 'publish',
      component: Publish
    }, {
      path: '/singer',
      name: 'singer',
      component: Singer
    }, {
      path: '/words/:word',
      name: 'words-word',
      component: Sentence
    }, {
      path: '/forecast',
      name: 'forecast',
      component: Forecast
    }
  ]
})
