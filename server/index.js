const Ws = require('ws');

;((Ws)=>{
  const server = new Ws.Server({port : 8000})

  const init = () =>{
    bindEvent();
  }
  function bindEvent(){
    server.on('open',handleOpen);
    server.on('close',handleClose);
    server.on('error',handleError);
    server.on('connection',handleConnection)
  }
  function handleOpen(){
    console.log('服务端 open');
  }
  function handleClose(){
    console.log('服务器 close');
  }
  function handleError(){
    console.log('服务器 error');
  }
  function handleConnection(ws){
    console.log('服务器 Connection');
    ws.on('message',handleMessage);
  }
  function handleMessage(msg){
    console.log(msg);
    server.clients.forEach((c)=>{
      c.send(msg)
    })
  }
  init();
})(Ws);