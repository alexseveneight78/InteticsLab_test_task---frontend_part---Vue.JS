<template>
  <div id="app">
    <app-nav-panel></app-nav-panel>
    <app-login-form></app-login-form>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import NavPanel from './components/navigation_panel/NavPanel.vue';



export default {
  components: {
    'app-login-form': LoginForm,
    'app-nav-panel': NavPanel
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
