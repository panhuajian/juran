<template>
    <div class="index">
        我是发现页
        <widget-footer :select="'discover'"></widget-footer>
    </div>
</template>

<script>
import WidgetFooter from '@/components/footer/widgetFooter.vue'
export default {
  name: 'discover',
  components: {WidgetFooter}
}
</script>

<style scoped lang="less">
</style>
