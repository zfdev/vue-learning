Vue.directive('jason', {
    inserted: function(el){
        el.focus();
    }
});

Vue.directive('test', {
    bind: function(el, binding, vnode){
        var keys = [];
        for(var i in vnode){
            keys.push(i);
        }
        el.innerHTML = 
        'name:' + binding.name + '<br/>' + 
        'value:' + binding.value + '<br/>' + 
        'expression:' + binding.expression + '<br/>' + 
        'argument:' + binding.arg + '<br/>' + 
        'modifiers:' + JSON.stringify(binding.modifiers) + '<br/>' + 
        'vnode keys:' + keys.join(', ') + '<br/>';
    }
});

Vue.directive('multiple', {
    bind: function(el, binding, vnode){
        console.log(binding.value.msg);
        console.log(binding.value.name);
    }
});

var app = new Vue({
    el: '#app',
    data:{
        message: "Hello Jason"
    },
    // directives:{
    //     focus:{

    //     }
    // },
    computed:{

    },
    methods:{

    }
});