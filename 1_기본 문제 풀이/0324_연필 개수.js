// 3. 연필 개수

// 내 풀이
function solution(n) {
  return Math.ceil(n / 12);
}

// 문제풀이
function solution2(n) {
  let answer = Math.ceil(n / 12);
  return answer;

  // Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer로 반환
  // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환함
  // Math.round() 함수는 입력값을 반올림한 수와 가장 가까운 정수 값을 반환함
}

console.log(solution(25)); // 3
console.log(solution(178)); // 15
