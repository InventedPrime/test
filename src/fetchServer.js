const heading = document.querySelector('h1');

async function GetUsers() {
    await fetch('/api/data')
    .then(value => {value.json()})
    .then(data => {console.log(data)})

};

GetUsers();


