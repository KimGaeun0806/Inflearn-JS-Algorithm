// 20. 가위바위보

// 내 풀이
function solution(a, b) {
  let newArr = a.map((a, i) => a - b[i]);
  return newArr.map((a) => (a === 0 ? 'D' : a === 1 ? 'A' : 'B'));
}

// 문제풀이
// a와 b가 비기는 경우, a가 이기는 경우를 제외한 경우는 모두 b가 이기는 경우
// 분류를 할 때 기준을 무엇으로 잡는지가 중요함
function solution2(a, b) {
  let answer = '';
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += 'D' + ' ';
    else if (a[i] === 1 && b[i] === 3) answer += 'A' + ' ';
    else if (a[i] === 2 && b[i] === 1) answer += 'A' + ' ';
    else if (a[i] === 3 && b[i] === 2) answer += 'A' + ' ';
    else answer += 'B' + ' ';
  }
  return answer;
}

console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
console.log(solution2([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
