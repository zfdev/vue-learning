Vue.component('my-component', {
    render: function(createElement){
        var _this = this;
        return createElement('div', [
            createElement('input', {
                domProps:{
                    value: this.value
                },
                on: {
                    input: function(event){
                        _this.value = event.target.value;
                    }
                }
            }),
            createElement('p', 'Value: ' + this.value)
        ]);
    },
    data: function () {
        return {
            value: ''
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