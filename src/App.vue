<template>
  <div id="app">
    Manage Teacup Doodle dogs

    <div>
      My name is <input v-model="name">
    </div>

    <div>
      {{name}}
    </div>

    <input type="file">

   </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      name: '',
      file: ''
    }
  },
  mounted () {
    if (localStorage.name) {
      this.name = localStorage.name
    }
  },
  watch: {
    name (newName) {
      localStorage.name = newName
    }
  }
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
