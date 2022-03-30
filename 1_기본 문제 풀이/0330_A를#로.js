// 9. A를 #로

// 내 풀이
function solution(s) {
  return s.replace(/A/g, '#');
  // 전역 탐색인 g 플래그를 넣지 않으면 가장 앞에 나오는 A만 치환됨
  // 패턴은 문자열이나 정규식이 될 수 있는데, 문자열일 경우에 첫 번째 문자열만 치환됨 -> 정규식 사용
}

// 내 풀이2
function solution2(s) {
  return s
    .split('')
    .map((a) => (a === 'A' ? '#' : a))
    .join('');
}

// 문제풀이
function solution3(s) {
  let answer = '';
  for (let x of s) {
    if (x === 'A') answer += '#';
    else answer += x;
  }
  return answer;
}

// 문제풀이2
function solution4(s) {
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
  // s = s.replace(/A/g, '#')를 하면, string은 주소 참조가 아니라 값 복사이기 때문에 s가 바뀐다고 answer가 바뀌지는 않음.
}

console.log(solution('BANANA'));
