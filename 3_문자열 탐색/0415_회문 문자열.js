// 25. 회문 문자열

// 내 풀이
function solution(s) {
  let newS = s.toUpperCase();
  let reverseS = newS.split('').reverse().join('');
  return newS.substr(0, s.length / 2) === reverseS.substr(0, s.length / 2)
    ? 'YES'
    : 'NO';
  // a = [1, 2, 3]; b = [1, 2, 3];일 때 a === b는 false가 나옴. 배열의 경우 가리키는 주소값을 기준으로 일치여부를 판단하기 때문에 배열 그대로를 비교하면 x.
  // reverse()는 배열 메서드이기 때문에 문자열에 적용할 수 x
  // 원래 문자열과 뒤집은 문자열을 자르지 않고 그대로 비교해도 됨..
}

// 내 풀이2
function solution2(s) {
  let newArr = s.toUpperCase().split('');
  let num = 0;
  newArr.map((a, i) => {
    if (a === newArr[s.length - i - 1]) num++;
  });
  return num === s.length ? 'YES' : 'NO';
}

// 문제풀이
function solution3(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return 'NO';
  }
  return answer;
}

// 문제풀이2
function solution4(s) {
  let answer = 'YES';
  s = s.toLowerCase();
  if (s.split('').reverse().join('') !== s) return 'NO';
  return answer;
}

console.log(solution('gooG'));
console.log(solution('goob'));
console.log(solution('goooG'));
