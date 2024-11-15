function firstNonRepeatedChar(str) {
 // Write your code here
	charcount={}
	for char is str()
	{
		charcount[char]=charcount.get(char,0)+1
	}
	for char in str{
		if charcount[char]==1{
			return char
		}
		else{
			return null
		}
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
