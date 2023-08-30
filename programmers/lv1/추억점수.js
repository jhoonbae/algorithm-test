function solution (names, yearing, photo) {
    var answer = []

    for(let i = 0; i < photo.length; i ++) {
        let score = 0
        photo[i].forEach(name => {
            index = names.indexOf(name)
            if(index >= 0) {
                score += yearing[index]
            }
        });
        answer.push(score)
    }
    
    return answer
}

console.log(solution(["may", "kein", "kain", "radi"], [5, 10, 1, 3], [["may", "kein", "kain", "radi"], ["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]))