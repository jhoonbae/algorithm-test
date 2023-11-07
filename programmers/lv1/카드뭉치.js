const cards1 = ["i", "water", "drink"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));

function solution(cards1, cards2, goal) {
    let answer = "Yes";
    for(words of goal) {
        if(words === cards1[0]) cards1.shift()
        else if(words === cards2[0]) cards2.shift()
        else answer = "No"
    }
    return answer;
}