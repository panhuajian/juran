<template>
    <div class="index">
        我是我的页
        <widget-footer :select="'my'"></widget-footer>
    </div>
</template>

<script>
import WidgetFooter from '@/components/footer/widgetFooter.vue'
export default {
  name: 'my',
  components: {WidgetFooter},
  mounted () {
    console.log('我是my页面')
  }
}
</script>

<style scoped lang="less">
</style>
