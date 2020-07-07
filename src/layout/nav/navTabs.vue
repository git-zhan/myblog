<template>
  <div class="container">
    <nav-tab name="home" :title="$t('menu.home')" path='/'/>
    <nav-tab name="home" :title="$t('menu.home')" path='/'/>
    <nav-tab name="home" :title="$t('menu.home')" path='/'/>
    <nav-tab name="home" :title="$t('menu.home')" path='/'/>
    <nav-tab name="home" :title="$t('menu.home')" path='/'/>
    <nav-tab name="home" :title="$t('menu.home')" path='/'/>
  </div>
</template>
<script>
import NavTab from './navTab'
export default {
  name: 'NavTabs',
  components: {
    NavTab
  },
  data () {
    return {
      NavTabs: []
    }
  }
}
</script>
<style lang="scss" scoped>
  // .container {
    // display: flex;
    // align-items: center;
    // justify-content: left;
    // height:30px;
    // cursor: pointer;
  // }
</style>
