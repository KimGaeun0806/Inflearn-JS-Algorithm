// 28. 가장 짧은 문자거리

// 내 풀이
function solution(s, t) {
  let arr = [];
  let spl = s.split('');
  spl.map((a, i) => {
    if (a === t) arr.push(i);
  });
  return spl.map((_, i) => Math.min(...arr.map((a) => Math.abs(i - a))));
}

// 문제풀이
function solution2(s, t) {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  } // 왼쪽 -> 오른쪽 방향으로 t로부터 떨어진 거리

  p = 1000;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  } // 오른쪽 -> 왼쪽

  return answer;
}

console.log(solution('teachermode', 'e'));
