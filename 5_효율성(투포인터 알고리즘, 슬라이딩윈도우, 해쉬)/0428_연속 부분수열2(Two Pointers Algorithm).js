// 38. 연속 부분수열2(Two Pointers Algorithm)

// 내 풀이
function solution(n, m, arr) {
  let answer = 0;
  arr.map((_, i) => {
    let p = i + 1;
    while (p <= n) {
      if (arr.slice(i, p).reduce((p, c) => p + c) <= m) {
        p++;
        answer++;
      } else break;
    }
  });
  return answer;
}

// 문제풀이
function solution2(n, m, arr) {
  let answer = 0,
    sum = 0,
    lt = 0;
  for (let rt = 0; rt < n; rt++) {
    sum += arr[rt];
    while (sum > m) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }
  return answer;
}

console.log(solution(5, 5, [1, 3, 1, 2, 3]));
