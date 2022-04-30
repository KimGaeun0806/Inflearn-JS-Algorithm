// 40. 학급 회장(Hash Map)

// 내 풀이
function solution(arr) {
  let n = { A: 0, B: 0, C: 0, D: 0, E: 0 };
  for (let x of arr) n[x]++;
  return Object.keys(n).find((k) => n[k] === Math.max(...Object.values(n)));
}

// 문제풀이
function solutoin2(arr) {
  let answer;
  let sH = new Map();
  for (let x of arr) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (let [key, val] of sH) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }
  return answer;
}

console.log(solution('BACBACCACCBDEDE'));
