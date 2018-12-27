<template>
  <div class="index">
    <div class="project_search" @click="search">
      <div class="search_cont">
        <i class="iconfont icon-sousuo"></i>
        搜索
      </div>
    </div>
    <widget-footer :select="'index'"></widget-footer>
  </div>
</template>

<script>
import WidgetFooter from '@/components/footer/widgetFooter.vue'
export default {
  name: 'index',
  components: {WidgetFooter},
  data () {
    return {
    }
  },
  methods: {
    search () {
      this.$router.push('/search')
    }
  }
}
</script>

<style scoped lang="less">
  @import '../../static/css/index.less';
  .index {
    .project_search {
      padding: .1rem .2rem;
      background: @blue;
      .search_cont {
        background: #fff;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        font-size: .2rem;
        position: relative;
        i {
          position: absolute;
          left: .2rem;
        }
      }
    }
  }
</style>
