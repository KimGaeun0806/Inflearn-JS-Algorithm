// 5. 최솟값 구하기

// 내 풀이
function solution(arr) {
  return Math.min(...arr);
}

// 내 풀이2
function solution2(arr) {
  return arr.sort((a, b) => a - b)[0];
}

// 내 풀이3
function solution3(arr) {
  let min = arr[0];
  if (arr[0] > arr[1]) min = arr[1];
  if (min > arr[2]) min = arr[2];
  if (min > arr[3]) min = arr[3];
  if (min > arr[4]) min = arr[4];
  if (min > arr[5]) min = arr[5];
  if (min > arr[6]) min = arr[6];
  if (min > arr[7]) min = arr[7];
  return min;
}

// 내 풀이4
function solution4(arr) {
  let min = arr[0];
  for (let i = arr.length; i--; ) {
    if (arr[i] < min) min = arr[i];
  }
  return min;
}

// 문제풀이
function solution5(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER; // min에 Number.MAX_SAFE_INTEGER을 넣으면 안정적으로 가장 큰 정수값이 할당됨. 아주 큰 수로 초기화할 때 사용.
  // min = arr[0]을 해도 상관 x

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    // min을 가장 큰 값으로 초기화해놨기 때문에 i = 0일 때 무조건 if문이 true가 됨
  }
  answer = min;
  return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));
