<template>
    <div class="login_form">
        <h3>Login Form: </h3>
        <div class="login_form_details">
            <h4> Authorisation form: </h4>
            <div class="login_form_wrapper">
                First Name: <input type="text" v-model="actualData.firstName">
                <span ref='firstNameCheckMark' @click="$refs.firstNameCheckMark.innerHTML = 'ok'">hi</span>
            </div>
            <div class="login_form_wrapper">
                Last Name: <input type="text" v-model="actualData.lastName"><span ref='lastNameCheckMark'>&#10060;</span>
            </div>
            <div class="login_form_wrapper">
                Login: <input type="text" v-model="actualData.login"><span ref="loginCheckMark">&#10060;</span>
            </div>
            <div class="login_form_wrapper">
                Password: <input type="text" v-model="actualData.password"><span ref="passwordCheckMark">&#10060;</span>
            </div>
            <button @click="enterToApp">Enter</button>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            actualData: {
                firstName: '',
                lastName: '',
                login: '',
                password: ''            
            },
            queryData: {
                firstName: '',
                lastName: '',
                login: '',
                password: ''            
            }
        }
    },
    methods: {
        enterToApp(){
            let getData = this.$http.get('https://carservicedatabase.firebaseio.com/workers.json')
                .then(response => {
                    return response.json();
                })
                .then(workers => {
                    for(let key in workers) {
                        key === 'firstName' ? this.queryData.firstName = workers[key] : false;
                        key === 'lastName' ? this.queryData.lastName = workers[key] : false;
                        key === 'login' ? this.queryData.login = workers[key] : false;
                        key === 'password' ? this.queryData.password = workers[key] : false;
                    }
                })   
            document.querySelector('.login_form').style.display = 'none';
            console.log(this.$refs.firstNameCheckMark.innerHTML)
            }
    }
    /*
    created: function() {
        let getData = this.$http.get('https://carservicedatabase.firebaseio.com/workers.json')
            .then(response => {
                return response.json();
            })
            .then(workers => {
                for(let key in workers) {
                    key === 'firstName' ? this.queryData.firstName = workers[key] : false;
                    key === 'lastName' ? this.queryData.lastName = workers[key] : false;
                    key === 'login' ? this.queryData.login = workers[key] : false;
                    key === 'password' ? this.queryData.password = workers[key] : false;
                }
            })
            
    }
    */
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