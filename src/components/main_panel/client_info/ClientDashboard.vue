<template>
    <div id="dashboard">
        <h3>Dashboard</h3>
        <button @click="fetchData">Fetch data</button>
        <ul>
            <li v-for="item in queryFromFB">{{ item.firstName }}</li>
            <li v-for="item in queryFromFB">{{ item.lastName }}</li>
            <li v-for="item in queryFromFB">{{ item.birthDate }}</li>
            <li v-for="item in queryFromFB">{{ item.address }}</li>
            <li v-for="item in queryFromFB">{{ item.phone }}</li>
            <li v-for="item in queryFromFB">{{ item.email }}</li>        
        </ul>


        <!-- 
First Name: Jason
Last Name: Statham
Date of Birth: 26.07.1967
Address: Derbyshire, England
Phone: +44784565989
Email: j.statham@gmail.com
            -->
    </div>
</template>

<script>
export default {
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
        fetchData(){
            this.$http.get('https://carservicedatabase.firebaseio.com/clients.json')
                .then(response => {
                    return response.json();
                })
                .then(clients => {
                    const resultArray = [];
                    for(let key in clients) {
                        resultArray.push(clients[key])
                    }
                    this.queryFromFB = resultArray;
                    console.log(this.queryFromFB)
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
</style>