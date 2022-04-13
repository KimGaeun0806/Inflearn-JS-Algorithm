// 23. 격자판 최대합

// 내 풀이
function solution(arr) {
  let [sum, num2, num3] = [[], 0, 0];

  arr.map((a, i) => {
    let num = 0;
    for (let j = 0; j < arr.length; j++) {
      num += arr[j][i];
    }
    sum.push(num);

    num2 += arr[i][i];
    num3 += arr[i][arr.length - i - 1];

    sum.push(a.reduce((p, c) => p + c));
  });

  sum.push(num2, num3);
  return Math.max(...sum);
}

// 문제풀이
function solution2(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0; // 초기화
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j]; // sum1은 행의 합
      sum2 += arr[j][i]; // sum2는 열의 합
    }
    answer = Math.max(answer, sum1, sum2);
  }

  sum1 = sum2 = 0; // 초기화 후 대각선 합으로 사용
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

console.log(
  solution2([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
