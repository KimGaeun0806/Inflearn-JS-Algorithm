// 55. 장난꾸러기 현수

// 내 풀이
function solution(arr) {
  let answer = [];
  let sortArr = [...arr].sort((a, b) => a - b);
  arr.forEach((a, i) => {
    if (a !== sortArr[i]) answer.push(i + 1);
  });
  return answer;
  // sort()는 복사본이 만들어지는 게 아니라 원 배열이 정렬됨
}

// 문제풀이
function solution2(arr) {
  let answer = [];
  let sortArr = arr.slice();
  sortArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== sortArr[i]) answer.push(i + 1);
  }
  return answer;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
