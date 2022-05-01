// 41. 아나그램(Hash Map)

// 내 풀이
function solution(s1, s2) {
  let [a, b] = [s1.split('').sort().join(''), s2.split('').sort().join('')];
  return a === b ? 'YES' : 'NO';
  // s1.split('').sort()까지로만 해서 비교하면 배열끼리의 비교가 돼서 항상 NO가 나오기 때문에 join('')으로 문자열 비교
}

// 문제풀이
function solution2(s1, s2) {
  let answer = 'YES';
  let sH = new Map();

  for (let x of s1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of s2) {
    if (!sH.has(x) || sH.get(x) === 0) return 'NO';
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
