Vue.component('my-component', {
    props: ['value'],
    template: '\
    <div>\
        <button @click="handleIncrease">+1</button>\
        <button @click="handleReduce">-1</button>\
        <button @click="handleClick">+1 with input sugar</button>\
        <input :value="value" @input="updateValue">\
    </div>',
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        handleIncrease() {
            this.counter++;
            this.$emit('increase', this.counter); //Transmit event and data to parent component
        },
        handleReduce() {
            this.counter--;
            this.$emit('reduce', this.counter); //Transmit event and data to parent component
        },
        handleClick: function () {
            this.counter++;
            this.$emit('input', this.counter);
        },
        updateValue(event) {
            this.$emit('input', event.target.value);
        }
    }
});

//Event center
var bus = new Vue();

Vue.component('component-a', {
    template: '<button @click="handleEvent">Transmit event.</button>',
    methods:{
        handleEvent: function () {
            bus.$emit('on-message', 'Data from component-a.');
        }
    }
});

Vue.component('component-b', {
    template: '<div>Child component</div>',
    data: function () {
        return{
            childMessage: 'Child component data'
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        total: 0,
        message: ''
    },
    computed: {

    },
    methods: {
        handleGetTotal: function (total) {
            this.total = total;
        },
        handleRef: function (params) {
            var msg = this.$refs.comA.childMessage;
            console.log(msg);
        }
    },
    mounted() {
        var _this = this;
        bus.$on('on-message', function (msg) {
            _this.message = msg;
        });
    },
});