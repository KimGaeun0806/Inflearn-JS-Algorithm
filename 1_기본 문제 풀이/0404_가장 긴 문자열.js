// 14. 가장 긴 문자열

// 내 풀이
function solution(arr) {
  let answer = arr[0];
  arr.map((a) => (answer = a.length > answer.length ? a : answer));
  return answer;
}

// 내 풀이2
function solution2(arr) {
  let newArr = arr.map((a) => a.length);
  return arr[newArr.indexOf(Math.max(...newArr))];
}

// 문제풀이
function solution3(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

console.log(solution(['teacher', 'time', 'student', 'beautiful', 'good']));
