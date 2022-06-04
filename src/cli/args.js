export const parseArgs = () => {
    let res = [];
    let allArgs = process.argv;
    allArgs.forEach((arg, index) => {
        if (/--/.test(arg)) {
            res.push(`${allArgs[index].slice(2)} is ${allArgs[index+1]}`);
        }
    });
    console.log(res.join(', '));
};

//test
parseArgs();
