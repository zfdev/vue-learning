Vue.component('my-component', {
    name: 'my-component',
    props: {
        childName:{
            type: String,
            default: 'Child Component'
        },
        count: {
            type: Number,
            default: 1
        }
    },
    template: '\
    <div class="child">\
        {{childNameString}}\
        <my-component\
            :count="count + 1"\
            v-if="count < 3"></my-component>\
    </div>',
    data: function(){
        return {
            childNameString: this.childName
        }
    }
});


var app = new Vue({
    el: '#app',
    data:{
        name: 'Child Component'
    },
    computed:{
        childComponentName(){
            return this.name;
        }
    },
    methods:{

    }
});