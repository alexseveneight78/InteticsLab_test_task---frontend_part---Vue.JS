<template>
    <div class="createClient">
        <h3>createClient Component</h3>
        <div class="create_client_form">
            <div class="create_client_el">
                First Name <input type="text" id="create_client_first_name" v-model="query.firstName">
            </div>
            <div class="create_client_el">
                Last Name <input type="text" id="create_client_last_name" v-model="query.lastName">
            </div>
            <div class="create_client_el">
                Date of birth <input type="date" id="create_client_birthDate" v-model="query.birthDate">
            </div>            
            <div class="create_client_el">
                Address <input type="text" id="create_client_address" v-model="query.address">
            </div>            
            <div class="create_client_el">
                Phone <input type="text" id="create_client_phone" v-model="query.phone">
            </div>            
            <div class="create_client_el">
                Email <input type="text" id="create_client_email" v-model="query.email">
            </div>
            <div class="create_client_el">
                <button id="save_new_client" @click="submitData">Save a new client</button>
            </div>
        <div id="close" @click="hide">x</div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            query: {
                firstName: '',
                lastName: '',
                birthDate: '',
                address: '',
                phone: '',
                email: ''
            }
        }
    },
    methods: {
        hide(){
            document.querySelector('.createClient').style.display = 'none';
        },
        // check if a new client doesn`t match with a someone from database
        submitData(){
            this.$http.get('https://carservicedatabase.firebaseio.com/clients.json')
                .then(response => {
                    return response.json();
                })
                .then(clients => {
                    let result = [];
                    for(let key in clients) {
                        result.push(clients[key])
                    }
                    this.query = result;
                    console.log(this.query)
                })
            this.$http.post('https://carservicedatabase.firebaseio.com/clients.json', this.query)
                .then(response => {
                    //console.log(response);
                });
            //document.querySelector('.createClient').style.display = 'none';
        }
    }
}
</script>

<style scoped>
    .createClient {
        position: fixed;
        z-index: 1;
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.4);
        display: none;
    }
    .create_client_form {
        width: 25%;
        background-color: #fff;
        margin: 10% auto;
        padding: 20px;
        border: 1px solid green;
        border-radius: 10px;
    }
    .create_client_form:hover {
        box-shadow: 3px 3px 3px lightgreen;
        transition: 500ms;
    }
    input {
        margin: 10px 0;
    }
    #close {
        position: relative;
        top: -280px;
        left: 98%;
        cursor: pointer;
        width: 25px;
    }
</style>