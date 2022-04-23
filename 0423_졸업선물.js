// 33. 졸업선물

// 내 풀이
function solution(s, arr) {
  let oriS = s;
  let answerArr = [];

  for (let x of arr) {
    x[0] = x[0] / 2;
    s = oriS;
    let count = 0;
    let arr2 = arr.slice();

    arr2.sort((a, b) => a[0] + a[1] - b[0] - b[1]);
    let sumArr = arr2.map((a) => a[0] + a[1]);
    for (let y of sumArr) {
      s = s - y;
      count++;
      if (s < 0) break;
    }
    answerArr.push(count - 1);
    x[0] = x[0] * 2;
  }
  return Math.max(...answerArr);
}

// 문제풀이
function solution2(s, arr) {
  let answer = 0;
  let n = arr.length;
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < n; i++) {
    let money = s - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

console.log(
  solution(28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
);
