const {resolve} = require("path");
const fetch = require("node-fetch");

const textToObject = require(resolve(__dirname, "textToObject.js"));

module.exports = async (author, name)=>{
	const req = await fetch(`http://www.byond.com/developer/${author}/${name}?format=text`);
	const res = await req;
	const text = await res.text();

	const [type] = res.headers.get("content-type").split(";");
	if(type != "text/plain") throw new Error("Invalid developer.");

	return textToObject(text);
}

