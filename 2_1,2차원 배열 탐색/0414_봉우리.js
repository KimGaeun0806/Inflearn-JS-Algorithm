// 24. 봉우리

// 내 풀이
function solution(arr) {
  let num = 0;
  let zero = Array.from({ length: arr.length + 1 }, () => 0);
  let newArr = [zero, ...arr, zero].map((a) => a.join('')).join('00');
  let newInt = newArr.split('').map((a) => a * 1);
  newInt.map((a, i, s) => {
    if (a > s[i - 1] && a > s[i + 1] && a > s[i - 7] && a > s[i + 7]) num++;
  });
  return num;
}

// 문제풀이
function solution2(arr) {
  // 가장자리가 0으로 초기화되었고, 격자판의 숫자는 모두 자연수이므로 가장자리보다는 무조건 큼 -> 고려할 필요 x
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0]; // 상 우 하 좌
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        // k for문 돌면서 네 방향 탐색
        let nx = i + dx[k]; // 행 좌표
        let ny = j + dy[k]; // 열 좌표
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++; // flag가 1이면 true, 0이면 false
    }
  }

  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
