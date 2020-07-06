<template>
  <div class="container">
    <div v-for="tag in tags" :key="tag.name" >
      <span class="tag_container">
        <router-link :to="{name:'home'}">
          {{$t('menu.'+tag.name)}}
        </router-link>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NavTabs',
  data () {
    return {
      tags: []
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.tags.length === 0) {
        let home = this.$router.options.routes[0].children[0]
        this.tags.push(home)
      }
    })
  },
  watch: {
    $route (to, from) {
      if (!this.tags.some(ele => ele.name === to.name)) {
        if (this.tags.length < 6) {
          this.tags.push(to)
        } else {
          this.tags.shift(to)
          this.tags.push(to)
        }
      }
    }
  },
  methods: {
    tagHandle (type, tag) {
      if (type === 'CLICK') {
        console.log(type)
        this.$router.push({name: 'home'})
      } else {
        console.log(type)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .container{
    border-bottom:solid 1px #e0e0e0;
    height:24px;
    box-shadow: 0px 2px 3px #e0e0e0;
    display: flex;
    .tag_container{
      color:black;
      text-align: center;
      margin-left: 12px;
      font-size:12px
    }
  }
</style>
