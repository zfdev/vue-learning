Vue.component('ele', {
    template: '\
    <div id="element"\
    :class="{show:show}"\
    @click="handleClick">Text Content\
    </div>',
    data: function(){
        return{
            show: true
        }
    },
    methods:{
        handleClick: function(){
            console.log('Clicked');
        }
    }
});

Vue.component('ele', {
    render: function(createElement){
        return createElement(
            'div',
            {
                class:{
                    show: this.show
                },
                attrs:{
                    id: 'element'
                },
                on:{
                    click: this.handleClick
                }
            },
            'Text Content'
        );
    },
    data: function(){
        return{
            show: true
        }
    },
    methods:{
        handleClick: function(){
            console.log('Clicked');
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