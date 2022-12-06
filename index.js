
const express = require('express');
 const app = express();
 const dfff = require('dialogflow-fulfillment')
//  const action = require('dialogflow-fulfillment')

 app.get('/', (req,res)=>{
    res.send("we are live")
 })

 app.post('/' ,express.json(),(req,res)=>{
    const agent = new dfff.WebhookClient({
        request: req,
        response: res
    })
    function demo(agent) {
        agent.add("Sending res from webhook server")
        
    }
    var intentMap = new Map(); 

    intentMap.set('webhookdemo',demo)

    agent.handleRequest(intentMap);

 })


 app.listen(3333, ()=>console.log("Server is live at port 3333"))