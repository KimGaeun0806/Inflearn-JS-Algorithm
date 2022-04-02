// 12. 대문자로 통일

// 내 풀이
function solution(s) {
  return s.toUpperCase();
}

// 문제풀이
function solution2(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }
  return answer;
}

// 문제풀이2
function solution3(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122)
      answer += String.fromCharCode(num - 32); // x가 소문자일 때
    else answer += x;
  }
  return answer;
}

console.log(solution('ItisTimeToStudy'));
