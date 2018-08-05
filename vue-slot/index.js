Vue.component('child-component', {
    template: '\
    <div>\
        <slot>\
            <p>If parent component is empty, this content will show.</p>\
        </slot>\
    </div>'
});

Vue.component('layout-component', {
    template: '\
    <div>\
        <div class="header">\
            <slot name="header"></slot>\
        </div>\
        <div class="main">\
            <slot></slot>\
        </div>\
        <div class="footer">\
            <slot name="footer"></slot>\
        </div>\
    </div>',
    mounted() {
        console.log(this.$slots.header);
    },
});

Vue.component('slot-scope', {
    template: '\
    <div>\
        <slot msg="Content from child component."></slot>\
    </div>'
});

Vue.component('my-list', {
    props:{
        books:{
            type: Array,
            default: function (params) {
                return [];
            }
        }
    },
    template: '\
    <ul>\
        <slot name="book" v-for="book in books" :book-name="book.name"></slot>\
    </ul>',
});

var app = new Vue({
    el: '#app',
    data: {
        books:[
            {
                name:'Vue real fight'
            },
            {
                name:'Javascript professional design'
            },
            {
                name:'Javascript best'
            }
            
        ]
    },
    computed: {

    },
    methods: {

    }
});