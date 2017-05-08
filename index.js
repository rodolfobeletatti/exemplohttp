var request = require('request')

var options = {
    url: 'https://jsonplaceholder.typicode.com/posts/1',
    headers:{
        "Accept": 'application/json',
    },
}

request.get(options, function (error, response, body) {
    if (response.statusCode === 200) {
        console.log(JSON.stringify(body))
    }
})