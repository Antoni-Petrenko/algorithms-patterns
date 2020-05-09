const isValidAnagram = (firstW, secW) => {

	if (firstW.length !== secW.length) return false;
	const convertToObject = word =>( [...word].reduce((object, letter) => {
		object[letter] = (object[letter]||0) + 1;
		return object
	}, {}));
	const firstWObj=convertToObject(firstW);
	const secWObbj=convertToObject(secW);

	for(const key in firstWObj){
		debugger
		if(!(key in secWObbj)) return false;
		if(firstWObj[key] !== secWObbj[key]) return false;
		debugger
	}

	return true

};


console.log(isValidAnagram("aaz", "zza"));

console.log(isValidAnagram("", ""));
console.log(isValidAnagram("rat", "cat"));
console.log(isValidAnagram("awesome", "awesom"));
console.log(isValidAnagram("texttwisttime", "timetwisttext"));


