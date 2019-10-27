process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    
    if(input !== null) {
        var instruction = input.toString().trim();
        var expr = instruction;
        switch (expr) {
        case '/exit':
            process.stdout.write('Quitting app!\n');
            process.exit();
            break;
        case '/nodeV':
            console.log(process.versions.node);
            break;
        case '/nodeL':
            console.log(process.env.LANG);
            break;
        default:
            process.stderr.write('Wrong instruction!\n');
            break;
        }
    }    
});