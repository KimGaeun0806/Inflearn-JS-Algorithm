// 50. 선택정렬

// 내 풀이
function solution(s) {
  return s.sort((a, b) => a - b);
}

// 내 풀이2
function solution2(s) {
  let box = [];
  while (s.length > 0) box.push(...s.splice(s.indexOf(Math.min(...s))));
  return box;
}

// 문제풀이
function solution3(s) {
  let answer = s; // 배열의 얕은 복사
  for (let i = 0; i < s.length; i++) {
    let idx = i;
    for (let j = i + 1; j < s.length; j++) {
      if (s[j] < s[idx]) idx = j;
    }
    [s[i], s[idx]] = [s[idx], s[i]];
  }
  return answer;
}

// 선택 정렬 -> 해당 순서에 원소를 넣을 위치는 이미 정해져 있고, 어떤 원소를 넣을지 선택하는 알고리즘
//              1. 첫 번째 자료를 두 번째 자료부터 마지막 자료까지 차례대로 비교하여 가장 작은 값을 찾아 첫 번째에 놓음
//              2. 두 번째 자료를 세 번째 자료부터 마지막 자료까지 차례대로 비교하여 그 중 가장 작은 값을 찾아 두 번째 위치에 놓음
//              3. 위의 과정을 반복

console.log(solution3([13, 5, 11, 7, 23, 15]));
