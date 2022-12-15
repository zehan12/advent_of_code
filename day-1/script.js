const fs = require('fs');
let data = null

try {
    data = fs.readFileSync('./data.js', 'utf8').split('\n')
} catch (err) {
    console.error(err);
}


let result = [];
let sum = 0;
for (let i = 0; i < data.length; i++) {
    if (data[i] == "") {
        sum = 0
    } else {
        sum += +data[i];
        result.push(sum);
    }
}

let max = result[0]
for (let j = 0; j < result.length; j++) {
    if (max < result[j]) {
        max = result[j]
    }
}
console.log(max)