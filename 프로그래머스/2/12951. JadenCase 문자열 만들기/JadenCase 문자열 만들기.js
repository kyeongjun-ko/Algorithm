function solution(s) {
  const lower_s = s.toLowerCase();
    
  return lower_s.split(' ').map(word => 
    word.replace(/^[a-z]/, word.charAt(0).toUpperCase())
  ).join(' ')


  return s.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  ).join(' ')
}