// 15. 가운데 문자 출력 (substring, substr)

// 내 풀이
function solution(s) {
  let leng = s.length / 2;
  return (leng * 2) % 2 === 0 ? s[leng - 1] + s[leng] : s[Math.floor(leng)];
}

// 내 풀이2
function solution2(s) {
  let floor = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[floor - 1] + s[floor] : s[floor];
}

// 문제풀이
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  // if (s.length % 2 === 1) answer = s.substr(mid, 1);
  else answer = s.substring(mid - 1, mid + 1);
  // else answer = s.substr(mid - 1, 2);
  return answer;

  // substring() 메서드는 string 객체의 시작 인덱스로부터 종료 인덱스 전까지 문자열의 부분 문자열 반환
  // str.substring(indesStart[, indexEnd]) -> indexStart는 반환문자열의 시작 인덱스, indexEnd(옵션)는 반환문자열의 마지막 인덱스(포함 x)

  // substr() 메서드는 문자열의 특정 위치에서 시작하여 특정 문자 수만큼의 문자들 반환
  // str.substr(start[, length]) -> start는 추출하고자 하는 문자들의 시작위치, length(옵션)은 추출할 문자들의 총 숫자
}

console.log(solution('study'));
console.log(solution('good'));
