<template>
        <div  class="col">
        <Prodactes  @addTocart="addToCart" :products="[{ image: 'image.png', price: 50, name: 'matcha' }, { image: 'image.png', price: 30, name: 'tea' }]" />
        <cart :cart="userCart"  @removeItem="removeFromCart" />
</div>
</template>


<script setup>
import Prodactes from '@/components/prodactes.vue';
import cart from '@/components/cart.vue';

</script>
<script>
export default {
  data() {
    return {
      userCart: []
    };
  },
  methods: {
    addToCart(item) {
      this.userCart.push(item);
    },
    removeFromCart(item) {
      const indexOfItem = this.userCart.indexOf(item);
      this.userCart.splice(indexOfItem, 1); 
    }
  }
}
</script>
