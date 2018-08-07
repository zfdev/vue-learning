Vue.component('pane', {
    template: '<div v-show="show" class="pane"><slot></slot></div>',
    data: function(){
        return {
            show: true
        }
    },
    props:{
        name:{
            type: String
        },
        label:{
            type: String,
            default: ''
        }
    },
    methods: {
        updateNav(){
            this.$parent.updateNav();
        }
    },
    watch: {
        label(){
            this.updateNav();
        }
    },
    mounted() {
        this.updateNav();
    },
});