// 21. 점수계산

// 내 풀이
function solution(arr) {
  let num = 0;
  return arr
    .map((a) => {
      if (a === 0) {
        num = 0;
        return 0;
      } else {
        num++;
        return num;
      }
    })
    .reduce((p, c) => p + c);
}

// 내 풀이2
function solution2(arr) {
  let newArr = [0];
  arr.map((a, i) => {
    a === 0 ? newArr.push(0) : newArr.push(newArr[i] + 1);
  });
  return newArr.reduce((p, c) => p + c);
}

// 문제풀이
function solution3(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }
  return answer;
}

console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
