function solution(num_list) {
    let a = [];
    for(let i=num_list.length-1; i>=0; i--){
         a.push(num_list[i]);
    }
    return a;
}