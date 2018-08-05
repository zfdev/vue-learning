var app = new Vue({
    el: '#app',
    data:{
        text: '',
        picked: 'js',
        checked: ['css'],
        selected: 'js',
        multipleSelect: ['html', 'js'],
        multipleSelectWithOptionData: ['css'],
        multipleSelectWithOption: [
            {
                text: 'HTML',
                value: 'html'
            },
            {
                text: 'Javascript',
                value: 'js'
            },
            {
                text: 'CSS',
                value: 'css'
            },
        ],
        radioPicked: false,
        radioValue: 123,
        checkboxToggle: false,
        value1: 'a',
        value2: 'b',
        message: '',
        numberMessage: 123,
        trimMessage: ''
    },
    computed:{

    },
    methods:{

    }
});