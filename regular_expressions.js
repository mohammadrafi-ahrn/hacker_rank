//question : fisrt / last character of string vovel (aeiou)
//         : first / last character same (aa ee ii oo uu) vovel

//first method using for loop

// function usingForLoop(s) {
    
//     let str = s.toLowerCase(); // Convert string to lowercase
//     let vovels = "aeiou"; // Vowels
    
//     // Check if the first and last characters are vowels and same
//     if (vovels.includes(str[0]) && vovels.includes(str[str.length - 1]) && str[0] === str[str.length - 1]) {
//         console.log("It is true");
//     } else {
//         console.log("false");
//     }
   
// }

// usingForLoop("aba");
// usingForLoop("iowrtu");

// second method using regular expresion

 function regExp(s) {
    const re = /^([aeiou]).*\1$/;
    return re.test(s);
}
console.log(regExp("aba")); // Should print "It is true"
console.log(regExp("abc")); // Should print "false"
console.log(regExp("aei")); // Should print "false"
console.log(regExp("ooa")); // Should print "It is true"


// NOTE : str.length - 1 ---- ye string last index ko dikhata hai.

// str[str.length-1] ------ ye stringb ke last character ko dikhata hai.