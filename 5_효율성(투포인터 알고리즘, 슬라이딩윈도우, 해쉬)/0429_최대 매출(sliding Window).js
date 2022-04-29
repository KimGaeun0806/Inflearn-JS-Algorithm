// 39. 최대 매출(Sliding Window)

// 내 풀이
function solution(k, arr) {
  return Math.max(
    ...arr.map((_, i) => arr.slice(i, i + k).reduce((p, c) => p + c))
  );
}

// 문제풀이
function solution2(k, arr) {
  let answer,
    sum = 0;

  for (let i = 0; i < k; i++) sum += arr[i]; // 첫 3일 더한 값
  answer = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

// 슬라이딩 윈도우 -> 고정 사이즈의 윈도우가 이동하면서 윈도우 내에 있는 데이터를 이용해 문제를 풀이하는 알고리즘
// 배열 요소의 일정 범위 값을 비교할 때 사용하면 유용함

console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
