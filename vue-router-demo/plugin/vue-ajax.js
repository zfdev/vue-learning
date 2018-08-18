import Vue from "../node_modules/vue";

const install = function(){
    const Ajax = function(options = {}){
        options.type = (options.type || 'GET').toUpperCase();
        let data = [];
        for(let i in options.data){
            data.push(encodeURIComponent(i) + '=' + encodeURIComponent(options.data[i]));
        }
        data = data.join('&');

        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                const status = xhr.status;
                if(status >= 200 && status < 300){
                    options.success && opitons.success(JSON.parse(xhr.responseText), xhr.responseXML);
                }else{
                    options.error && options.error(status);
                }
            }
        }

        if(options.type === 'GET'){
            xhr.open('GET', options.url + '?' + data, true);
            xhr.send(null);
        }else{
            xhr.open('POST', options.url, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(data);
        }
    }
    Vue.prototype.$ajax = Ajax;
}


export default install;