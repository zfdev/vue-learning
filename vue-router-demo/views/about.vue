<template>
    <div>
        <h1>Introduction</h1>
        <button @click="handleRouter">Jump to user page.</button>
    </div>

</template>
<script>
export default {
    methods: {
            handleRouter(){
        this.$router.push('/user/123');
    }
    }

}
</script>

