<!--<template>
    <menu-panel :list="list"
        :col="6" 
    >
    </menu-panel>   
</template>

<script>
import MenuPanel from './MenuPanel'
export default {
    props: {
        list: Array
    },
    name: 'CharMenuPanel',
    components: {
        MenuPanel
    }
} 
</script>

<style lang="stylus" scoped>
    
</style>-->

<template>
    <div class="menu-panel-wrapper">
        <div class="menu-panel" 
            v-for="(rowItems, index) in rowList"
        >
            <a  
                class="menu-panel-optn" 
                v-for="(item, innerIndex) in rowItems" 
                :key="item.id"
                @click="handleClick(index*col+innerIndex)"
            >
                {{ item.name }}
            </a>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'CharMenuPanel',
    props: {
        // col: Number,
        list: Array,
        // lastRow: Object
    },
    data(){
        return {
            col: 6
        };
    },
    computed: {
        rowList(){
            const col = this.col;
            const list = this.list;
            const result = [];
            if(list === undefined)
                return;
            list.forEach((item, index) => {
                const row = Math.floor(index / col);
                if(!result[row]){
                    result[row] = [];
                }
                result[row].push(item);
            });
            const resultLen = result.length;
            const lastLen = result[resultLen-1].length;
            if(lastLen < col){
                for(var i = 0; i < col-lastLen; i++){
                    // 使用对象填充
                    result[resultLen-1].push({ id: 'pass'+i, name: undefined });
                }
            }
            return result;
        }
    },
    methods: {
        handleClick(index){
            // console.log(e.target.innerText)
            // var char = e.target.innerText;
            console.log(1)
            this.$emit('scrollToChar', index);
        }
    }
}   
</script>

<style lang="stylus" scoped>
    .menu-panel-wrapper
        background: #fff
    .menu-panel
        display: flex
    .menu-panel-optn
        color: #212121
        width: 100%
        border-right: .02rem solid #ddd
        border-bottom: .02rem solid #ddd
        text-align: center
        height: .9rem
        line-height: .9rem
    .menu-panel-optn:last-child
        border-right: 0      

</style>