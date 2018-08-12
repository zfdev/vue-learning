Vue.component('my-component', {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    render: function(createElement){
        if(this.show){
            return createElement('p', 'Show value is true.')
        }else{
            return createElement('p', 'Show value is false.');
        }
    }
});

Vue.component('vue-list', {
    props:{
        list: {
            type: Array
        }
    },
    render: function(createElement){
        var nodes = [];
        for(var i = 0; i< this.list.length; i++){
            nodes.push(createElement('p', this.list[i]));
        }
        return createElement('div', nodes);
    }
});

var app = new Vue({
    el: '#app',
    data:{
        show: false,
        list: [
            'Vue real war',
            'Javascript professinal program design',
            'Javascript language'
        ]
    },
    computed:{

    },
    methods:{

    }
});