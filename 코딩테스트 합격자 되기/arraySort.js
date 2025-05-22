// 정수 배열을 정렬해서 반환하는 solution()함수를 완성하세요

// 조건 = 정수배열의 길이는 2이상 10^5 이하
// 정수 배열의 각 테이터 값은 -10,000이상 100,000 이하입니다.
// O(N^2) 정렬 알고리즘 -> 반복문 사용 2번해서 정렬하는 것

let arr1 = [1, -5, 2,4,3];
let arr2 = [2,1,1,3,2,5,4];
let arr3 = [6,1,7];

console.log(solution(arr1));
console.log(solution(arr2));
console.log(solution(arr3));

function solution(arr){
    arr.sort((a,b)=> b-a);
    return arr;

}


// O(N^2) 정렬 알고리즘

function bubbleSort(arr){
    const n = arr.length;
    for (let i =0; i<n; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j+1]<arr[j]){
                const tmp = arr[j + 1];
                arr[j + 1]= arr[j];
                arr[j]= tmp;
            }
        }
    }
    return arr;
}


