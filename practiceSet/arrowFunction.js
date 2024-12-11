let vowel=(string)=>{
    let count=0;
    for(let i=0;i<string.length;i++){
        if(string[i]=='a' || string[i]=='o'|| string[i]=='u'|| string[i]=='e'|| string[i]=='i'
            ||string[i]=='A' || string[i]=='E'|| string[i]=='I'|| string[i]=='O'|| string[i]=='U'
        ){
               count++;
        }
    }
    return count;
}

let string="the baap comoany stay in A paregon";

console.log(vowel(string));

