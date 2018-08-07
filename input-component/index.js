

var app = new Vue({
    el: '#app',
    data:{
        value: 5
    },
    computed:{

    },
    methods:{
        parentAdd(){
            this.value += 1;
        },
        showChildData(val){
            alert(val);
        }
    }
});