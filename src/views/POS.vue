<template>
        <div  class="col">
        <Prodactes :products="[{ image: 'image.png', price: 50, name: 'matcha' }, { image: 'image.png', price: 30, name: 'tea' }]" />
</div>
</template>


<script setup>
import Prodactes from '@/components/prodactes.vue';
</script>
