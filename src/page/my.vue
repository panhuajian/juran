<template>
    <div class="index">
        王海亮
        <widget-footer :select="'my'"></widget-footer>
    </div>
</template>

<script>
import WidgetFooter from '@/components/footer/widgetFooter.vue'
export default {
  name: 'my',
  components: {WidgetFooter}
}
</script>

<style scoped lang="less">
</style>
