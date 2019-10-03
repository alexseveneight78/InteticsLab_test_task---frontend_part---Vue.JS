<template>
    <div class="client_info">
        <div class="client_inputs">
            First Name <input type="text" v-model="firstName">
            Last Name <input type="text" v-model="lastName">
        </div>
        <button id="createClient" @click="show">Create a new client</button>
        <app-client-dashboard :clientFirstName="firstName" :clientLastName="lastName"></app-client-dashboard>
    </div>
</template>

<script>
import ClientDashboard from './ClientDashboard.vue';

export default {
    data: function(){
        return {
            firstName: '',
            lastName: ''
        }
    },
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