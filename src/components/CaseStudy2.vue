<template lang="pug">
  .page
    h1 Case Study #2 - Bundling
    p.subtitle Marketing / Product Management / Front End Engineering / UX / UI
      .content
        .left
          p
            a(href="https://genexalift.myshopify.com/collections/cold-flu-bundle" target="_blank") "Collections" Bundling
          p
            a(href="https://github.com/justinburrow/bndl-app" target="_blank") Bundle App WIP Repo
        .right
          p It's very "of the moment" to consider a recurring charge subscription program for ecommerce.  Amazon does it, as do many other retailers.  However, I believe it's important to consider the nature of the product and whether it warrants a monthly subscription plan, otherwise there can be a risk run of enticing people with an initial discount on a recurring charge that becomes a nuisance, or at worst, a feeling of being taken advantage of.

          p Initially, the program looked like the common "Subscribe Monthly and Save ____%".  After investigation, I noticed that most of our online orders were single unit and not repeat, so it seemed that there as opportunity to rethink the subscription strategy.  On one level, it was working for us, as we were well above 2 subscription orders on average, but I felt the concept could be crafted in a way that told the brand story better.

          p My idea:  3 or more products, 30% off - with all the subscription amenities: change any item, pause any item, add, cancel.  The UI would live on a dedicated page so that the PDP was not cluttered with extraneous subcription information and UI - a simple callout to "Save 30% when you subscribe to your GenexaBox" (working title).

          p Unfortunately, as I was the sole resource and other initiatives around other channels continued to take priority, we never were able to launch this feature.  I've added a link to the GitHub for the WIP that would have become the "bundling app".  We did roll out a custom bundle-by-collection feature using Vue.js to capture user interaction which is shown as a link to a testing site on this page.

          p The relevance for Bending Spoons is that this was a custom feature that I designed, coded, and tested using nothing but Shopify and Recharge (for the recurring subscription feature), and wrote all the JS to execute these features.

    button.next-page(v-on:click="next")
      span.up-next Up Next:
      span {{ nextPage }}
</template>

<script>
export default {
  name: 'CaseStudy2',
  methods: {
    next: function () {
      this.$emit('next')
    }
  },
  props: {
    nextPage: String
  }
}
</script>

<style scoped lang="sass">
  @import '~@/variables.scss'
  .page
    min-height: 100vh
    background: desaturate(lighten($orange, 20%), 10%)
    padding: 100px 30px 160px 30px
    @media (max-width: $mobile)
      padding: 70px 15px 100px 15px
      height: auto
  h1
    text-transform: uppercase
    font-weight: 300
    letter-spacing: 3px
    font-size: 28px
    line-height: 1
    color: darken(saturate($red, 10%), 10%)
    margin-bottom: 15px
  p.subtitle
    text-transform: uppercase
    padding: 5px 10px
    background: black
    color: white
    margin-bottom: 40px
    display: inline-block
    font: 300 14px 'Oswald', sans-serif
    letter-spacing: 1px
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
    background: white
    padding: 50px 30px
    display: flex
    @media (max-width: $mobile)
      flex-wrap: wrap
      flex-direction: column-reverse
      padding: 30px
    p
      font-size: 18px
      line-height: 1.6
      margin-bottom: 30px
      @media (max-width: $mobile)
        font-size: 14px
      .bold
        font-weight: bold
      &.note
        font-size: 12px
        line-height: 1.4
    .right
      flex: 0 0 57%
      margin-left: 5%
      @media (max-width: $mobile)
        flex: 0 0 100%
        margin-left: 0
    .left
      flex: 0 0 38%
      position: relative
      text-align: center
      @media (max-width: $mobile)
        flex: 0 0 100%
        padding-top: 60px
      img
        max-width: 100%
        &:first-child
          margin-bottom: 50px
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
    border: 3px solid $white
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
