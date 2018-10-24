let re;
re = /hello/;
re = /hello/i; // i = makes it case insensitive
//re = /hello/g; // g = Global search, for all instances, not just the first one it finds.

console.log(re);
console.log(re.source);

// exec() - Return result in an array or null
let result = re.exec('hello world');

console.log(result);
console.log(result[0]);
console.log(result.index);
console.log(result.input);

// test() - Returns true or false
result = re.test('Hello');
console.log(result);

// match() - Rreturn result array or null
let str = 'Hello There';
result = str.match(re);
console.log(result);

// search() - Returns index of the first match, if not found returns -1
str = 'Brad Hello There';
result = str.search(re);
console.log(result);

// replace() - Return new string with some or all matches of a pattern
str = 'Brad Hello There';
let newStr = str.replace(re, 'Hi');
console.log(newStr);


/////////////////////////////////////////////////////////////////////
// Regular expression
re = undefined;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacters
re = /^h/i; // Must start with
re = /d$/i; // Must ends with
re = /world$/i; // Must ends with
re = /^hello$/i;
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more time
re = /gre?a?y\?/i; // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i // Must be an a or e
re = /[GF]ray/ // Must be a G or F
re = /[GF]ray/ // Must be a G or F
re = /[^GF]ray/i // Match anything except G or F
re = /[A-Z]ray/ // Match any uppercase letter
re = /[a-z]ray/ // Match any lowercase letter
re = /[A-Za-z]ray/ // Match any lowercase & uppercase letter
re = /[0-9]ray/ // Match any digit
re = /[0-9][0-9]ray/ // Match any digit

// Braces {} - Quantifiers
re = /Hel{5}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur between 2 & 4 times
re = /Hel{2,}o/i; // Must occur at least {m} times

// Parentheses () - Grouping 
re = /([0-9]x){3}/ // Matches 4x3x6x 

// Shorthand character classes
re = /\w/; //  Word character - alphanumeric or _
re = /\w+/; //  + = one or more
re = /\W/; //  Non-Word character
re = /\d/; //  Match any digit
re = /\d+/; //  Match any digit 0 or more times
re = /\D/; //  Match any Non-digit
re = /\s/; //  Match whitespace character
re = /\S/; //  Match |Non-whitespace character
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y

// String to match
str = 'Hello, welcome to Hellxy'; 
//str = 'hello';

// Log Results
result = re.exec(str);
console.log(result);

function reTest(re, str){
  if(re.test(str)){
    console.log(`${str} matches ${re}`);
  }else{
    console.log(`${str} does NOT matches ${re}`);
  }
}

reTest(re, str);