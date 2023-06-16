//@ts-nocheck
console.log(process.argv);

const arg = process.argv.slice(2)[0];
const obj = JSON.parse(JSON.stringify(eval('(' + arg + ')')));
console.log(obj, typeof obj, obj.PAID_USER, obj.VIP);

// console.log(JSON.parse(process.argv.slice(2)[0]));
