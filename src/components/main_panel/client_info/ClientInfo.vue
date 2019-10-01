<template>
    <div class="client_info">
        <div class="client_inputs">
            First Name <input type="text" class="client_firstname">
            Last Name <input type="text" class="client_lastname">
        </div>
        <button id="createClient" @click="show">Create a new client</button>
        <button id="check_database">Check database</button>
        <app-client-dashboard></app-client-dashboard>
    </div>
</template>

<script>
import ClientDashboard from './ClientDashboard.vue';

export default {
    methods: {
        show(){
            document.querySelector('.createClient').style.display = 'block';
        }
    },
    components: {
        'app-client-dashboard': ClientDashboard
    }
}
</script>

<style scoped>
    .client_info {
        outline: 1px dashed green;
        padding: 10px;
        box-sizing: border-box;
        display: inline-block;
        max-width: 25%;
        min-width: 20%;
    }
    .client_inputs {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 10px 0 20px 0;
    }
    input {
        width: 100px;
        margin-right: 10px;
    }
</style>