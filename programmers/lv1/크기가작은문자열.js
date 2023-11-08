function solution(t, p) {
    var answer = 0;
    let p_num = Number(p);
    for(let i = 0; i <= t.length - p.length; i++) {
        let sub_num = Number(t.substring(i, p.length+i));
        p_num >= sub_num ? answer++ : '';
    }
    return answer;
}

console.log(solution("500220839878", "7"));