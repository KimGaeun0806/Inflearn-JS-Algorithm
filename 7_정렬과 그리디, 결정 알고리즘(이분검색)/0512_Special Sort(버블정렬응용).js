// 52. Special Sort(구글 인터뷰)(버블정렬응용)

// 내 풀이
function solution(arr) {
  let minus = [];
  let plus = [];
  arr.map((a) => (a > 0 ? plus.push(a) : minus.push(a)));
  return minus.concat(plus);
}

// 내 풀이2
function solution2(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[num] > 0 ? arr.push(...arr.splice(num, 1)) : num++;
  }
  return arr;
}

// 내 풀이3
function solution3(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

// 문제풀이
function solution4(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
