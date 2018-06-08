<template>
  <div class="footer">
      <div class="foooter_option" :class="select == 'index' ? 'select_option' : ''">
          <i class="iconfont icon-shouye"></i>
          <router-link :to="{ name: '', params: {}, path: '/' }">首页</router-link>
      </div>
      <div class="foooter_option" :class="select == 'discover' ? 'select_option' : ''">
          <i class="iconfont icon-faxian"></i>
          <router-link :to="{ name: '', params: {}, path: '/discover' }">发现</router-link>
      </div>
      <div class="foooter_option" :class="select == 'moments' ? 'select_option' : ''">
          <i class="iconfont icon-dongtai-"></i>
          <router-link :to="{ name: '', params: {}, path: '/moments' }">动态</router-link>
      </div>
      <div class="foooter_option" :class="select == 'my' ? 'select_option' : ''">
          <i class="iconfont icon-04"></i>
          <router-link :to="{ name: '', params: {}, path: '/my' }">我的</router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'widget_footer',
  props: ['select'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import '../../../static/css/index.less';
    .footer {
        height: .5rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        font-size: .12rem;
        display: flex;
        color: @gray;
        box-sizing: border-box;
        border-top: 1px solid #f4f4f4;
        .foooter_option {
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .select_option {
            color: @blue;
            a {
                color: @blue;
            }
        }
        a {
            color: @gray;
        }
        i {
            font-size: .18rem;
            margin-bottom: .05rem;
        }

    }
</style>
