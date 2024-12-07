let correctNumber = Math.floor(Math.random() * 98) + 2;
let attempts = 7;
let min = 1;
let max = 100;

while (attempts > 0) {
    let userGuess = prompt(`猜一個數字 (${min}-${max})。\n剩餘次數：${attempts}`);
    
    // 檢查輸入是否為有效數字
    if (userGuess === null || userGuess.trim() === "" || isNaN(userGuess) || userGuess <= 1 || userGuess >= 100) {
        alert("請輸入有效的數字，範圍是 "+min+" 到 "+max+"！");
        continue;
    }
    
    userGuess = Number(userGuess);
    
    if (userGuess === correctNumber) {
        alert("恭喜你答對了！");
        document.getElementById("result").innerHTML = `<img src="correct.jpg" alt="Correct">`;
        break;
    } else if (userGuess > correctNumber) {
        alert("太大了! 範圍在"+min+"~"+userGuess);
        max = userGuess;
    } else {
        alert("太小了！範圍在"+userGuess+"~"+max);
        min = userGuess;
    }

    attempts--;

    if (attempts === 0) {
        alert(`遊戲結束！正確答案是 ${correctNumber}。`);
        document.getElementById("result").innerHTML = `<img src="wrong.jpg" alt="Wrong">`;
    }
}
