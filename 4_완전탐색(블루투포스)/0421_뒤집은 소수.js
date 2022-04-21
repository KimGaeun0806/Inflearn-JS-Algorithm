// 31. 뒤집은 소수

// 내 풀이
function solution(arr) {
  return arr
    .map((a) => {
      let rev = (a + '').split('').reverse().join('') * 1;
      for (let i = 2; i <= Math.sqrt(rev); i++) {
        if (rev % i === 0) return 1;
      }
      return rev;
    })
    .filter((e) => e !== 1);
}

// 문제풀이
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
} // 소수인지 확인하는 함수

function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    } // 숫자 x 뒤집기

    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

// 문제풀이2
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solution3(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split('').reverse().join(''));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

console.log(solution([32, 55, 62, 20, 250, 370, 200, 30, 100]));
