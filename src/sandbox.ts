type stringOrNum = string | number;
type objWithName = { name: string; uid: stringOrNum };

const logDetails = (uid: stringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
    console.log(`${user.name} says hello!`);
}