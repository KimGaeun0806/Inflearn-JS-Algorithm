// 17. 중복단어제거

// 내 풀이
function solution(arr) {
  return arr.filter((a, i) => arr.indexOf(a) === i);
}

// 내 풀이2
function solution2(arr) {
  return [...new Set(arr)];
}

// 문제풀이
function solution3(arr) {
  let answer;
  answer = arr.filter(function (v, i) {
    if (arr.indexOf(v) === i) return true;
    // return s.indexOf(v) === i;로 쓸 수 있음
    // filter는 콜백함수가 참을 리턴한 요소만 모아서 배열을 만들어 반환함
  });
  return answer;
}

console.log(solution(['good', 'time', 'good', 'time', 'student']));
