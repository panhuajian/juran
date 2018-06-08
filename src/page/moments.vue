<template>
    <div class="index">
        我是动态页
        <widget-footer :select="'moments'"></widget-footer>
    </div>
</template>

<script>
import WidgetFooter from '@/components/footer/widgetFooter.vue'
export default {
  name: 'moments',
  components: {WidgetFooter}
}
</script>

<style scoped lang="less">
</style>
