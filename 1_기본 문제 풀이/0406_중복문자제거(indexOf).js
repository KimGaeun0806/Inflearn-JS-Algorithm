// 16. 중복문자제거(indexOf)

// 내 풀이
function solution(s) {
  return s
    .split('')
    .filter((e, i) => s.indexOf(e) === i)
    .join('');

  // Array.prototype.indexOf() -> indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스 반환
  // String.prototype.indexOf() -> indexOf() 메서드는 호출한 String 객체에서 주어진 값과 일치하는 첫 번째 인덱스 반환
}

// 내 풀이2
function solution2(s) {
  return [...new Set(s)].join('');

  // Set 객체는 자료형에 관계없이 원시값과 객체 참조 모두 '유일한 값'을 저장할 수 있음. 즉 Set 안의 값은 유일해야 하기에 값이 중복되지 x
  // -> Set 객체를 이용하여 중복 없는 데이터를 표현할 수 있음
  // new Set([iterable]); -> iterable(반복 가능한 객체)가 전달된 경우, 그 요소는 모두 새로운 Set에 추가됨
  // 반복 가능한 객체에는 Array, Map, Set, String, TypedArray, arguments 객체 등을 포함함
}

// 문제풀이
function solution3(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;

  // indexOf()는 첫 번째로 발견되는 인덱스를 리턴 (일치하는 값이 없으면 -1 리턴)
  // s.indexOf('k', n)과 같이 두 번째 인수를 추가하면 n번 인덱스부터 찾기 시작함

  // 특정 요소 개수 세는 법
  // let answer = 0;
  // let pos = s.indexOf('k');
  // while (pos !== -1) {
  //   answer++;
  //   pos = s.indexOf('k', pos + 1);
  // }
  // return answer;
}

console.log(solution('ksekkset'));
