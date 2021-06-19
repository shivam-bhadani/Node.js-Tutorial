const http = require('https');

const data = JSON.stringify({
    name: "Shivam Bhadani",
    college: "IIT Kanpur",
    job: "Software Developer"
});

const options = {
    hostname: 'reqres.in',
    path: '/api/users',
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    }
};

// request

const req = http.request(options, (res) => {
    let body = "";
    console.log("Status Code: " + res.statusCode);

    res.on('data', (chunk) => {
        body = body + chunk;
    });

    res.on('end', () => {
        console.log("Body: ", JSON.parse(body));
    });
});

req.write(data);
req.end();