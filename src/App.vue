<template lang="pug">
  div#app
    Navigation(v-on:next="increment" v-on:previous="decrement" v-on:goto="goto(id)" :child-routes="allRoutes" :current-page="currentPage" :class="{show: showNav}" @goto="goto")
    #content
      router-view(v-on:next="increment" v-on:previous="decrement")
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  data () {
    return {
      currentPage: 0,
      allRoutes: [],
      showNav: false
    }
  },
  components: {
    Navigation
  },
  methods: {
    increment: function () {
      this.currentPage++
    },
    decrement: function () {
      this.currentPage--
    },
    goto: function (goto) {
      this.currentPage = goto
    },
    changePage: function (page) {
      var router = this.$router
      var self = this
      this.allRoutes.forEach(function (route) {
        if (page === 0) {
          router.push({name: 'Home'})
          self.showNav = false
        } else if (route.meta.id === page) {
          var targetPage = route.name
          router.push({name: targetPage})
          self.showNav = true
        }
      })
    }
  },
  watch: {
    currentPage: function (page) {
      this.changePage(page)
    }
  },
  created () {
    this.allRoutes = this.$router.options.routes[1].children
  },
  mounted () {
    this.changePage(this.currentPage)
  }
}
</script>

<style lang="sass">
  html
    box-sizing: border-box

  *, *::before, *::after
    margin: 0
    padding: 0
    box-sizing: inherit

  #content
    padding-top: 50px
</style>
