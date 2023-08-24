

function solution(players, callings) {
    const playerMap = {};
  
    // calling 원소들의 idx를 미리 구해서 저장
    for (let i = 0; i < players.length; i++) {
        playerMap[players[i]] = i;
    }

    for(let i =0; i < callings.length; i++) {
        const index = playerMap[callings[i]] - 1 // 바꿀인덱스 찾기
        const temp = players[index] // 템프에 뒤로 밀릴 값 저장
        
        // 앞 뒤로 값 바꾸기
        players[index] = callings[i] 
        players[index+1] = temp 
        playerMap[callings[i]] = index
        playerMap[temp] = index + 1
    }

    return players;
}

console.log(solution(["mumu", "soe", "poe", "kai", "mine"], ["kai", "kai", "mine", "mine"]))