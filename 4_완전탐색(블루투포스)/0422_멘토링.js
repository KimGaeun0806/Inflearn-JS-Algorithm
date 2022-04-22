// 32. 멘토링

// 내 풀이
function solution(arr) {
  let [num, answer] = [0, 0];
  let numArr = Array.from({ length: arr[0].length }, () => []);
  arr.map((a) => a.map((b, j) => numArr[b - 1].push(j)));

  numArr.map((a) => {
    for (let x of numArr) {
      num = 0;
      for (let j = 0; j < a.length; j++) {
        if (a[j] > x[j]) num++;
      }
      if (num === arr.length) answer++;
    }
  });
  return answer;
}

// 내 풀이2
function solution2(arr) {
  let newArr = [];
  let leng = arr.length;
  arr.map((a) => {
    for (let j = 0; j < a.length; j++) {
      for (let k = 1; k < a.length - j; k++) {
        newArr.push([a[j], a[j + k]]);
      }
    }
  });
  return (
    newArr
      .map((a) => newArr.filter((e) => e.toString() === a.toString()))
      .filter((e) => e.length === leng).length / leng
  );
  // newArr.filter((e) => e === a)로 하면, 배열끼리의 비교가 되기 때문에 항상 false가 나옴
}

// 문제풀이
function solution3(arr) {
  let answer = 0;
  let m = arr.length;
  let n = arr[0].length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
