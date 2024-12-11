// An anagram is a word formed by rearranging the letters of another word.
let s1 = "silent";
let s2 = "listen";
let tr=s1.split('').sort().join('')
let tr1=s2.split('').sort().join('')


if(tr==tr1){
    console.log("anagram")
}else{
    console.log("not")
}