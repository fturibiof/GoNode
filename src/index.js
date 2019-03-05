const server = require('./server');
const port = 8000 || process.env.PORT;
server.listen(port, console.log(`Server listening on port ${port}`));
