<template>
    <div>
        {{number}}
        <button @click="handleRandomAdd">Random Add</button>
    </div>
</template>
<script>
export default {
    props:{
        number:{
            type: Number
        }
    },
    methods:{
        handleRandomAdd(){
            const num = Math.floor(Math.random() * 100 + 1);
            this.$bus.emit('add', num)
        }
    }
}
</script>

