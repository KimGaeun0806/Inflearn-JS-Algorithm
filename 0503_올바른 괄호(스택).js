// 43. 올바른 괄호(스택)

// 내 풀이
function solution(s) {
  while (true) {
    if (s === s.split('()').join('')) break;
    else s = s.split('()').join('');
  }
  return s.length > 0 ? 'NO' : 'YES';
}

// 내 풀이2
function solution2(s) {
  let answer = 'YES';
  stack = [];
  for (let x of s) {
    if (x === '(') stack.push(x);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }
  if (stack.length > 0) return 'NO';
  return answer;
}

console.log(solution('(()(()))(()'));
