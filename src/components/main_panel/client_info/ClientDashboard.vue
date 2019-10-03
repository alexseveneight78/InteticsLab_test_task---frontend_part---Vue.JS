<template>
    <div id="dashboard">
        <button @click="checkMatches">Check matches</button>
        <h3>Dashboard</h3>
        <ol>
            <li>{{ queryFromFB.firstName }}</li>
            <li>{{ queryFromFB.lastName }}</li>
            <li>{{ queryFromFB.birthDate }}</li>
            <li>{{ queryFromFB.address }}</li>
            <li>{{ queryFromFB.phone }}</li>
            <li>{{ queryFromFB.email }}</li>        
        </ol>
        <p>{{ clientFirstName }}</p>
        <p>{{ clientLastName }}</p>
    </div>
</template>

<script>
export default {
    props: ['clientFirstName', 'clientLastName'],
    data: function(){
        return {
            queryFromFB: {
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
        checkMatches(){
            this.$http.get('https://carservicedatabase.firebaseio.com/clients.json')
                .then(response => {
                    return response.json();
                })
                .then(clients => {
                    const result = [];
                    for(let key in clients) {
                        result.push(clients[key]);
                    }
                    result.forEach((item) => {
                        if(item.firstName === this.clientFirstName && item.lastName === this.clientLastName) {
                            this.queryFromFB = item;
                        }
                    })
                })
        }
    }
}
</script>

<style scoped>
    #dashboard {
        margin-top: 15px;
        outline: 1px dashed gray;
    }
    button {
        margin-top: 10px;
    }
    ul {
        list-style-type: circle;
    }
</style>