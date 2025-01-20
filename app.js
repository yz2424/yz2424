const fortunes = [
            "大吉: 今日は最高に楽しい1日になるよ。",
            "吉:うれしいことがあるよ。",
            "中吉: 良いことが起こるかも。",
            "小吉: 少しの運があるかもね。",
            "凶: 失敗するかもだから注意。",
            "大凶: 今日はツイてない日だから気を付けてね。"
        ];

document.getElementById("getFortune").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("fortune").innerText = fortunes[randomIndex];
});          
