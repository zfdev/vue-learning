var MyComponent = Vue.extend({
    template: '<div>Hello: {{name}}</div>',
    data: function(){
        return {
            name: 'Jason'
        }
    }
});

new MyComponent().$mount('#mount-div');