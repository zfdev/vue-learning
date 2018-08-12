Vue.component('my-component', {
    render: function(createElement){
        if(this.$slots.default === undefined){
            return createElement('div', 'There is no slot content to show.')
        }else{
            return createElement('div', this.$slots.default);
        }
    }
});

var app = new Vue({
    el: '#app',
    data:{

    },
    computed:{

    },
    methods:{

    }
});