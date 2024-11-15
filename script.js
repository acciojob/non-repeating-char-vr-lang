function firstNonRepeatedChar(s) {
    // Step 1: Count the frequency of each character
    const charCount = {};

    // Count frequency of each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Find the first non-repeated character
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return s[i]; // Return the first non-repeated character
        }
    }

    // Step 3: If no non-repeated character exists, return null
    return null;
}


const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
