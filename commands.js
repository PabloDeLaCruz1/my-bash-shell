const fs = require('fs');
const request = require('request');

module.exports = {
    pwd: () => {
        process.stdout.write(process.env.PWD);
    },
    date: () => {
        process.stdout.write(Date.now().toString());
    },
    ls: () => {
        fs.readdir('.', (err, files) => {
            if (err) throw err;

            files.forEach((file) => {
                process.stdout.write(file.toString() + "\n");
            });
            process.stdout.write("prompt > ");
        });
    },
    echo: (args) => {
        process.stdout.write(args + "\n");
        process.stdout.write("prompt > ");
    },
    curl: (stdin, url) => {
        request.get(stdin ? stdin : url, (err, response) => {
            if (err) {
                return process.stdout.write(err + '\nprompt > ');
            }
            process.stdout.write(response.body + '\nprompt > ');
        });
    },
    grep: (stdin, term) => { //test by piping an output from curl to grep
        if (!stdin) {
            return process.stdout.write('' + '\nprompt > ');
        }        
        let lines = stdin.split('\n');
        let matchingLines = lines.filter((line) => {
            return line.indexOf(term) !== -1;
        });        
        return process.stdout.write(matchingLines.join('\n') + '\nprompt > ');
    }

};