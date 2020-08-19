var arr1 = new Array();
var arr2 = Array(1,2,3,4,5);
function enter(){
    for(var i = 1; i <= 5; i++) {
        arr1.push(prompt("숫자를 입력하세요","하나씩 입력하세요"));
    }
    alert("당신이 정렬한 숫자 : "+arr1);
    start();
}
function start(){
    document.body.innerHTML = "<font size=8><br><br><br>숫자 섞는 중</font>"
    ID=window.setTimeout("num();", 3000);
}
function num(){
    arr2.sort(function(){
        return Math.random() - Math.random();
    });
    alert("랩스터가 정렬한 숫자 : "+arr2);
    compare();
}
function compare(){
    count=0;
    for(i=1; i<=5; i++){
        if(arr1[i]==arr2[i]){
            count++;
        }
    }
    if(count==5){
        alert("다 맞추셨네요! 선물을 증정합니다.");
        gift();
    } else{
        alert("아쉽지만 다음 기회에...");
        end()
    }
}
function end(){
    var txt = "메인메뉴로";
    document.body.innerHTML = "<font size=8><br><br><br>다음에 다시 도전하세요!</font><br><br>" + "<font size=6>"+txt.link("minigame.html")+"</font>";
}
function gift(){
    var txt = "선물 받으러 가기";
    document.body.innerHTML = "<font size=6><br><br><br><br><br>"+txt.link("gift.html")+"</font>";
}