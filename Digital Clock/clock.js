var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var seconds = document.getElementById("seconds");

var clock = setInterval(
    function time() {
        var date_curr = new Date();

        var hr = date_curr.getHours();
        var min = date_curr.getMinutes();
        var sec = date_curr.getSeconds();

        if(hr > 12){
            hr = hr - 12;
        }

        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;
        
    },1000   // 1 sec = 1000 milli sec
);
