<template>
  <v-toolbar>
    <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
    <v-toolbar-title>My Forum</v-toolbar-title>
    <v-spacer></v-spacer>
    <comp-appnotification  v-if="loggedIn"></comp-appnotification>
    <div class="hidden-sm-and-down">
      <router-link 
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        v-show="item.show">
        <v-btn flat>{{ item.title }}</v-btn>
      </router-link>  
        
    </div>
  </v-toolbar>
</template>

<script>
import CompAppnotification from './AppNotification';
export default {
  data(){
    return{
      loggedIn: User.loggedIn(),
      items: [
        {title: 'Forum', to: '/forum', show: true},
        {title: 'Question', to: '/ask', show: User.loggedIn()},
        {title: 'Category', to: '/category', show: User.isAdmin()},
        {title: 'Login', to: '/login', show: !User.loggedIn()},
        {title: 'Logout', to: '/logout', show: User.loggedIn()}
      ]
    }
  },
  created() {
    EventBus.$on('logout', () => {
      User.logout()
    })
  },
  components:{
    CompAppnotification
  }
}
</script>

<style>

</style>
