// 46. 후위식(postfix)연산(스택)

// 내 풀이
function solution(s) {
  let copy = s.split('');
  s.split('').forEach((a) => {
    if (/\*|\+|-|\//g.test(a)) {
      let ix = copy.indexOf(a);
      let func = new Function('return ' + (copy[ix - 2] + a + copy[ix - 1]))();
      copy.splice(ix - 2, 3, func);
    }
  });
  return copy.join('') * 1;
  // eval()은 문자로 표현된 js 코드를 실행하는 함수이지만, 보안상의 이유로 사용을 권장하지 않고 있음
  // 따라서 eval(`${arr[i - 2] * 1} ${a} ${arr[i - 1] * 1}`); 대신 new Function('return ' + (copy[ix - 2] + a + copy[ix - 1]))() 와 같이 사용할 수 있음
}

// 문제풀이
function solution2(s) {
  let answer;
  stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x)); // 숫자일 때
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    } // 연산자일 때
  }
  answer = stack[0];
  return answer;
}

console.log(solution('352+*9-'));
