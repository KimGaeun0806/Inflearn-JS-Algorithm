// 2. 삼각형 판별하기

// 내 풀이
function solution(a, b, c) {
  return a + b > c && a + c > b && b + c > a ? 'YES' : 'NO';
}

// 문제풀이
// 짧은 막대 두 개의 합이 가장 긴 막대보다 커야 함
function solution2(a, b, c) {
  let answer = 'YES', // 기본값 'YES'로 해놓고, 'NO'일 시에만 바꾸도록 함
    max; // max에는 a, b, c 중 가장 큰 값
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = 'NO';
  return answer;
}

console.log(solution(7, 6, 11));
console.log(solution(13, 33, 17));
