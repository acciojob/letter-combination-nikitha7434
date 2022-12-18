
var map = {
  "0":0,
  "1":1,
  "2":"abc",
  "3":"def",
  "4":"ghi",
  "5":"jkl",
  "6":"mno",
  "7":"pqrs",
  "8":"tuv",
  "9":"wxyz"
}
let s1='';
function letterCombinations(input_digit) {

  //Complete the function
  
for(let i=0;i<input_digit.length;i++){
    if(s1==''){
      s1 =map[input_digit[i]];
    }
    else{
      s1 +=map[input_digit[i]];
    }
   }
 // start combination start
 let  combination =[];
 
 for(let i=0;i<s1.length/2;i++){
   for(let j=3;j<s1.length;j++){
    
    let word =s1[i]+s1[j];

     combination.push(word);
      
    }

 }
 return combination;
}

module.exports = letterCombinations;



console.log(letterCombinations("23"));