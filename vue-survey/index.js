var app = new Vue({
    el: '#app',
    data:{
        step: 'step1',
        form: {
            step1:{
                pass: false,
                data: ''
            },
            step2:{
                pass: false,
                data: []         
            },
            step3:{
                pass: false,
                data: ''        
            }
        }
    },
    watch:{
        'form.step1.data': function(){
            this.form.step1.data === '' ? this.form.step1.pass = false : this.form.step1.pass = true;
        },
        'form.step2.data': function(val, oldVal){
            if(val.length === 2 || val.length === 3){
                this.form.step2.pass = true;
            }else{
                this.form.step2.pass = false;
            }
            console.log(val);
            console.log(oldVal);
        },
        'form.step3.data': function(){
            console.log(this.form.step3.data.length);
            this.form.step3.data.length >= 100 ? this.form.step3.pass = true : this.form.step3.pass = false;
        },        
    },
    computed:{
        
    },
    methods:{
        changeStep(step){
            this.step = step;
            console.log(step);
        },
        resetData(step){
            return (typeof this.form[step].data === 'string') ? this.form[step].data = '' : this.form[step].data = [];
        }
    },
    mounted() {
        
    }
});