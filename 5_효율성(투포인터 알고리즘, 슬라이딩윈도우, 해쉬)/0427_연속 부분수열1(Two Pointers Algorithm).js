// 37. 연속 부분수열1(Two Pointers Algorithm)

// 내 풀이
function solution(n, m, arr) {
  let answer = 0;
  arr.map((a, i) => {
    let j = 0;
    let sum = a;
    while (sum <= m) {
      j++;
      sum += arr[i + j];
      if (sum === m) answer++;
    }
  });
  return answer;
}

// 내 풀이2
function solution2(n, m, arr) {
  let answer = 0;
  arr.map((_, i) => {
    for (let j = i + 1; j <= n; j++) {
      if (arr.slice(i, j).reduce((p, c) => p + c) === m) {
        answer++;
        break;
      }
    }
  });
  return answer;
}

// 문제풀이
function solution3(n, m, arr) {
  let answer = 0,
    lt = 0,
    sum = 0;

  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
