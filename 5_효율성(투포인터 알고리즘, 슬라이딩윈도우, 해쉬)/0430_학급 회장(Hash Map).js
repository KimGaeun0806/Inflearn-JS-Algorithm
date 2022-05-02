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

// 해시란 key를 고정된 크기의 value로 저장하는 것. 원래 데이터 값을 key, 매핑 후 데이터 값을 hash value라고 함.
// 해시 맵 (해시 테이블) -> key(키)와 value(값)으로 구성된 객체를 저장하는 구조를 가지는 자료구조

// Map.prototype.has() -> 지정된 키가 있는 요소가 있는지 여부를 나타내는 boolean 반환
// Map.prototype.set() -> 지정된 키와 값이 있는 요소를 Map 객체에 추가하거나 업데이트
// Map.prototype.get() -> 지정된 요소를 반환함

console.log(solution('BACBACCACCBDEDE'));
