// 48. 공주구하기(큐)

// 내 풀이
function solution(n, k) {
  let arr = Array.from({ length: n }, (_, i) => i + 1);
  let a = k - 3;
  while (arr.length > 1) {
    a = (a + 2) % arr.length;
    arr.splice(a, 1);
  }
  return arr;
}

// 문제풀이
function solution2(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift()); // 앞의 k-1개를 빼서 뒤로 넣기
    queue.shift(); // 맨앞의 1개 삭제
    if (queue.length === 1) answer = queue.shift();
  } // queue.length가 0이면 false가 되어 while문 종료
  return answer;
}

// 큐 -> 먼저 집어넣은 데이터가 먼저 나오는 FIFO(First In First Out)구조

console.log(solution(8, 3));
