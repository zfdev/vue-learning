Vue.component('my-component', {
    props: ['parentMessage'],
    data: function () {
        return {
            msg: 'This data is in the child component.',
            message: this.parentMessage
        }
    }
});

var app = new Vue({
    el: '#app',
    data:{
        message: 'The data is in the prarent component.'
    },
    computed:{

    },
    methods:{

    }
});