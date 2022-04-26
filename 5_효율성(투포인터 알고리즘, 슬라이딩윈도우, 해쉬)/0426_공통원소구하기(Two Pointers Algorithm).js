// 36. 공통원소 구하기(Two Pointers Algorithm)

// 내 풀이
function solution(arr1, arr2) {
  return [...arr1, ...arr2]
    .filter((e, i, s) => s.indexOf(e) !== i)
    .sort((a, b) => a - b);
}

// 내 풀이2
function solution2(arr1, arr2) {
  return arr1
    .map((a) => (arr2.indexOf(a) !== -1 ? a : ''))
    .filter((e) => e !== '')
    .sort((a, b) => a - b);
}

// 문제풀이
function solution3(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } // p1과 p2가 같으면 그 숫자를 푸시한 후 p1과 p2 둘 다 증가시킴
    else if (arr1[p1] < arr2[p2]) p1++; // p1가 p2보다 작으면 p1을 증가시킴
    else p2++; // p1이 p2보다 크면 p2를 증가시킴
  } // arr1이나 arr2 둘 중 하나가 다 탐색되면 while문 끝남

  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
