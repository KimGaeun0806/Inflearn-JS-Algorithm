// 56. 좌표 정렬

// 내 풀이
function solution(arr) {
  return arr.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));
}

// 문제풀이
function solution2(arr) {
  let answer = arr;
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return answer;
}

console.log(
  solution([
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
