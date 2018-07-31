"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var PORT = process.env.PORT ? process.env.PORT : 3000;
console.log("PORT is = " + PORT);
app.get("/", function (req, res) {
    console.log("Receive Request " + new Date());
    res.send('NODE_ENV= ' + JSON.stringify(process.env));
});
var server = app.listen(PORT, function () {
    console.log("Started at http://localhost:%d\n", PORT);
});
//# sourceMappingURL=index.js.map