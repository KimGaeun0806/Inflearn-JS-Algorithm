// 30. 자릿수의 합

// 내 풀이
function solution(arr) {
  let newArr = arr.map((a) =>
    (a + '').split('').reduce((p, c) => p * 1 + c * 1)
  );
  let maxArr = newArr.map((a, i) => (Math.max(...newArr) === a ? arr[i] : 0));
  return Math.max(...maxArr);
}

// 내 풀이2
function solution2(arr) {
  let newArr = arr.map((a) => {
    let sum = 0;
    for (let x of a + '') {
      sum += Number(x);
    }
    return sum;
  });
  let maxArr = newArr.map((a, i) => (Math.max(...newArr) === a ? arr[i] : 0));
  return Math.max(...maxArr);
}

// 내 풀이3
function solution3(arr) {
  let newArr = arr.map((a) => {
    let sum = 0;
    do {
      sum += a % 10;
      a = Math.floor(a / 10);
    } while (a > 0);
    return sum;
  });
  let maxArr = newArr.map((a, i) => (Math.max(...newArr) === a ? arr[i] : 0));
  return Math.max(...maxArr);
}

// 문제풀이
function solution4(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = 0,
      tmp = x;

    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    } // tmp가 0이 되면 false가 돼서 while문 중단

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

// 문제풀이2
function solution5(arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]));
