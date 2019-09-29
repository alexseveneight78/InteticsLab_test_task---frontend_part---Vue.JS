<template>
    <div class="createClient">
        <h3>createClient Component</h3>
        <div class="create_client_form">
            <div class="create_client_el">
                First Name <input type="text" id="create_client_first_name">
            </div>
            <div class="create_client_el">
                Last Name <input type="text" id="create_client_last_name">
            </div>
            <div class="create_client_el">
                Email <input type="text" id="create_client_email">
            </div>
            <div class="create_client_el">
                Address <input type="text" id="create_client_address">
            </div>
            <div class="create_client_el">
                <button id="save_new_client" @click="">Save a new client</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .createClient {
        position: fixed;
        z-index: 1;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.4);
        display: block;
    }
    .create_client_form {
        width: 25%;
        background-color: #fff;
        margin: 10% auto;
        padding: 20px;
    }
    input {
        margin: 10px 0;
    }
</style>