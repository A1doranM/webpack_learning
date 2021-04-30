async function start() {
    return await Promise.resolve("async");
}

start().then(console.log);

class Util {
    static id = Date.now()
}

console.log("UTIL id: ", Util.id);

import("lodash").then(_ => {
    console.log("Lodash", _.random());
});