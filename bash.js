const commands = require('./commands');

process.stdout.write('promt > ');
// console.log(commands);

process.stdin.on('data', (data) => {
    let cmd = data.toString().toLowerCase().trim().split(" ");
    
    switch (cmd[0]) {
        case "date":
            commands.date();
            break;
        case "pwd":
            commands.pwd();
            break;
        case "ls":
            commands.ls();
            break;
            case "echo":
            commands.echo(cmd);
            break;
        default:
            process.stdout.write('\ninvalid command');
            break;
    }

});