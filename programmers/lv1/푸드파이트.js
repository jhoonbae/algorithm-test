function solution(food) {
    let p1 = [];
    let p2 = [];
    for(let i = 1; i < food.length; i++){
        while(food[i] >= 2){
            console.log("a", food[i], i)
            p1.push(i);
            p2.push(i);
            food[i]-=2;
        }
    }
    return [...p1,0, ...p2.reverse()].join("")
}

console.log(solution([1,3,4,6]));