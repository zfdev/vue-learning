Vue.component('asynchronous-component', function(resolve, reject){
    window.setTimeout(function(){
        resolve({
            template: '<div>I am asynchronous component.</div>'
        })
    }, 2000);
});

var app = new Vue({
    el: '#app',
    data:{

    },
    computed:{

    },
    methods:{

    }
});