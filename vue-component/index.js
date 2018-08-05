Vue.component('my-component', {
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: 'This is the component content.'
        }
    }
});

var childComponent = {
    template: '<div>This is a local component.</div>'
}

Vue.component('wrapped-component', {
    template: '<div>This is special wrapped component.</div>'
});

var data = {
    counter: 0
}

Vue.component('data-sharing', {
    template: '<button @click="counter++">{{counter}}</button>',
    data: function () {
        return data;
    }
});

Vue.component('data-single', {
    template: '<button @click="counter++">{{counter}}</button>',
    data: function () {
        return {
            counter: 0
        };
    }
});

Vue.component('data-transmit', {
    props: ['messageData'],
    template: '<div>{{messageData}}</div>'
})

Vue.component('data-parent', {
    props: ['initCount'],
    template: '<div>Parent data: {{count}}</div>',
    data: function (params) {
        return {
            count: this.initCount
        }
    }
})

Vue.component('data-modified', {
    props: ['width', 'modifiedData'],
    template: '<div :style="style">{{modifiedData}}</div>',
    computed:{
        style: function (params) {
            return {
                width: this.width + 'px'
            }
        }
    }
})

Vue.component('props-validation', {
    props: {
        propA: Number,
        propB: [String, Number],
        propC: {
            type: Boolean,
            default: true
        },
        propD: {
            type: Number,
            required: true
        },
        propE:{
            type: Array,
            default: function () {
                return [];
            }
        },
        propF: {
            validator: function (params) {
                return params > 10;
            }
        }
    },
    template: '<div>Props data validation</div>',
});

var app = new Vue({
    el: '#app',
    data:{
        parentMessage: '',
        parentData: '',
        changeInitData: 1,
        modifiedData: 20
    },
    components:{
        'local-component': childComponent
    },
    computed:{

    },
    methods:{

    }
});