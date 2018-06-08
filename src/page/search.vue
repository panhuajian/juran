<template>
  <div class="search">
    <div class="project_search">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        class="search_input"
        clearable
        autofocus>
      </el-input>
      <span class="cancel" @click="cancelBack">取消</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  components: {},
  data () {
    return {
    }
  },
  methods: {
    cancelBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../static/css/index.less';
  .search {
    .project_search {
      padding: .1rem .2rem;
      padding-right: .6rem;
      font-size: 0;
      position: relative;
      .search_input {
        background: #f4f4f4;
        font-size: .12rem;
      }
      .cancel {
        display: inline-block;
        font-size: .12rem;
        width: .4rem;
        line-height: .3rem;
        text-align: right;
        color: @blue;
        position: absolute;
      }
    }
  }
</style>
<style lang="less">
  .search_input {
    .el-input__inner {
      height: .3rem;
      line-height: .3rem;
    }
    .el-input__icon {
      line-height: .3rem;
    }
  }
</style>
