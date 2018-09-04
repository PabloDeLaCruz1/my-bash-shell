const commands = require('./commands');

process.stdout.write('promt > ');

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim().split(" ")[0];
    let args = data.toString().trim().split(" ").slice(1).join(" ");
    
    if (commands[cmd]) {
        console.log(args);
        
        commands[cmd](args);
    } else {
        process.stdout.write('\ninvalid command');
    }

});

//TODO refactor using this function to DRY things up
let finish = (output) => {
    process.stdout.write(output + '\nprompt > ');
};