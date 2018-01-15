<template lang="pug">
  .page
    .container
      .triangle.bottom(:class="{active: isActive}" :style="{'border-right': scrW + 'px solid transparent'}")
      .triangle.top(:class="{active: isActive}" :style="{'border-left': scrW + 'px solid transparent'}")
    .content-container(:class="{active: fadeIn}")
      h1 My Skill Set
      .content
        .left
        .right
      button.next-page(v-on:click="next")
        span.up-next Up Next:
        span {{ nextPage }}
</template>

<script>
export default {
  name: 'SkillSet',
  props: {
    nextPage: String
  },
  data: function () {
    return {
      isActive: false,
      fadeIn: false,
      scrW: 0,
      scrY: 0
    }
  },
  methods: {
    next: function () {
      this.$emit('next')
      this.nextTitle()
    },
    start: function () {
      this.$emit('next')
    },
    setTriangle: function () {
      this.scrW = window.innerWidth
      this.scrY = document.body.scrollTop
    }
  },
  created: function () {
    this.setTriangle()
    var self = this
    setTimeout(function () {
      self.isActive = true
    }, 500)
    setTimeout(function () {
      self.fadeIn = true
    }, 1500)
    window.addEventListener('resize', this.setTriangle)
  },
  destroyed: function () {
    window.removeEventListener('resize', this.setTriangle)
  }
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  .page
    padding: 100px 30px 160px 30px
  .container
    position: absolute
    top: 0
    left: 0
    z-index: 3
    width: 100vw
    height: 100vh
  .triangle
    width: 0
    height: 0
    opacity: 1
    position: absolute
    &.active
      transform: translateX(0) !important
      opacity: 1 !important
    &.top
      z-index: 5
      border-top: 100vh solid lighten($orange, 20%)
      border-left: 100vh solid transparent
      transform: translateX(100%)
      transition: .4s transform ease-out
    &.bottom
      z-index: 5
      border-bottom: 100vh solid lighten($red, 25%)
      border-right: 100vh solid transparent
      transform: translateX(-100%)
      transition: .4s transform ease-out
  .content-container
    position: relative
    z-index: 10
    opacity: 0
    transition: opacity 0.5s ease
    &.active
      opacity: 1
  h1
    text-transform: uppercase
    font-weight: 300
    letter-spacing: 3px
    font-size: 24px
    line-height: 1
    color: lighten(black, 25%)
    margin-bottom: 40px
  h2
    font-size: 80px
    font-weight: 500
    text-transform: uppercase
    letter-spacing: 2px
    border-bottom: 1px dotted lighten(black, 70%)
    padding-bottom: 30px
    line-height: 1
    margin-bottom: 30px
    color: lighten(black, 15%)
  .content
    display: flex
    p
      font-size: 18px
      line-height: 1.6
      margin-bottom: 30px
    .left
      flex: 0 0 57%
      margin-right: 5%
    .right
      flex: 0 0 38%
      top: -60px
      position: relative
      img
        max-width: 100%
  button.next-page
    cursor: pointer
    outline: none
    padding: 15px 30px
    background: $lightblue
    color: $white
    margin-top: 60px
    text-transform: uppercase
    font: 500 18px 'Oswald', sans-serif
    letter-spacing: 2px
    border: 1px solid darken($lightblue, 4%)
    box-shadow: 0 2px 2px 2px rgba(0,0,0,0.1)
    transition: all 0.3s ease
    margin-left: auto
    margin-right: auto
    display: block
    &:hover
      background: darken($lightblue, 10%)
    span.up-next
      font-size: 12px
      font-weight: 300
      margin-right: 10px
      top: -2px
      position: relative
</style>
