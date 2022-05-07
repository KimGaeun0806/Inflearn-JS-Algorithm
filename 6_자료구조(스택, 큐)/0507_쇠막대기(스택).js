// 47. 쇠막대기(스택).js

// 내 풀이
function solution(s) {
  let open = 0;
  let answer = 0;
  s.split('').forEach((a, i, arr) => {
    if (a === '(') open++;
    else {
      open--;
      arr[i - 1] === '(' ? (answer += open) : answer++;
    }
  });
  return answer;
}

// 문제풀이
function solution2(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(s[i]); // 막대 시작
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length; // 레이저
      else answer += 1; // 막대 끝
    }
  }
  return answer;
}

console.log(solution('()(((()())(())()))(())'));
console.log(solution('(((()(()()))(())()))(()())'));
