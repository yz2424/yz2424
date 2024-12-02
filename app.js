        function checkFortune() {
            var colour = document.getElementById('colour-select').value;
            var number = parseInt(document.getElementById('number-input').value, 10);
            var result = "凶"; // デフォルトの値

            if (colour === "黒" && number === 0) {
                result = "凶";
            } else if (colour === "黒" && number === 1) {
                result = 末凶";
            } else if (colour === "黒" && number === 2) {
                result = "末小吉";
            } else if (colour === "白" && number === 0) {
                result = "末吉";
            } else if (colour === "白" && number === 1) {
                result = "半吉";
            } else if (colour === "白" && number === 2) {
                result = "吉";
            } else if (colour === "赤" && number === 0) {
                result = "小吉";
            } else if (colour === "赤" && number === 1) {
                result = "中吉";
            } else if (colour === "赤" && number === 2) {
                result = "大吉";
            }

            document.getElementById('result-output').innerText = "今日の運勢は"【" + result + "】です";
        }
