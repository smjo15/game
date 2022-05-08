let computerNum=0;
let restArea=document.getElementById("result-area")
let chanceArea=document.getElementById("chance area")
let userNum=document.getElementById("user-input")
let playButton=document.getElementById("play-button")
let chance=5
let dataArea=[]
let gameOver=false;
let resetButton=document.getElementById("reset-button")
//1부터 100까지 랜덤숫자 뽑기
playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)

function randomPick(){
computerNum=Math.floor(Math.random()*100)+1;
console.log("정답:",computerNum)
}

function play(){
    //1.찬스값,2.입력값    
    userValue=userNum.value;//userNum안에 들어간값은 value의 값을 찾아낸다 

    if(userValue<1||userValue>100){//1과 100사이의값  ||:or    &&:and
        restArea.textContent="범위를 확인해주세요"
        return
    }   

    if(dataArea.includes(userValue)){
        restArea.textContent="이미 입력된값입니다"
        return;
    }
    chance--
    chanceArea.textContent=`남은 찬스:${chance}번` 

    if(computerNum<userValue){
        restArea.textContent="down"
    }
    else if(computerNum>userValue){
        restArea.textContent="up"
    }
    else{
        restArea.textContent="정답"    
        gameOver=true    
    }

    if(chance<1){
        gameOver=true 
    }
    if(gameOver==true){
        playButton.disabled=true  
    }
  dataArea.push(userValue)  
}
function reset(){
    userNum.value=""    
    randomPick()
    restArea.textContent="시작하세요"   
    chance=5
    chanceArea.textContent=`남은 찬스:${chance}번` 
    playButton.disabled=false
}
randomPick()
