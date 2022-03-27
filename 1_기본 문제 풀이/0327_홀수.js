// 6. 홀수

// 내 풀이
function solution(arr) {
  let newArr = arr.filter((e) => e % 2 === 1);
  let sum = newArr.reduce((p, c) => p + c);
  return [sum, Math.min(...newArr)];
}

// 문제풀이
function solution2(arr) {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
