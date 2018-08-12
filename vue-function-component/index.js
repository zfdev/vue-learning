var ImgItem = {
    props: ['data'],
    render: function(createElement){
        return createElement('div', [
            createElement('p', 'Image component'),
            createElement('img', {
                attrs:{
                    src: this.data.url
                }
            })
        ])
    }
};

var VideoItem = {
    props: ['data'],
    render: function(createElement){
        return createElement('div', [
            createElement('p', 'Video component'),
            createElement('video', {
                attrs:{
                    src: this.data.url,
                    controls: 'controls',
                    autoplay: 'autoplay'
                }
            })
        ])
    }
};

var TextItem = {
    props: ['data'],
    render: function(createElement){
        return createElement('div', [
            createElement('p', 'Text component'),
            createElement('p', this.data.url)
        ])
    }
};

Vue.component('smart-item', {
    functional: true,
    render: function(createElement, context){
        function getComponent(){
            var data = context.props.data;
            if(data.type === 'img') return ImgItem;
            if(data.type === 'video') return VideoItem;
            return TextItem;
        }
        return createElement(
            getComponent(),
            {   
                props:{
                    data: context.props.data
                }
            },
            context.children
        );
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    }
});

var app = new Vue({
    el: '#app',
    data:{
        data: {}
    },
    computed:{

    },
    methods:{
        change: function(type){
            if(type === 'img'){
                this.data = {
                    type: 'img',
                    url: 'https://vuejs.org/images/logo.png'
                }
            }
            else if(type === 'video'){
                this.data = {
                    type: 'video',
                    url: ''
                }
            }
            else if(type === 'text'){
                this.data = {
                    type: 'text',
                    content: 'This is a text content.'
                }
            }
        }
    },
    created() {
        this.change('img');
    },
});