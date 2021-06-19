const http = require('http');

http.get('http://api.open-notify.org/astros.json', (res) =>{
    let data = "";
    res.on('data', (chunk) => {
        data = data + chunk;
    });

    res.on('end', () => {
        let objData = JSON.parse(data);
        console.log(objData);
    });
});