<script setup>
import { ref } from 'vue';
import {useStore} from 'vuex'

const input = ref('Tahap Develop')

function search () {
  alert(input.value)
}

</script>

<template>
  <div class="search"> 
    <input placeholder="search" @keypress.enter="search" />
  </div>
</template>


<style scope>

.search {
  padding: 1rem;
  display: flex;
  justify-content: center;
}
.search input{
  background-color: #fff;
  padding: 1rem 1rem;
  border: none;
  width: 100%;
  font-size: 1rem;
}


</style>