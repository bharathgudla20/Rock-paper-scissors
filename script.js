
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
    if(userchoice=="paper" )
    {
        if(cmpchoice=="rock"){
        user_score++;
        display.innerHTML="You won,paper beats rock";
        div.style.backgroundColor="green";
        vidsrc.src="PaperRock.mp4";
        }
        else if(cmpchoice=="scissors"){
        cmp_score++;
        display.innerHTML="You lost,scissors beats rock";
        div.style.backgroundColor="red";
        vidsrc.src="PaperScissor.mp4";
        }
        else{
        draw++;
        display.innerHTML="Its a draw";
        div.style.backgroundColor="darkblue";
        vidsrc.src="PaperRock.mp4";
        }
        video.load();
    }
    else if(userchoice=="rock" )
    {
        if(cmpchoice=="scissors"){
            display.innerHTML="You won,rock beats scissor";
        user_score++;
        div.style.backgroundColor="green";
        vidsrc.src="RockScissor.mp4";
        }
        else if(cmpchoice=="paper")
        {
            display.innerHTML="You lost,paper beats rock";
        cmp_score++;
        div.style.backgroundColor="red";
        vidsrc.src="RockPaper.mp4";
        }
        else{
        draw++;
        display.innerHTML="Its a draw";
        div.style.backgroundColor="darkblue";
        vidsrc.src="RockPaper.mp4";
        }
        video.load();
    }
    else{
        if(cmpchoice=="paper"){
        user_score++;
        display.innerHTML="You won,scissors beats paper";
        div.style.backgroundColor="green";
        vidsrc.src="ScissorPaper.mp4";
        }
        else if(cmpchoice=="rock")
        {
        cmp_score++;
        display.innerHTML="You lost,rock beats scissors";
        div.style.backgroundColor="red";
        vidsrc.src="ScissorRock.mp4";
        }
        else{
        draw++;
        display.innerHTML="Its a draw";
        div.style.backgroundColor="darkblue";
        vidsrc.src="PaperRock.mp4";
        }
        video.load();
    }
        
        if(user_score==3)
        {
            var textToPass = 'You Win'; // The text you want to pass to page2.html
            window.location.href = 'winlose.html?text=' + encodeURIComponent(textToPass);
            
            
            
        }
        if(cmp_score==3)
        {
            var textToPass = 'Computer Win'; // The text you want to pass to page2.html
            window.location.href = 'winlose.html?text=' + encodeURIComponent(textToPass);
        
            
            
        }
    let userp=document.getElementById("yourscore");
    let computer=document.getElementById("compscore");
    userp.innerHTML=user_score;
    computer.innerHTML=cmp_score;
    

    
    
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        comp(userchoice);
    }); 
});
