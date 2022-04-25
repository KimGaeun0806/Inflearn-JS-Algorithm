// 35. 두 배열 합치기 (Two Pointers Algorithm)

// 내 풀이
function solution(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// 내 풀이2
function solution2(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

// 문제풀이
function solution3(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0); // 포인터 두개 0으로 초기화

  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2])
      answer.push(arr1[p1++]); // arr[p1]을 푸시한 후에 p1이 증가함
    else answer.push(arr2[p2++]);
  } // 둘 중 하나가 배열을 다 돌면 (p1이 n이 되거나 p2가 m이 되면) while문이 끝남

  while (p1 < n) answer.push(arr1[p1++]); // p2는 배열을 다 돌고 p1은 덜 돌았을 때
  while (p2 < m) answer.push(arr2[p2++]); // p2가 배열을 덜 돌았을 때

  return answer;
}

// 투포인터 알고리즘 -> 1차원 배열이 있고, 이 배열에서 각자 다른 원소를 가리키고 있는 2개의 포인터를 조작해서 원하는 것을 얻는 형태
// 길이가 n인 배열에 sort를 사용했을 때 시간복잡도는 n log n
// 길이가 n인 배열과 길이가 m인 배열에 투포인터 알고리즘을 사용했을 때 시간복잡도는 n+m. 시간복잡도 개선 가능.

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
