// 49. 교육과정 설계(큐)

// 내 풀이
function solution(a, b) {
  let newArr = a
    .split('')
    .map((a) => b.indexOf(a))
    .filter((e) => e >= 0);
  if (newArr.length !== a.length) return 'NO';
  return newArr.join('') === newArr.sort((a, b) => a - b).join('')
    ? 'YES'
    : 'NO';
}

// 내 풀이2
function solution2(a, b) {
  return b
    .split('')
    .filter((e) => a.includes(e))
    .join('') === a
    ? 'YES'
    : 'NO';
}

// 문제풀이
function solution3(a, b) {
  let answer = 'YES';
  let queue = a.split('');
  for (let x of b) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO'; // 순서가 맞지 않을 때
    }
  }
  if (queue.length > 0) return 'NO'; // 필수과목 이수 안했을 때
  return answer;
}

console.log(solution2('CBA', 'CBDAGE'));
