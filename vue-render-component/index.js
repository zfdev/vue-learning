Vue.component('my-component', {
    props: {
        list: {
            type: Array,
            default: function(){
                return [];
            }
        }
    },
    render: function(createElement){
        if(this.list.length){
            return createElement('ul', this.list.map(function(item){
                return createElement('li', item);
            }));
        }else{
            return createElement('p', 'List is empty.');
        }
    }
});

var app = new Vue({
    el: '#app',
    data:{
        list: []
    },
    computed:{

    },
    methods:{
        handleClick: function(){
            this.list = [
                'Vue real war',
                'Javascript professinal program design',
                'Javascript language'
            ]
        }
    }
});