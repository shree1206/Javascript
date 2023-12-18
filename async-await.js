async function showname() {
    let response = await fetch('./assets/data.json');
    let students = await response.json();
    return students;

    //return (await fetch('./assets/data.json')).json();
}

//aync function always return promise
let a = showname();
a.then((res) => {
    for (let i in res) {
        console.log(res[i].name + ' ' + res[i].age)
    }
}).catch((error) => {
    console.log(error);
});