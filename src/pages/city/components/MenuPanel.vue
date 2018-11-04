<template>
    <div class="menu-panel-wrapper">
        <div class="menu-panel" 
            v-for="(rowItems, index) in rowList"
        >
            <a class="menu-panel-optn"
                v-for="item in rowItems"
                :key="item.id"
                @click="selectCity(item.name)"
            >
                {{ item.name }}
            </a>
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
            // if(lastLen < col){
            //     console.log(lastLen + '---' + col + '---' + (lastLen/col*100));
            //     this.lastRow = {
            //         width: (lastLen / col * 100) + '%'
            //     }
            // }
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
        selectCity(name){
            this.$store.dispatch({
                type: 'selectCity',
                value: name
            });
            this.$router.push('/')
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