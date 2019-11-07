var os = require('os');

function timeOS() {
    var uptime = os.uptime();
    var uptimeM = Math.floor(uptime / 60);
    var uptimeH = Math.floor(uptimeM / 60);
    return uptimeH + ' h ' + (uptimeH % 60) + ' min ' + (uptime % 60) + ' s ';
}

exports.timeOS = timeOS;
