<template>
  <div class="test">
    <div>{{test}}</div>
  </div>
</template>
<script>
import { getList, postList } from '@/api/test.js'
export default {
  name: 'test',
  data() {
    return {
      test: 'index',
      listQuery: {
        typeId:1
      },
    }
  },
  created() {
    this.getList();
  },
  computed: {},
  methods: {
    getList() {
      // this.listLoading = true
      getList(this.listQuery).then(response => {
        console.log(response);
        // this.listLoading = false
      })
    },
    postList() {
      // this.listLoading = true
      postList().then(response => {
        console.log(response);
        // this.listLoading = false
      })
    },
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/styles/variables.scss';

.test {
  color: $white;
}

</style>
