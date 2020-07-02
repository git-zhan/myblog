<template>
  <div class="containe">
    <svg-icon icon-class="translate"></svg-icon>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {

    }
  },
  methods: {
    switchLang () {
      console.log(this.$i18n.locale)
      this.$i18n.locale = 'en'
    }
  }
}
</script>
<style scoped>

</style>
