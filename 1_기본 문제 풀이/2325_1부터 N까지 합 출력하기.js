// 4. 1부터 N까지 합 출력하기

// 내 풀이
function solution(n) {
  return (n * (n + 1)) / 2;
}

// 문제 풀이
function solution2(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}

console.log(solution(6));
console.log(solution(10));
