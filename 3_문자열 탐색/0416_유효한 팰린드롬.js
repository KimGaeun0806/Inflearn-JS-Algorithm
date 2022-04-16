// 26. 유효한 팰린드롬

// 내 풀이
function solution(s) {
  let newS = s
    .toUpperCase()
    .split('')
    .filter((e) => /[A-Z]/.test(e));
  return newS.join('') === newS.reverse().join('') ? 'YES' : 'NO';
  // test() 메서드는 주어진 문자열이 정규 표현식을 만족하는지 판별하고, 그 여부를 true false로 반환
}

// 내 풀이2
function solution2(s) {
  const newS = s.toUpperCase().replace(/[^A-Z]/g, '');
  return newS === newS.split('').reverse().join('') ? 'YES' : 'NO';
  // replace() 메서드는 어떤 패턴에 일치하는 일부 도는 모든 부분이 교체된 새로운 문자열을 반환하는데, 패턴이 문자열인 경우에는 첫 번째 문자열만 치환됨
}

// 문제풀이
function solution3(s) {
  let answer = 'YES';
  s = s.toLowerCase().replace(/[^a-z]/g, ''); // 글로벌 영역에서 a-z가 아닌 것들을 찾아서 빈 문자열로 변경
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
