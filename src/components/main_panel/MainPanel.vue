<template>
    <div id="main">
        <app-client-info></app-client-info>
    </div>
</template>

<script>
import ClientInfo from './client_info/ClientInfo.vue';
export default {
    components: {
        'app-client-info': ClientInfo
    }
}
</script>

<style scoped>
    #main {
        outline: 1px solid red;
        height: 100vh;
        width: 100%;
        display: flex;
        margin-top: 25px;
    }
</style>