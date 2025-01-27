/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let str = s.toLowerCase();
    let vovel = "aeiou";
    let vovelsRes = "";
    let consonantsRes = "";
    
    for (let i = 0; i < str.length ; i++){
        const char = str[i];
        if(vovel.includes(char))
        {
            vovelsRes += char + "\n";   
        }
        else if(/[a-z]/.test(char))
        {
             consonantsRes += char + "\n"; 
        }
    }
    console.log(vovelsRes.trim());
    console.log(consonantsRes.trim());
}
vowelsAndConsonants("javascriptloops");