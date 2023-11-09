function solution(sizes) {
    sizes.map(size => size.sort((a,b) => b - a));
    let a = [];
    let b = [];
    for(let i = 0; i < sizes.length; i++) {
        a.push(sizes[i][0]);
        b.push(sizes[i][1]);
    }
    let a_max = Math.max(...(a.sort((a, b) => b - a)));
    let b_max = Math.max(...(b.sort((a, b) => b - a)));
    
    return a_max * b_max;
}



console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]] ))