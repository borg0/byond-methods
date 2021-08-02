const {resolve} = require("path");
const fetch = require("node-fetch");

const textToObject = require(resolve(__dirname, "textToObject.js"));

module.exports = async (key)=>{
	const req = await fetch(`http://www.byond.com/members/${key}?format=text`);	
	const res = await req;
	const text = await res.text();

	const type = req.headers.get("content-type").split(";")[0];
	if(type != "text/plain") throw new Error("Invalid user.");

	return textToObject(text);
}

