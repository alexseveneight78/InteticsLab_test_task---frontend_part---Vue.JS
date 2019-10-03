<template>
    <div class="card_template">
        <div class="card_car">
            <ul>
                <li>Make: <span  contenteditable="true">SSS{{ queryCars.make }}</span></li>     
                <li>Model: {{ queryCars.model }}</li>    
                <li>Year: {{ queryCars.year }}</li>   
                <li>VIN: {{ queryCars.vin }}</li>
            </ul>
        </div>
        <div class="card_orders">
            <h4>List of orders: </h4>

        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            queryCars: [
                {
                    make: 'Audi',
                    model: 'TT',
                    year: '2015',
                    vin: '4elrtujeoipdfi34r0f39475',
                    orders: [
                        {
                            orderNumber: '#1',
                            orderDate: '21.04.2018',
                            orderAmount: '890USD',
                            orderStatus: 'In process'
                        }
                    ]
                }
            ]        
        }
    }
    /*
    created(){
        console.dir(this.queryCars[0]['orders'])
    }
    */
}
</script>

<style scoped>
    .card_template {
        background-color: #ccebff;
    }
    .card_car {
        background-color: #278ed3;
        width: 250px;
        background-color: #278ed3;
        color: white;
        margin: 10px;
    }
</style>