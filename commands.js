const fs = require('fs');

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
    echo: (cmd) => {
        process.stdout.write(cmd.slice(1).join(" ") + "\n");
        process.stdout.write("prompt > ");
    }
}