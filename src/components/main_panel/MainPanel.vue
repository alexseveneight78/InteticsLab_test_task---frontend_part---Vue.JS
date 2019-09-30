<template>
    <div id="main">
        <app-client-info></app-client-info>
        <app-cards></app-cards>
    </div>
</template>

<script>
import ClientInfo from './client_info/ClientInfo.vue';
import Cards from './client_cards/Cards.vue';

export default {
    components: {
        'app-client-info': ClientInfo,
        'app-cards': Cards
    }
}
</script>

<style scoped>
    #main {
        outline: 1px solid red;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: nowrap;
        margin-top: 25px;
    }
</style>