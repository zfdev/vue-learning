var Time = {
    getUnix(){
        var date = new Date();
        return date.getTime();
    },
    getTodayUnix(){
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    getYearUnix(){
        var date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    getLastDate(time){
        var date = new Date(time);
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;    
    },
    getFormatTime(timestamp){
        var now = this.getUnix();
        var today = this.getTodayUnix();
        var year = this.getYearUnix();
        var timer = (now - timestamp)/1000;
        var tip = '';
        if(timer <= 0){
            tip = 'Just now';
        }else if(Math.floor(timer/60) <= 0){
            tip = 'Just now';
        }else if(timer < 3600){
            tip = Math.floor(timer/60) + 'minutes ago';
        }else if(timer >= 3600 && (timestamp - today >= 0)){
            tip = Math.floor(timer/3600) + 'hours ago';
        }else if(timer/86400 < 31){
            tip = Math.ceil(timer/86400) + 'day ago';
        }else{
            tip = this.getLastDate(timestamp);
        }
        return tip;
    }
}

Vue.directive('time', {
    bind(el, binding){
        el.innerHTML = Time.getFormatTime(binding.value);
        el.__timeout__ = setInterval(function(){
            el.innerHTML = Time.getFormatTime(binding.value);
        }, 60000);
    },
    unbind(el){
        clearInterval(el.__timeout__);
        delete el.__timeout__;
    }
});