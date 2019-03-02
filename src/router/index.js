import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Pets from '@/components/Pets'
import Map from '@/components/Map'
import Plants from '@/components/Plants'
import Issues from '@/components/Issues'
import Places from '@/components/Places'
import Leaders from '@/components/Leaders'
import Users from '@/components/Users'
import SettingsSecurity from '@/components/SettingsSecurity'
import SettingsPrivacy from '@/components/SettingsPrivacy'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/pets',
      name: 'Pets',
      component: Pets
    },
    {
      path: '/plants',
      name: 'Plants',
      component: Plants
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/issues',
      name: 'Issues',
      component: Issues
    },
    {
      path: '/places',
      name: 'Places',
      component: Places
    },
    {
      path: '/leaders',
      name: 'Leaders',
      component: Leaders
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/settings/security',
      name: 'SettingsSecurity',
      component: SettingsSecurity
    },
    {
      path: '/settings/privacy',
      name: 'SettingsPrivacy',
      component: SettingsPrivacy
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
