<template>
  <div id="app" class="container">
    <div class="main">
      <router-view/>
    </div>
    <nav-bar></nav-bar>
  </div>
</template>
<script>
import navBar from "@/components/base/navBar"
export default {
  name: 'app',
  computed: {},
  data() {
    return {
      test: 'test',
    }
  },
  created() {},
  mounted() {},
  watch: {},
  filters: {},
  methods: {},
  update() {},
  destroyed() {},
  components: { navBar }
}

</script>
<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}*/

</style>
