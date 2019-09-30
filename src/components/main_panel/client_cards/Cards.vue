<template>
    <div id="cards">
        <button id="add_card">Add card</button>
        <button id="delete_card">Delete chosen cards</button>
        <button id="save_changes">Save changes</button>
        <app-card-template></app-card-template>
    </div>
</template>

<script>
import CardTemplate from './CardTemplate.vue';

export default {
    components: {
        'app-card-template': CardTemplate
    },
    data: function(){
        return {

        }
    }
}
</script>

<style scoped>
    #cards {
        width: 75%;
        outline: 1px solid orange;
    }
    #add_card,#delete_card,#save_changes {
        display: inherit;
        margin: 10px 0 0 10px;
    }
</style>