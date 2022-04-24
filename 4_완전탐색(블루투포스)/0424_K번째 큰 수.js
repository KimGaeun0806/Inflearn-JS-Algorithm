// 34. K번째 큰 수

// 내 풀이
function solution(n, k, arr) {
  let sumArr = [];
  arr.map((a, i) => {
    for (let j = 1; j < arr.length - i; j++) {
      for (let y = 1; y < arr.length - i - j; y++) {
        sumArr.push(a + arr[i + j] + arr[i + j + y]);
      }
    }
  });
  return sumArr.filter((a, i) => sumArr.indexOf(a) === i).sort((a, b) => b - a)[
    k - 1
  ];
}

// 문제풀이
function solution2(n, k, arr) {
  let answer;
  let tmp = new Set(); // Set객체는 중복을 없앰. Set 객체를 tmp에 할당.
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        // 여기서 k는 이 for문 안에서만 유효하기 때문에 사용해도 됨
        tmp.add(arr[i] + arr[j] + arr[k]); // add 메서드를 사용해서 Set에 자료 추가
      }
    }
  } // for문에서 i < n - 2, j < n - 1로 하는 것이 맞긴 하지만 i < n로 한다고 문제가 생기지는 않음
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
