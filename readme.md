## Simple Smart Contract(ERC20 Contract) Event Monitor based on Node.js

Simple Smart Contract Event Monitor.

## Installing Required Packages

install npm packages `npm install`  

## Start Node.js API Server

You can run the node.js API Server on local via the following command:

    npm start

## Getting Previous Smart Contract Event

You can Get Previous Smart Contract Event via the following HTTP Request:

    localhost:3000/monitor/event/<contractAddress>/<eventName>/<fromBlock>/<toBlock>
    => localhost:3000/monitor/event/0xd26114cd6EE289AccF82350c8d8487fedB8A0C07/Transfer/7577000/7577713

## Start Tracking Smart Contract Event

You can Tracking Smart Contract Event via the following HTTP Request

    localhost:3000/monitor/event/<contractAddress>
    => localhost:3000/monitor/event/0xB8c77482e45F1F44dE1745F52C74426C631bDD5