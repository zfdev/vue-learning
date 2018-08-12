Vue.component('my-component', {
    render: function(createElement){
        var _this = this;
        if(this.list.length){
            var listNode = createElement('ul', this.list.map(function(item){
                return createElement('li', item);
            }));
        }else{
            var listNode = createElement('p', 'Chat content is empty.');
        }
        return createElement('div', [
            listNode,
            createElement('input', {
                attrs: {
                    placeholder: 'Please type content, press enter to send.'
                },
                style:{
                    width: '200px'
                },
                on: {
                    keyup: function(event){
                        if(event.keyCode !== 13){
                            return;
                        }
                        _this.list.push(event.target.value);
                        event.target.value = '';
                    }
                }
            })
        ]);
    },
    data: function () {
        return {
            value: '',
            list: []
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