function solution(n) {
    let result = 0;
    for(let i = 1; i<=n; i++){
        if(i%2==0){
            //result = result + i;
            result += i;
        }
    }
    
    return result;
}