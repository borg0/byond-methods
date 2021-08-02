module.exports = (ckey)=>{
	const matches = ckey.match(/[^0-9A-Za-z_\-\.]/)

	if(matches) return false;

	return true;
}
