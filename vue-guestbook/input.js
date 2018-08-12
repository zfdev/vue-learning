Vue.component('vInput', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data: function(){
        return {
            inputValue: this.value
        }
    },
    render: function(c){
        var _this = this;
        return c('div', [
            c('span', 'User Name:'),
            c('input', {
                attrs:{
                    type: 'text'
                },
                domProps: {
                    value: this.inputValue
                },
                on:{
                    input: function(event){
                        _this.inputValue = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    },
    watch:{
        value: function(){
            this.inputValue = this.value
        }
    }
});
Vue.component('vTextarea', {
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data: function(){
        return {
            inputValue: this.value
        }
    },    
    watch:{
        value: function(){
            this.inputValue = this.value
        }
    },    
    render: function(c){
        var _this = this;
        return c('div', [
            c('span', 'Message:'),
            c('textarea', {
                attrs:{
                    placeHolder: 'Please input the message.'
                },
                domProps: {
                    value: this.inputValue
                },
                ref: 'message', //Don not forget this!
                on:{
                    input: function(event){
                        _this.inputValue = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    },
    methods:{
        focus(){
            this.$refs.message.focus(); //Class the ref in the component
        }
    }    
});