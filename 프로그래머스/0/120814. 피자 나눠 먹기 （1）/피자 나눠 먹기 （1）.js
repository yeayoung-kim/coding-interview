function solution(n) {
    //피자한판 7조각, 피자나눠먹을사람 15명(한조각이상 먹음)
    // 필요한 피자 수 : 15명/7-> 피자 3판 => n/7
    let pizza = 7;
    let lamege = n%7;
    let result = parseInt(n/pizza);
    
    if(lamege>=1){
        result += 1;
    }
    
    return result;
}
