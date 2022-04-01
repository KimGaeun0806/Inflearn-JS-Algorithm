// 11. 대문자 찾기

// 내 풀이
function solution(s) {
  return s.split('').filter((e) => /[A-Z]/.test(e)).length;
  // test() -> 문자열에 일치하는 부분이 있는지 확인. true 혹은 false 반환.
}

// 내 풀이2
function solution2(s) {
  return s.match(/[A-Z]/g).length;
  // match() -> 문자열이 정규식과 매치되는 부분을 검색. 문자열이 정규식과 일치하면, 일치하는 전체 문자열을 포함하는 Array를 반환.
  // match() 메서드를 사용할 때 정규식에 g 플래그가 포함되어 있지 않다면 exec()와 같은 결과 반환 (일치하는 것 중 제일 첫 번째 것만 반환)
}

// 내 풀이3
function solution3(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

// 문제풀이
function solution4(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }
  return answer;
}

// 문제풀이2
function solution5(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }
  return answer;
  // charCodeAt() 메서드는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환함
  // 대문자 -> 65 ~ 90
  // 소문자 -> 97 ~ 122
}

console.log(solution('KoreaTimeGood'));
