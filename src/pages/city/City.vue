<template>
   <div class="city-wrapper">
        <city-header></city-header>
        <city-panel v-bind="panel"></city-panel>
   </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header';
import CityPanel from './components/Panel'
export default {
    name: 'City',
    components: {
        CityHeader,
        CityPanel
    },
    data(){
        return {
            panel: []
        };
    },
    mounted() {
        const that = this;
        axios.get('/api/city.json').then(function(res){
            res = res.data;
            if(res.ret){
                const data = res.data;
                that.panel = data;
            }
        });
    }
} 
</script>

<style lang="stylus" scoped>
    .city-wrapper
        height: 100%
</style>