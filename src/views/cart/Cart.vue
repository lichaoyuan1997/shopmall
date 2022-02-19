<template>
  <div>
    <nav-bar class="cart-nav">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/NavBar/NavBar.vue'
  export default {
    name:'cart',
    components: {
      NavBar
    }
  }
</script>

<style scoped>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>