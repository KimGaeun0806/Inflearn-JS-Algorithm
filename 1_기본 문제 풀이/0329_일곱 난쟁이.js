// 8. 일곱 난쟁이

// 내 풀이
function solution(arr) {
  let answer;
  let sum = arr.reduce((a, c) => a + c);
  arr.map((a, i) => {
    for (let j = 1; j < arr.length - i; j++) {
      if (sum - arr[i + j] - a === 100) {
        answer = arr.filter((e) => e !== arr[i + j] && e !== a);
      }
    }
  });
  return answer;
}

// 문제풀이
function solution2(arr) {
  let answer = arr; // 얕은 복사. 같은 주소값을 가짐. 하나를 변경하면 두 개 다 변경됨.
  let sum = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
        // i를 먼저 지운 후 j를 지우면, i를 지웠을 때 인덱스가 하나씩 앞으로 당겨지면서 j가 아닌 다른 것이 지워지게 됨
        // 뒤에 있는 인덱스부터 지워야 함
      }
    }
  }
  return answer;
}

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
