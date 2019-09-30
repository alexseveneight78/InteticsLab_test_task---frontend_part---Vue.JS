<template>
    <div class="login_form">
        <h3>Login Form: </h3>
        <div class="login_form_details">
            <h4> Authorisation form: </h4>
            <div class="login_form_wrapper">
                First Name: <input type="text" id="form_firstName">
            </div>
            <div class="login_form_wrapper">
                Last Name: <input type="text" id="form_lastName">
            </div>
            <div class="login_form_wrapper">
                Login: <input type="text" id="form_login">
            </div>
            <div class="login_form_wrapper">
                Password: <input type="text" id="form_password">
            </div>
            <button id="enter">Enter</button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .login_form {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
        display: block;
        margin: 0;
    }
    .login_form_details {
        width: 350px;
        border: 1px dashed green;
        border-radius: 10px;
        margin: 7% auto;
        padding: 15px 25px;
        box-sizing: border-box;
        background-color: #fff;
        display: block;
    }
    .login_form_wrapper {
        margin: 10px auto;
    }
</style>