const http = require('http');

const server = http.createServer((req, res) => {
    console.log('req ',req)
    console.log('req methode ',req.method) 
    console.log('req headers',req.headers)
    console.log('req body',req.body) 
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);
