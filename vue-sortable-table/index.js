Vue.component('my-component', {
    template: '<div>{{message}}</div>',
    data: function () {
        return {
            message: 'This is the component content.'
        }
    }
});

var app = new Vue({
    el: '#app',
    data:{
        columns: [
            {
                title: 'Name',
                key: 'name'
            },
            {
                title: 'Age',
                key: 'age',
                sortable: true
            }
        ],
        data: [
            {
                name: 'Jason Zhang',
                age: 18,
                birthday: '1999-02-21',
                address: 'Shanghai China'
            },
            {
                name: 'Amy Chen',
                age: 28,
                birthday: '1993-02-21',
                address: 'Shanghai China'
            },
            {
                name: 'Monica Chen',
                age: 24,
                birthday: '1996-01-21',
                address: 'Shanghai China'
            },
            {
                name: 'Yuan Yuan Jia',
                age: 21,
                birthday: '1996-01-21',
                address: 'Shanghai China'
            },
            {
                name: 'Christen Chen',
                age: 40,
                birthday: '1978-01-21',
                address: 'Shanghai China'
            }
        ]
    },
    computed:{

    },
    methods:{
        addNewData(){
            this.data.push({
                name: 'Baiqian Chen',
                age: 33,
                birthday: '1986-01-21',
                address: 'Shanghai China'
            });
        }
    },
    mounted() {

    },
});