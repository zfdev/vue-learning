// var Child = {
//     render: function(createElement){
//         return createElement('p', 'Hello Jason')
//     }
// }

// Vue.component('my-component', {
//     render: function(createElement){
//          var childNode = createElement(Child);
//          return createElement('div', [
//             childNode,
//             childNode
//          ]);
//     }
// });

Vue.component('repeat-slot', {
    render: function(createElement){
        return createElement('p', 'Jason Zhang');
    }
});

Vue.component('my-component', {
    render: function(createElement){
        return createElement('div', [
            this.$slots.default,
            this.$slots.default,
            this.$slots.default,
            this.$slots.default
        ]);
    }
})

var app = new Vue({
    el: '#app',
    data:{

    },
    computed:{

    },
    methods:{

    }
});