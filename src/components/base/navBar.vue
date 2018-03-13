<template>
  <footer class="footer" ref='footer'>
    <nav>
      <router-link :to="{name:item.toLinkName}" v-for="(item,index) in navList" @click.native="changeNav(index)" :class="activeIndex === index ? 'active' : ''">
        <i class="iconfont" :class="activeIndex === index ? item.class : item.activeClass"></i>
        <span>{{item.name}}</span>
      </router-link>
    </nav>
  </footer>
</template>
<script>
export default {
  name: 'navBar',
  computed: {},
  data() {
    return {
      navList: [
        { toLinkName: 'test', name: '首页', class: 'icon-wodexuanzhong', activeClass: 'icon-wo' },
        { toLinkName: 'test', name: '看电视', class: 'icon-wodexuanzhong', activeClass: 'icon-wo' },
        { toLinkName: 'test', name: '模块', class: 'icon-wodexuanzhong', activeClass: 'icon-wo' },
        { toLinkName: 'broadcast', name: '听广播', class: 'icon-wodexuanzhong', activeClass: 'icon-wo' },
        { toLinkName: 'test', name: '我的', class: 'icon-wodexuanzhong', activeClass: 'icon-wo' },
      ],
      activeIndex: 3,
    }
  },
  created() {},
  mounted() {},
  watch: {},
  filters: {},
  methods: {
    changeNav(data) {
      this.activeIndex = data;
    }
  },
  update() {},
  destroyed() {},
  components: {}
}

</script>
<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #e7e7e7;
}

.footer nav {
  display: flex;
  width: 100%;
  height: 100%;
}

.footer nav a {
  flex: 1;
  display: inline-block;
  height: 100%;
  text-align: center;
  font-size: 10px;
  color: #bcbcbc;
  &.active {
    color: #df2f31;
  }
  i {
    padding: 8px 0 4px;
    display: block;
  }
}

</style>
