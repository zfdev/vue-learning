Vue.component('anchor', {
    props:{
        level: {
            type: Number,
            required: true
        },
        title:{
            type: String,
            default: ''
        }
    },
    render: function(createElement){
        return createElement(
            'h' + this.level,
            [
                createElement(
                    'a',
                    {
                        attrs:{
                            title: this.title
                        },
                        domProps:{
                            href: '#' + this.title
                        },
                        on: {
                            click: this.handleClick
                        }
                    },
                    this.$slots.default,
                )
            ]
        );
    },
    methods:{
        handleClick: function(){
            alert('Link click.');
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