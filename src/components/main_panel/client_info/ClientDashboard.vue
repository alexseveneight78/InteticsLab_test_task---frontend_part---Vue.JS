<template>
    <div id="dashboard">
        <h3>Dashboard</h3>
        <ul>
            
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
                    return reponse.json();
                })
                .then(data => {
                    const resultArray = [];
                    for(let key in data) {
                        resultArray.push(data[key])
                    }
                    this.queryFromFB = resultArray;
                    console.log()
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