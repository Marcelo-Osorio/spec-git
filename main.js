
'use strict'
console.log('hell0 word00')
Promise.all(new Promise((res,rej) => {
    setTimeout(() => {
        res('culacanes');
    }, 3000);
}))
