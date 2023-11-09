function solution(k, score) {
    let answer = [];
    let k_arr = [];
    let min_arr = [];
    for(let i = 0; i < k; i++) {
        k_arr.push(score[i]);
        min_arr.push(Math.min(...k_arr));
    }
    score.splice(0, k);
    while(score.length > 0) {
        let min = Math.min(...k_arr);
        if(score[0] > min) {
            let idx = k_arr.indexOf(min);
            k_arr[idx] = score[0];
            console.log('object :>> ', Math.min(...k_arr));
            min_arr.push(Math.min(...k_arr));
        }
        else min_arr.push(Math.min(...min_arr));
        score.shift();
    }
    return min_arr;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]))