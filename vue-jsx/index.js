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

    },
    computed:{

    },
    methods:{

    }
});