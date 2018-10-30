<template>
   <div class="city-wrapper">
        <city-header></city-header>
        <city-panel></city-panel>
   </div>
</template>

<script>
import CityHeader from './components/Header';
import CityPanel from './components/Panel'
export default {
    name: 'City',
    components: {
        CityHeader,
        CityPanel
    }
} 
</script>

<style lang="stylus" scoped>
    
</style>