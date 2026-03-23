const now = new Date();

// 2. 현재 시간에 9시간(9시간 * 60분 * 60초 * 1000밀리초)을 더해 한국 시간(KST)으로 맞춤
const kst = new Date(now.getTime() + (9 * 60 * 60 * 1000));

// 3. 연, 월, 일 추출 (KST 기준으로 더해놨으므로 UTC 메서드를 사용해 순수 값을 빼옵니다)
const year = kst.getUTCFullYear();

// 자바스크립트에서 월(Month)은 0부터 시작하므로 반드시 1을 더해야 합니다.
// padStart(2, '0')은 "두 자리가 안 되면 앞에 0을 붙여라"라는 뜻입니다.
const month = String(kst.getUTCMonth() + 1).padStart(2, '0');
const day = String(kst.getUTCDate()).padStart(2, '0');

// 4. 결과 출력
console.log(`${year}-${month}-${day}`);