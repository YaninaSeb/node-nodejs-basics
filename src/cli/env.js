 export const parseEnv = () => {
    let res = [];
    let allEnv = Object.keys(process.env);
    allEnv.forEach((e) => {
        if (/\bRSS_/.test(e)) {
            res.unshift(`${e}=${process.env[e]}`);
        }
    });
    console.log(res.join('; '));
};
