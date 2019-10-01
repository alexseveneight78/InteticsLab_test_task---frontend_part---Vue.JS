<template>
  <div id="app">
    <app-create-client></app-create-client>
    <app-login-form></app-login-form>
    <app-nav-panel></app-nav-panel>
    <app-main-panel></app-main-panel>
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
import NavPanel from './components/navigation_panel/NavPanel.vue';
import MainPanel from './components/main_panel/MainPanel.vue';
import CreateClient from './components/main_panel/client_info/CreateClient.vue';


export default {
  components: {
    'app-nav-panel': NavPanel,
    'app-login-form': LoginForm,
    'app-main-panel': MainPanel,
    'app-create-client': CreateClient
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
