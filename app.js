const fortunes = [
    "大吉: 今日は素晴らしい日になります！",
    "中吉: 良いことがあるかもしれません。",
    "小吉: 小さな幸せが訪れるでしょう。",
    "凶: 今日は注意が必要です。",
    "大凶: 無理をしない方が良さそうです。"
];

document.getElementById("getFortune").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    document.getElementById("fortune").innerText = fortunes[randomIndex];
});          
