<template lang="pug">
  #Navbar
    h1 Navbar
    button(v-on:click="next") NEXT
    button(v-on:click="previous") PREVIOUS
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    next: function () {
      this.$emit('next')
    },
    previous: function () {
      this.$emit('previous')
    }
  }
}
</script>

<style scoped lang="sass">

</style>
