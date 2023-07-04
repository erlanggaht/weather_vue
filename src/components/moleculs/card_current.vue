<script setup>

const props = defineProps ({
data : Array | Object
})
</script>

<template>
    <div class="card_current" v-for="(item, index) in data" :key="index">
        <h4 style="text-transform :capitalize"> {{ Object.keys(item).join('').split('_').join(' ') }}</h4>
        <p v-if="item">{{ Object.values(item).join(' ')}}</p>
        <p class="p-bottom">-</p>
    </div> 
</template>

<style scoped>

.card_current {
    width: 270px;
    color: #fff;
    background-color: #172031;
    border-radius: 1rem;
    padding: 1rem 1rem 0 1rem;
    }
    
    .card_current h4 {
        font-size: 1.1rem;
        padding: 0;
        margin: 0;
        font-weight: 700;
    }
    
    .card_current p {
        text-align: center;
        font-size: 2rem;
    }
    
    .card_current .p-bottom {
        text-align: left;
        font-size: 2rem;
        margin: 0;padding: 0;
    }

</style>