Vue.component('my-component', {
    data: function () {
        return {
            msg: 'This data is in the child component.',
            message: this.parentMessage
        }
    }
});

var app = new Vue({
    el: '#app',
    components:{
        comA: {
            template: '<div>This is component A.</div>'
        },
        comB: {
            template: '<div>This is component B.</div>'
        },
        comC: {
            template: '<div>This is component C.</div>'
        }
    },
    data:{
        currentView: "comA"
    },
    computed:{

    },
    methods:{
        handleChangeView: function(component){
            this.currentView = 'com' + component;
        }
    }
});