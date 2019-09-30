<template>
    <div>
        <nav>
            <h3>Actual worker:</h3>
            <div class="navigation">
                First Name: 
                <span id="nav_first_name"></span>
            </div>
            <div class="navigation">
                Last Name: 
                <span id="nav_last_name"></span>
            </div>
            <button id="exit">Exit</button>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    nav {
        height: 75px;
        background-color: rgba(26, 255, 140, 0.7);
        color: rgba(0,0,0,0.5);
    }
    .navigation {
        display: inline-block;
        width: auto;
    }
    h3 {
        margin: 0;
    }
</style>