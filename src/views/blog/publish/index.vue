<template>
  <div class="container">
    <mavon-editor v-model="value"/>
  </div>
</template>
<script>
export default {
  name: 'BlogPublish',
  watch: {
    value: function (old, newValue) {
      console.log(old)
    }
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>
