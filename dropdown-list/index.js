var app = new Vue({
    el: '#app',
    data:{
        show: false
    },
    computed:{

    },
    methods:{
        handleClose: function(e){
            this.show = false;
            console.log(e);
        }
    }
});