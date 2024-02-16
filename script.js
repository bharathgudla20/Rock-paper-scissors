
let user_score=0;
let cmp_score=0; 
let draw=0;
console.log("Sumant11h");

function comp(userchoice)
{
    let arr=["rock","paper","scissors"];
    let compInd=Math.floor(Math.random()*3);
    let cmpchoice=arr[compInd];
    console.log("computer choice=",arr[compInd]);
    console.log("user choice=",userchoice);
    let display=document.getElementById("message");
    let div=document.getElementById("message");
    var video = document.getElementById('myVideo');
    let vidsrc=document.getElementById("Videosource");
    let textElement = document.getElementById("text2");
    if(userchoice=="paper" )
    {
        if(cmpchoice=="rock"){
        user_score++;
        setTimeout(dis,2000,"You won,paper beats rock","green");
        vidsrc.src="PaperRock2.mp4";
        textElement.innerHTML="You win!";
        showTextWithDelay(2000,2000);
        
        
        }
        else if(cmpchoice=="scissors"){
        cmp_score++;
        setTimeout(dis,2000,"You lost,scissors beats rock","red");
        vidsrc.src="PaperScissor2.mp4";
        textElement.innerHTML="You Lose!";
        showTextWithDelay(2000,2000);
        }
        else{
        draw++;
        setTimeout(dis,2000,"its a draw","darkblue");
        vidsrc.src="PaperPaper.mp4";
        textElement.innerHTML="Draw!";
        showTextWithDelay(2000,2000);
        }
        video.load();
    }
    else if(userchoice=="rock" )
    {
        if(cmpchoice=="scissors"){
            setTimeout(dis,2000,"You won,rock beats scissor","green");
        user_score++;
        vidsrc.src="RockScissor2.mp4";
        textElement.innerHTML="You win!";
        showTextWithDelay(2000,2000);
        }
        else if(cmpchoice=="paper")
        {
            setTimeout(dis,2000,"You lost,paper beats rock","red");
        cmp_score++;
        vidsrc.src="RockPaper2.mp4";
        textElement.innerHTML="You Lose!";
        showTextWithDelay(2000,2000);
        }
        else{
        draw++;
        setTimeout(dis,2000,"Its a draw","darkblue");
        vidsrc.src="RockRock.mp4";
        textElement.innerHTML="Draw!";
        showTextWithDelay(2000,2000);
        }
        video.load();
    }
    else{
        if(cmpchoice=="paper"){
        user_score++;
        setTimeout(dis,2000,"You won,scissors beats paper","green");
        vidsrc.src="ScissorPaper2.mp4";
        textElement.innerHTML="You Win!";
        showTextWithDelay(2000,2000);
        }
        else if(cmpchoice=="rock")
        {
        cmp_score++;
        setTimeout(dis,2000,"You lost,rock beats scissors","red");
        vidsrc.src="ScissorRock2.mp4";
        textElement.innerHTML="You Lose!";
        showTextWithDelay(2000,2000);
        }
        else{
        draw++;
        setTimeout(dis,2000,"Its a draw","darkblue");
        vidsrc.src="ScissorScissor.mp4";
        textElement.innerHTML="Draw!";
        showTextWithDelay(2000,2000);
        }
        video.load();
    }
      
        if(user_score==3)
        {
            setTimeout(userWin,3000);  
        }
        function userWin()
        {
            var textToPass = 'Victory!'; // The text you want to pass to page2.html
            window.location.href = 'winlose.html?text=' + encodeURIComponent(textToPass);  
        }
        if(cmp_score==3)
        {
            setTimeout(compWin,3000);     
        }
        function compWin()
        {
            var textToPass = 'Defeat!'; // The text you want to pass to page2.html
            window.location.href = 'winlose.html?text=' + encodeURIComponent(textToPass);
        }
        function dis(message1,color1)
        {
            display.innerHTML=message1;
            div.style.backgroundColor=color1;
        }
    let userp=document.getElementById("yourscore");
    let computer=document.getElementById("compscore");
    userp.innerHTML=user_score;
    computer.innerHTML=cmp_score;
    // Get reference to the text element
function showTextWithDelay(delay, duration) {
    setTimeout(function() {
        textElement.classList.remove("hidden");
        textElement.classList.add("visible");
        
        // Hide the text after the specified duration
        setTimeout(function() {
            textElement.classList.remove("visible");
            textElement.classList.add("hidden");
        }, duration);
    }, delay);
}
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        comp(userchoice);
    }); 
});
