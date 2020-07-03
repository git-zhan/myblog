<template>
  <div class="container">
    <el-tag v-for="tag in tags" :key="tag.name" closable hit size="medium" @click.native="tagHandle('click',tag)" @close="tagHandle('close',tag)">
      {{$t('menu.'+tag.name)}}
    </el-tag>
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
      if (type === 'close') {
        this.tags.splice(this.tags.indexOf(tag), 1)
      } else {
        console.log(1)
        this.$router.push({path: '/'})
      }
    }
  }
}
</script>
