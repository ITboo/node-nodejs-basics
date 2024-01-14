const parseEnv = () => {
    const prefix = 'RSS_';
    const separator = '; ';

    const variables = Object.entries(process.env).filter(([key]) => key.startsWith(prefix));
    const consoleOutput = variables.map((variable) => variable.join('=')).join(separator);

    console.log(consoleOutput);
};

parseEnv();