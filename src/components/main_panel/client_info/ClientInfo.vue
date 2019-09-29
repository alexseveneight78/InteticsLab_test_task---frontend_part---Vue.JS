<template>
    <div class="client_info">
        <div class="client_inputs">
            First Name <input type="text" class="client_firstname">
            Last Name <input type="text" class="client_lastname">
        </div>
        <button id="createClient" @click="">Create a new client</button>
    </div>
</template>

<script>

export default {
    props: ['createClientClass']
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