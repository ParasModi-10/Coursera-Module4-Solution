var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for(var name in names) {
	var ch = names[name].charAt(0).toLowerCase();

	if(ch === 'j') {
		console.log("Good Bye " + names[name]);
	} else {
		console.log("Hello " + names[name]);
	}
}