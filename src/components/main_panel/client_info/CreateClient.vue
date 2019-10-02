<template>
    <div class="createClient">
        <h3>createClient Component</h3>
        <div class="create_client_form">
            <div class="create_client_el">
                First Name <input type="text" v-model="newClient.firstName" required /> {{newClient.firstName}}
            </div>
            <div class="create_client_el">
                Last Name <input type="text"  v-model="newClient.lastName" required>
            </div>
            <div class="create_client_el">
                Date of birth <input type="date" v-model="newClient.birthDate" required>
            </div>            
            <div class="create_client_el">
                Address <input type="text" v-model="newClient.address" required>
            </div>            
            <div class="create_client_el">
                Phone <input type="text" v-model="newClient.phone" required>
            </div>            
            <div class="create_client_el">
                Email <input type="text" v-model="newClient.email" required>
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
            newClient: {
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
                    // PROBLEM! EVEN IF A CURRENT CLIENT MATCHES WITH A CLIENT FROM DATABASE - HE`S NONTHELESS ADDED TO THE DATABASE - WHY SO???!!!
                    result.forEach((item) => {
                        if(this.newClient.firstName === item.firstName && this.newClient.lastName === item.lastName) {
                            alert('The customer exists in database.');
                            this.newClient.firstName = '';
                            this.newClient.lastName = '';
                            this.newClient.birthDate = '';
                            this.newClient.address = '';
                            this.newClient.phone = '';
                            this.newClient.email = '';
                            //return false;
                        } else {
                            this.$http.post('https://carservicedatabase.firebaseio.com/clients.json', this.newClient)
                        }
                        //return false;
                    })
                });
            document.querySelector('.createClient').style.display = 'none';
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