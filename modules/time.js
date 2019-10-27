var os = require('os');

function timeOS() {
    var uptime = os.uptime();
    console.log(uptime + ' s');
    var uptimeM = Math.floor(uptime / 60);
    console.log(uptimeM + ' min '+ Math.floor(uptime % 60) + ' sekund');
    var uptimeH = Math.floor(uptimeM / 60);
    console.log(uptimeH + ' h ' + (uptimeH % 60) + ' min ' + (uptime % 60) + ' s ');
}

exports.print = timeOS;
