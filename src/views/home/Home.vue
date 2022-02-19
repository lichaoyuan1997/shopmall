<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center"></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/NavBar/NavBar.vue'
  import {getHomeMultidata} from 'network/home.js'
  export default {
    name:'home',
    components: {
      NavBar
    },
    data() {
      return {
        banners:[],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.banner.list
      })
    }
  }
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>