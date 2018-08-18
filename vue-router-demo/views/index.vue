<template>
    <div>
        <h1>Index</h1>
        <ul>
            <router-link to="/index" tag="li">Jump to index page.</router-link>
        <router-link to="/about" tag="li">Jump to about page.</router-link>
        <router-link to="/user/123" tag="li">Jump to user 123 page.</router-link>

        </ul>
        <p>{{count}}</p>
        <button @click="handleIncrement">+1</button>
        <button @click="handleDecrease">-1</button>
        <button @click="handleIncrementMore">+5</button>
        <button @click="handleType">+99</button>
        <button @click="handleActionIncrement">Aciton +1</button>
        <button @click="handleAsyncIncrement">Async +1</button>
        <h2>List</h2>
        <p>{{list}}</p>
        <p>{{listCount}}</p>
        <h2>Random Add</h2>
        <Counter :number="number"></Counter>
        <button @click="handleSendAjaxRequest">Search Google with ajax</button>
    </div>
</template>
<script>
import Counter from './Counter.vue'

export default {
    components:{
        Counter
    },
    data: function(){
        return {
            number: 0
        }
    },
    created() {
        this.$bus.on('add', this.handleAddRandom)
    },
    beforeDestroy() {
        this.$bus.off('add', this.handleAddRandom);
    },
    computed:{
        count(){
            return this.$store.state.count;
        },
        list(){
            return this.$store.getters.filteredList;
        },
        listCount(){
            return this.$store.getters.listCount;
        }
    },
    methods:{
        handleIncrement(){
            this.$store.commit('increment');
        },
        handleDecrease(){
            this.$store.commit('decrease');
        },
        handleIncrementMore(){
            this.$store.commit('increment', 5);
        },
        handleType(){
            this.$store.commit({
                type: 'typeAttribute',
                count: 99
            });
        },
        handleActionIncrement(){
            this.$store.dispatch('increment');
        },
        handleAsyncIncrement(){
            this.$store.dispatch('asyncIncrement').then(()=>{
                console.log(this.$store.state.count);
            });
        },
        handleAddRandom(num){
            this.number += num;
        },
        handleSendAjaxRequest(){
            const ajaxOption = {
                url: 'https://www.google.com.sg/search',
                data: {
                    q: 123
                }
                
            };
            this.$ajax(ajaxOption);
        }
    }
}
</script>

