Vue.component('my-component', {
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: 'This is the component content.'
        }
    }
});

var app = new Vue({
    el: '#app',
    data:{
        showDiv: false
    },
    computed:{

    },
    methods:{
        getText: function(){
            this.showDiv = true;
            this.$nextTick(function(){
                var text = document.getElementById('div').innerHTML;
                console.log(text);          
            });

        }
    }
});