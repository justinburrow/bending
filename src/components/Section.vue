<template lang="pug">
  #section
    router-view(v-on:next="next" :next-page="nextPage")
</template>

<script>
export default {
  name: 'Section',
  methods: {
    next: function () {
      this.$emit('next')
      this.nextTitle()
    }
  },
  props: {
    nextPage: String
  },
  mounted: function () {
    this.nextTitle()
  }
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  #section
    height: 100%
</style>
