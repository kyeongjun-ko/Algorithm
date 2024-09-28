var isPalindrome = function(s) {
  s=  s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  let rev="";
  for(let i=0;i<s.length;i++){
rev= s[i]+rev
  }
  if(rev==s)return true;
  
  return false;

};
