
'use strict'
console.log('hell0 word00');
function relasedYear() {
    return new Date(2,2,2024);
    
}
Promise.all(new Promise((res,rej) => {
    setTimeout(() => {
        res('culacanes');
    }, 3000);
}))

let worker = new Worker('sw.js');
worker.addEventListener('message',e => console.log(e))