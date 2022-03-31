// 10. 문자 찾기

// 내 풀이
function solution(s, t) {
  return s.split('').filter((e) => e === t).length;
}

// 문제풀이
function solution2(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

// 문제풀이2
function solution3(s, t) {
  let answer = s.split(t).length;
  return answer - 1;
  // s.split(t) -> t가 구분자가 되어 문자열이 분리됨. t가 맨 끝에 있는 경우는 분리했을 때 맨 끝에 빈 문자열이 생성됨.
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
