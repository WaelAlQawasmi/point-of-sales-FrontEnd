<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
 <div class="container m-0">
  <div class="row">
    <Sidebar :username="username" :isAdmin="isAdmin" />
    <button v-show="isAdmin" @click="changeRole">Change Role</button>
    <Prodactes :products="[{ image: 'image.png', price: 50, name: 'matcha' }, { image: 'image.png', price: 30, name: 'tea' }]" />
  </div>
 </div>

</template>

<style scoped></style>


<script>
import Sidebar from '@/components/Sidebar.vue';
import Prodactes from './components/prodactes.vue';

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
