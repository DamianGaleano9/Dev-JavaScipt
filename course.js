var ageOne = 12;

ageOne.toString();



var number = "12";

parseInt(12);


console.log(number);



var str = "the quick brown fox jumped over the lazy dog"

console.log(str.charAt(2));


console.log(str.concat("again and again"));

str.includes("lazy");
console.log(str.includes("lazy"));


console.log(str.startsWith("the"));

console.log(str.endsWith("dog"));

console.log(str.match());


console.log(str.replace("fox", "horse"));


string = "Hello, what happened to all the pie?"

console.log(string.startsWith("H"));
console.log(string.endsWith("?"));

string = "Hello, what happened to all the pie?"

console.log(string.startsWith("H"));
console.log(string.endsWith("?"));


string = "Hello, what happened to all the pie?"

console.log(string.repeat(4));

console.log();




console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());



var messyString = "          hy _there     ";
console.log(messyString.trim());

var numbers = ("555-555-5555");
console.log(numbers.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/));


console.log("foo 555 555 55555 is my number".search((/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)));


console.log(str.indexOf("lazy"));

console.log(number.search());

console.log(str.lastIndexOf("the"));


console.log(str.indexOf("lazy"));

/* INDEXOF LASTINDEXOF*/


var str = "the quick brown fox jumped over the lazy dog"


var str2 = str.concat(" new line new");

console.log(str2);



console.log(str2.indexOf("new"));
console.log(str2.lastIndexOf("new"));

stringOne = "The dog meows"

console.log(replacedString =  stringOne.replace("dog", "cat"));


stringTwo = "The cow jumped over the moon"

console.log(indexOfOver =  stringTwo.indexOf("over"));



stringThree = "Never gonna give you up never gonna let you down"

console.log(lastIndex = stringThree.lastIndexOf("never"));

/*SLICE*/
console.log(str.charAt(8));

console.log(str.slice(10));
console.log(str.slice(-18));
console.log(str.slice(10, 26));



/*TRIM */


console.log(str.slice(4, 10).trim());



/*TETS*/
//We have given you the sentences already, please fill in the returns to make the test pass
// EXAMPLE "return (str.toUpperCase());"

function strings() {
    
    // Use slice to return from the "w" to the end of the sentence
    var str = "The five boxing wizards jump quickly";
    return (str.slice(16,36));
    
}

console.log(strings());





































console.log();