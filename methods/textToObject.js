function listToArray(list){
	const regex = /list\(|\)/g;

	return list.replace(regex, "")
		.split(new RegExp(",|, ", "g"))
		.filter(a => a)
		.map(a => a.replace(new RegExp('^"|"$', "g"), ""))
}

module.exports = (text, listTags = ["players", "tags"])=>{
	const result = {};

	let propName = "general";
	const parsedRes = text
		.split(new RegExp("\\r|\\n|\\t", "g"))
		.filter(a => a)
		.forEach(a => {
			if(/=/gs.test(a)){ //categories dont have "=" so the code below is for props
				const [prop, value] = a.split(" = ");
				result[propName][prop] = !listTags.includes(prop)
						? value.replace(new RegExp('^"|"$', "g"), "")
						: listToArray(value)
				return
			}

			//if a value is a category the name of the category has to be stored
			//so the props are put in the correct place
			propName = a;
			result[propName] = {}
		})

	return result;
} 
