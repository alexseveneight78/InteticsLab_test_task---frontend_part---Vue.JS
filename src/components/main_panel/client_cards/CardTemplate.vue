<template>
    <div class="card_template">
        <div class="card_car">
            <ul>
                <li v-for="car in queryCars">Make: {{ car.make }}</li>
                <li v-for="car in queryCars"> Model: {{ car.model }}</li>
                <li v-for="car in queryCars">Year: {{ car.year }}</li>
                <li v-for="car in queryCars">VIN: {{ car.vin }}</li>
            </ul>
        </div>
        <div class="card_orders">
            <h4>List of orders: </h4>
            <ul>
                <li v-for="order in queryCars['orders']">Order Number {{ order.orderNumber }}</li>
            </ul>
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
    }
</style>