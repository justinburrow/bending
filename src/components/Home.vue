<template lang="pug">
  #home
    h1 Home page
    button(v-on:click="start") Start Exploring
</template>

<script>
export default {
  name: 'Home',
  methods: {
    start: function () {
      this.$emit('next')
    }
  }
}
</script>

<style lang="sass">
  #Navbar
    transform: translateY(-100%)
</style>
