<template>
  <div id="app" ref="pageBox">
      <page-nav></page-nav>
      <div id="appBox">
        <div class="page-main-box" ref="pageMainBox">
          <router-view/>
        </div>
      </div>
  </div>
</template>

<script>
  import PageNav from '@/components/page-nav'
  export default {
    name: 'App',
    components:{
        'page-nav': PageNav
    },
    data () {
      return {
        clientHeight: window.innerHeight,
        clientWidth: window.innerWidth
      }
    },
    methods: {
      fixBox () {
        console.log('fix')
        this.clientHeight = window.innerHeight
        this.clientWidth = window.innerWidth
        this.$refs.pageMainBox.style.minHeight = this.clientHeight + 'px'
        this.$refs.pageBox.style.height = this.clientHeight + 'px'
        this.$refs.pageBox.style.width = this.clientWidth + 'px'
      }
    },
    mounted () {
    }
  }
</script>

<style>
    *{
        padding: 0;
        margin: 0;
        border: 0;
        text-decoration: none;
        list-style-type: none;
    }
    #app {
        font-family: "Helvetica Neue",Helvetica,"Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }
</style>
