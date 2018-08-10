Vue.component('jason-button', {
    props: {
        myColor:{
            type: String,
            default: 'primary'
        },
        jumpTarget:{
            type: String
        },
        resetStep:{
            type: String
        },
        value:{
            type: Boolean,
            default: true
        }
    },
    template: '<button class="btn jason-btn" :class="btnColor" @click.stop.prevent="handleButtonClick" :disabled="!this.value"><slot></slot></button>',
    data: function(){
        return {
            btnColor: 'btn-' + this.myColor
        }
    },
    methods:{
        handleButtonClick: function(){
            if(this.jumpTarget){
                this.$emit('on-click', this.jumpTarget);
            }
            
            if(this.resetStep){
                this.$emit('reset-data', this.resetStep);
            }
            
            console.log('Click');
        }
    }   
});