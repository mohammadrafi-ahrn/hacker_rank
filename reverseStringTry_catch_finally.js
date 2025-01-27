function reverseString(s){
    try{
        console.log(s.split('').reverse().join(''));
    } catch (err) {
        console.error("s.split is not a function");
        console.log(s)
    }
}
reverseString(12456);

// javascript string ko reverse karne ke liye direct koi method nhi hota hai hai isiliye -----
// 1st step --- > s.split('') [string ko array me covert karta hai]

// 2nd step ---> .reverse() [ye array ko reverse(ulta) karegi ]

// 3rd step ----> join('') [ye array ko daubara se string me convert karega]