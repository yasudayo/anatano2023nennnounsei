const title = document.getElementById('title');
const uranaib = document.getElementById('uranaib');
const maintext = document.getElementById('maintext');
const subtext = document.getElementById('subtext');
const uranais = ["大吉", "大吉", "大吉", "大吉", "大吉", "大吉", "大吉", "大吉",　"大吉",　"大吉",
"末吉", "小吉", "吉", "小吉", "小吉", "中吉", "末吉", "中吉", "末吉",　"中吉","小吉","吉", 
"吉", "小吉", "末吉", "小吉", "吉", "吉", "中吉", "中吉", "吉",　"中吉",　"末吉",　"小吉", 
"吉", "末吉", "小吉", "末吉", "中吉", "小吉", "吉", "凶", "大凶", "末吉", "中吉", "吉"];
const uranai = Math.floor(Math.random () * uranais.length);

title.innerText = "あなたの2023年の運勢は・・・";
maintext.innerText = "占うボタンを押してください。";

function uranau () {
    maintext.innerText = `${uranais[uranai]}です。`;
    uranaib.style.display = 'none';
    subhyouji();
}
function subhyouji () {
    switch (uranais[uranai]) {
        case "大吉":
            subtext.innerText = "キュンです。を\nするともっと良くなる。";
            break;
        case "吉":
            subtext.innerText = "今日1日自分のことを「アーニャ」と呼ぶと運気が上がる。";
            break;
        case "中吉":
            subtext.innerText = "新時代歌うと頭が冴えるかも。";
            break;
        case "小吉":
            subtext.innerText = "カヌレを食べると良い。";
            break;
        case "末吉":
            subtext.innerText = "habit踊ると良い。";
            break;
        case "凶":
            subtext.innerText = "なかやまにんに君のネタを見ろ。";
            break;
        case "大凶":
            subtext.innerText = "吉の書き間違い。"
            break;
        default:
    }
}
