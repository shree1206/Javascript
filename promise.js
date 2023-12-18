let myname = new Promise(function (resolve, reject) {
    resolve('Code is resolved');
    //reject('Code is rejected');
});

myname.then(function (res) {
    console.log('then code=> ', res);
}).catch((res) => {
    console.log('catch code=> ', res);
})

