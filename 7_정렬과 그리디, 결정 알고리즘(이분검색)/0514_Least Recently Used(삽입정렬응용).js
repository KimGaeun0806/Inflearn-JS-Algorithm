// Least Recently Used(카카오 캐시 문제 변형)(삽입정렬응용)

// 내 풀이
function solution(s, arr) {
  let n = [];
  arr.forEach((a) => {
    if (n.indexOf(a) !== -1) n.splice(n.indexOf(a), 1);
    n.unshift(a);
    if (n.length > s) n.pop();
  });
  return n;
}

// 문제풀이
function solution2(s, arr) {
  let answer = Array.from({ length: s }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < s; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      for (let i = s - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });
  return answer;
}

// 문제풀이2
function solution3(s, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < s; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > s) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });
  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
