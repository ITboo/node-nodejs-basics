const parseArgs = () => {
    const args = process.argv.slice(2);
    const consoleOutput = [];
    const separator = ', ';

    for (let i = 0; i < args.length; i += 2) {
        consoleOutput.push(`${args[i].slice(2)} is ${args[i + 1]}`)
    }

    console.log(consoleOutput.join(separator));
};

parseArgs();