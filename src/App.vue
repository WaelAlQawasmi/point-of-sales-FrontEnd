<script setup>
 import { RouterView } from 'vue-router';
</script>

<template>
 <div class="container-fluid m-0">
  <div class="row">
    <Sidebar :username="username" :isAdmin="isAdmin" @changeRole="changeRole" />
    <router-view /> 
    
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
      isAdmin: true
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
