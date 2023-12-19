const app = require('./app');
//variables
const port =3001;
const host ='127.0.0.1';

const server = app.listen(port,host,()=>{
    console.log('Node server is listenging to ${server.address().port} ')
});
