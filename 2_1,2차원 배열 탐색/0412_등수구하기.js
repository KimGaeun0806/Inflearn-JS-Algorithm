// 22. 등수구하기

// 내 풀이
function solution(arr) {
  let newArr = arr.slice();
  newArr.sort((a, b) => b - a);
  return arr.map((a) => newArr.indexOf(a) + 1);
  // slice를 이용하여 배열의 얕은 복사. let newArr = arr;처럼 복사하게 되면 복사본 수정시 원본도 수정됨.
}

// 문제풀이
function solution2(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // 배열을 1로 초기화
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
      // 배열을 돌면서 자기보다 큰 숫자가 있으면 answer에서 +1
    }
  }
  return answer;
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([92, 92, 92, 100, 76]));
