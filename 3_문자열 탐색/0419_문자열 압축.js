// 29. 문자열 압축

// 내 풀이
function solution(s) {
  let newArr = s.split('').filter((a, i) => s.indexOf(a) === i);
  return newArr
    .map((a) => {
      let x = s.lastIndexOf(a) - s.indexOf(a) + 1;
      return a + (x === 1 ? '' : x + '');
    })
    .join('');
}

// 내 풀이2
function solution2(s) {
  let newArr = s.split('').filter((a, i) => s.indexOf(a) === i);
  return newArr
    .map((a) => {
      let regex = new RegExp(`${a}`, 'g');
      let len = s.match(regex).length;
      return a + (len === 1 ? '' : len + '');
    })
    .join('');
}

// 문제풀이
function solution3(s) {
  let answer = '';
  let cnt = 1;
  s = s + ' '; // s의 마지막 요소의 비교대상이 있어야 하기 때문에 공백 추가

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1; // cnt 초기화
    }
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE'));
