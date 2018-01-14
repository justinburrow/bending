<template lang="pug">
  div#app
    Navigation(v-on:next="increment", v-on:previous="decrement")
    h2 {{ currentPage }}
    router-view(v-on:next="increment", v-on:previous="decrement")
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'App',
  data () {
    return {
      currentPage: 0,
      allRoutes: []
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
    changePage: function (page) {
      var router = this.$router
      this.allRoutes.forEach(function (route) {
        if (page === 0) {
          router.push('/')
        } else if (route.meta.id === page) {
          var targetPage = route.name
          router.push('page/' + targetPage)
        } else {
          router.push({path: '/page'})
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
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
