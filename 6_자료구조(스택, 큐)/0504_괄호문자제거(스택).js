// 44. 괄호문자제거(스택)

// 내 풀이
function solution(s) {
  let reg = /\(\w*\)/g;
  while (reg.test(s)) s = s.replace(reg, '');
  return s;

  // x* -> 선행 항목 x와 0번 이상 일치
  // \w -> 밑줄을 포함하여 기본 라틴 알파벳의 모든 영숫자 문자와 일치. [A-Za-z0-9_]와 같음.
}

// 문제풀이
function solution2(s) {
  let answer;
  stack = [];

  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(');
      // while (stack.pop() !== '(') stack.pop();과 같이 동작함
    } else stack.push(x);
  }

  answer = stack.join('');
  return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
