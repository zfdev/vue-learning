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
        username: '',
        message: '',
        list: []
    },
    computed:{

    },
    methods:{
        handleSend: function(){
            this.list.push({
                name: this.username,
                message: this.message   
            });
            this.message = '';
        },
        handleReply: function(index){
            var name = this.list[index].name;
            this.message = 'Reply@' + name + ':';
            this.$refs.message.focus();
        }
    }
});