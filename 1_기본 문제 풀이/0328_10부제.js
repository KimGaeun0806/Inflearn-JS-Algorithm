// 7. 홀수

// 내 풀이
function solution(day, arr) {
  return arr.filter((e) => e % 10 === day).length;
}

// 문제풀이
function solution2(day, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++; // 어떤 숫자든 10으로 나누면 일의 자리 수가 나머지가 됨
  }
  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
