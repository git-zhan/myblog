<template>
  <div class="container">
    <mavon-editor v-model="value"/>
  </div>
</template>
<script>
export default {
  name: 'BlogPublish',
  data () {
    return {
      value: ''
    }
  }
}
</script>
