<template>
    <div class="menu-panel-wrapper">
        <div class="menu-panel" 
            v-for="(rowItems, index) in rowList"
            :style="bindStyle(index)"
        >
            <a class="menu-panel-optn" v-for="item in rowItems">{{ item }}</a>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'MenuPanel',
    props: {
        col: Number,
        list: Array,
        // lastRow: Object
    },
    computed: {
        rowList(){
            const col = this.col;
            const list = this.list;
            const result = [];
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
                this.lastRow = {
                    width: (lastLen / col * 100) + '%'
                }
            }
            return result;
        }
    },
    methods: {
        bindStyle(index){
            const lastIdx = this.rowList.length - 1;
            return index === lastIdx ? this.lastRow: '';
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
        width: 33.33%
        border-right: .02rem solid #ddd
        border-bottom: .02rem solid #ddd
        text-align: center
        height: .9rem
        line-height: .9rem
    .menu-panel-optn:last-child
        border-right: 0      

</style>