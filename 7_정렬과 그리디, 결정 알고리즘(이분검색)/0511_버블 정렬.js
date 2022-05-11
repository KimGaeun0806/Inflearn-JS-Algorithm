// 51. 버블 정렬

// 내 풀이
function solution(arr) {
  let na = [...arr];
  for (let j = 1; j < arr.length; j++) {
    arr.map((_, i) => {
      if (na[i] < na[i - 1]) [na[i], na[i - 1]] = [na[i - 1], na[i]];
    });
  }
  return na;
}

// 문제풀이
function solution2(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

// 버블 정렬 -> 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘. 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 교환.
//              1회전을 수행하고 나면 가장 큰 자료가 맨 뒤로 이동하므로, 2회전에서 맨 끝 자료는 정렬에서 제외됨. 이렇게 정렬을 1회전 수행할 때마다 정렬에서 제외되는 데이터가 늘어남.
//              성능이 좋지 않음 (상대적으로 느리고 효율성 떨어짐)

console.log(solution([13, 5, 11, 7, 23, 15]));
