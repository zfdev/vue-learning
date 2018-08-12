Vue.component('list', {
    props: {
        list: {
            type: Array,
            default: function(){
                return [];
            }
        }
    },
    // data: function(){
    //     return {
    //         list: []
    //     }
    // },
    render: function(c){
        var _this = this;
        var list = [];
        this.list.forEach((msg, index) => {
            var node = c('div', {
                attrs: {
                    class: 'list-item'
                }
            }, [
                c('span', msg.name + ':'),
                c('div', {
                    attrs:{
                        class: 'list-msg'
                    }
                }, [
                    c('p', msg.message),
                    c('a', {
                        attrs: {
                            class: 'list-reply'
                        },
                        on: {
                            click: function(){
                                _this.handleReply(index);
                            }
                        }
                    }, 'Reply')
                ])
            ])
            list.push(node);
        });
        if(this.list.length){
            return c('div', {
                attrs: {
                    class: 'list'
                }
            }, list)
        }else{
            return c('div', {
                attrs:{
                    class: 'list-nothing'
                }
            }, 'Guest book is empty.');
        }
    },
    methods:{
        handleReply(index){
            this.$emit('reply', index)
        }
    }
});