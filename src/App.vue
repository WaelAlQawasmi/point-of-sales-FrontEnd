<script setup>
 import { RouterView } from 'vue-router';
</script>

<template>
 <div class="container-fluid m-0">
  <div class="row">
    <Sidebar :username="username" :isAdmin="isAdmin" />
    <router-view /> 
    
   <button v-show="isAdmin" @click="changeRole">Change Role</button> 
  </div>
</div>
</template>



<script>
import Sidebar from '@/components/Sidebar.vue';
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      username: 'wael',
      isAdmin: false
    };
  },
  methods: {
    changeRole() {
      this.isAdmin = !this.isAdmin;
      console.log(this.isAdmin);
    }
  }
}
</script>
