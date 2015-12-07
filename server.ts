///<reference path="./typings/express/express.d.ts"/>
///<reference path="./typings/node/node.d.ts"/>
"use strict";

import * as express from "express";
import * as http from "http";
import * as fs from "fs";

var app = express(),
    public_folder = "./dist";

const serverPort = 3000;

app.use(express.static('node_modules'));
app.use('/scripts', express.static("dist/scripts"));

app.get('/', function(req: any, res: any) {
    var indexHTML = fs.readFileSync(public_folder + '/index.html');
    res.setHeader('Content-Type', 'text/html');
    res.write(indexHTML);

    res.end();
});

app.listen(serverPort, function() {
    console.log("Hello");
});
