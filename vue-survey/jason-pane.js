Vue.component('jason-pane', {
    props:{
        panelName:{
            type: String, 
            required: true
        },
        value: {
            type: String
        }
    },
    template: '\
    <div class="jason-pane" v-show="isShow">\
        <slot name="content"></slot>\
        <slot name="action"></slot>\
    </div>',
    data: function(){
        return {
            name: this.panelName,
        }
    },
    computed:{
        isShow(){
            return this.value === this.panelName;
        }
    },
    created() {
        // console.log('created');
        // console.log(this);
    },
    mounted() {
        // console.log('mounted');
        // console.log(this);
    },
    
});