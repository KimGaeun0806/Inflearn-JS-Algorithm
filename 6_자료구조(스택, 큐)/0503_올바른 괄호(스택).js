// 43. 올바른 괄호(스택)

// 내 풀이
function solution(s) {
  while (true) {
    if (s === s.split('()').join('')) break;
    else s = s.split('()').join('');
  }
  return s.length > 0 ? 'NO' : 'YES';
}

// 문제풀이
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

// 스택 -> 데이터가 순서대로 쌓이며, 가장 마지막에 삽입된 자료가 가장 먼저 삭제되는 구조. Last In First Out (LIFO).
// pop()은 스택의 가장 윗 데이터를 삭제, push()는 스택의 가장 위에 데이터 삽입

console.log(solution('(()(()))(()'));
console.log(solution('(())()'));
