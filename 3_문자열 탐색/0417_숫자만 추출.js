// 27. 숫자만 추출

// 내 풀이
function solution(s) {
  return (
    s
      .split('')
      .filter((e) => /[0-9]/.test(e))
      .join('') * 1
  );
}

// 문제풀이
function solution2(s) {
  let answer = '';
  for (let x of s) {
    if (!isNaN(x)) answer += x; // x가 숫자이면 answer에 누적
  }
  return parseInt(answer);
  // isNaN() 메서드는 주어진 값이 NaN인지 판별함. 주어진 값의 유형이 Number이고 값이 NaN이면 true, 아니면 false.
}

// 문제풀이2
function solution3(s) {
  let answer = 0;
  for (let x of s) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

console.log(solution('g0en2T0s8eSoft'));
