// 1. 세 수 중 최솟값

// 내 풀이
function solution(a, b, c) {
  return Math.min(a, b, c);
}

// 내 풀이2
function solution2(a, b, c) {
  let min = a >= b ? b : a;
  return min >= c ? c : min;
}

// 문제풀이
function solution3(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(6, 5, 11));
