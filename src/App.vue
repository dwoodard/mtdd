<template>
  <div id="app" >
    <Navigation/>
    <Breadcrumbs/>
   </div>
</template>

<script>

import Navigation from '@/components/Navigation'
import Breadcrumbs from '@/Breadcrumbs'

export default {
  components: { Breadcrumbs, Navigation },
  data () {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
