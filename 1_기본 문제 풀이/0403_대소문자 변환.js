// 13. 대소문자 변환

// 내 풀이
function solution(s) {
  return s
    .split('')
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join('');
}

// 내 풀이2
function solution2(s) {
  let answer = '';
  for (let x of s) {
    answer += x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase();
  }
  return answer;
}

// 문제풀이
function solution3(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(solution('StuDY'));
console.log(solution2('StuDY'));
