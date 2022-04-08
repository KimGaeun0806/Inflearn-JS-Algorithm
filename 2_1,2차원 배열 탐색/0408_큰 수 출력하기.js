// 18. 큰 수 출력하기

// 내 풀이
function solution(arr) {
  return arr.filter((a, i) => i === 0 || a > arr[i - 1]);
}

// 문제풀이
function solution2(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

console.log(solution([7, 3, 9, 5, 6, 12]));
