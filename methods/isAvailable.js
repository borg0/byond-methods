const fetch = require("node-fetch");

module.exports = async (ckey)=>{
	const req = await fetch(`https://secure.byond.com/?command=key_available&key=${ckey}`);
	const res = await req.text();

	return res.split(/\(|\)|,/g)[1] === "true"

}
