// 62. 재귀함수와 스택프레임

// 내 풀이
function solution(n) {
  if (n <= 0) return;
  console.log(solution(n - 1));
  return n;
}

// 문제풀이
function solution(n) {
  function DFS(L) {
    if (L == 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  }
  DFS(n);
}

console.log(solution(3));
