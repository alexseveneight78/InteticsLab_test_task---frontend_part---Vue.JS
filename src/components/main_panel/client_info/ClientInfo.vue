<template>
    <div class="client_info">
        <div class="client_inputs">
            First Name <input type="text" class="client_firstname">
            Last Name <input type="text" class="client_lastname">
        </div>
        <button-create-client-button></button-create-client-button>
    </div>
</template>

<script>
import CreateClientButton from './CreateClientButton.vue';

export default {
    components: {
        'button-create-client-button': CreateClientButton
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
    }
</style>