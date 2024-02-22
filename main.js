Promise.all(new Promise((res,rej) => {
    setTimeout(() => {
        res('culacanes');
    }, 3000);
}))