Vue.component('jason-form', {
    props:{
        value: {
            type: String
        }
    },
    template: '<div class="jason-form col">\
    <fieldset :disabled="acitive">\
    <slot></slot>\
    </fieldset>\
    </div>',
    data: function(){
        return {
            acitive: false
        }   
    },

});