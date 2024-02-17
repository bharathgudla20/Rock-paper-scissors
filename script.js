
let user_score=0;
let cmp_score=0; 
let draw=0;


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
    let modal=document.getElementById("modalbox");
    let blurbg=document.getElementById("bgmodal");
    let res=document.getElementById("text");
    if(userchoice=="paper" )
    {
        if(cmpchoice=="rock"){
        user_score++;
        setTimeout(dis,2000,"You won,paper beats rock","green");
        vidsrc.src="PaperRock2.mp4";
        textElement.innerHTML="You win!";
        showTextWithDelay(2000,1000);
        
        
        }
        else if(cmpchoice=="scissors"){
        cmp_score++;
        setTimeout(dis,2000,"You lost,scissors beats rock","red");
        vidsrc.src="PaperScissor2.mp4";
        textElement.innerHTML="You Lose!";
        showTextWithDelay(2000,1000);
        }
        else{
        draw++;
        setTimeout(dis,2000,"its a draw","darkblue");
        vidsrc.src="PaperPaper.mp4";
        textElement.innerHTML="Draw!";
        showTextWithDelay(2000,1000);
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
        showTextWithDelay(2000,1000);
        }
        else if(cmpchoice=="paper")
        {
            setTimeout(dis,2000,"You lost,paper beats rock","red");
        cmp_score++;
        vidsrc.src="RockPaper2.mp4";
        textElement.innerHTML="You Lose!";
        showTextWithDelay(2000,1000);
        }
        else{
        draw++;
        setTimeout(dis,2000,"Its a draw","darkblue");
        vidsrc.src="RockRock.mp4";
        textElement.innerHTML="Draw!";
        showTextWithDelay(2000,1000);
        }
        video.load();
    }
    else{
        if(cmpchoice=="paper"){
        user_score++;
        setTimeout(dis,2000,"You won,scissors beats paper","green");
        vidsrc.src="ScissorPaper2.mp4";
        textElement.innerHTML="You Win!";
        showTextWithDelay(2000,1000);
        }
        else if(cmpchoice=="rock")
        {
        cmp_score++;
        setTimeout(dis,2000,"You lost,rock beats scissors","red");
        vidsrc.src="ScissorRock2.mp4";
        textElement.innerHTML="You Lose!";
        showTextWithDelay(2000,1000);
        }
        else{
        draw++;
        setTimeout(dis,2000,"Its a draw","darkblue");
        vidsrc.src="ScissorScissor.mp4";
        textElement.innerHTML="Draw!";
        showTextWithDelay(2000,1000);
        }
        video.load();
    }
        
        if(user_score==3)
        {
            res.innerHTML="Victory!";
            
            setTimeout(decider2,3000);  
        }
       
        if(cmp_score==3)
        {
            res.innerHTML="Defeat!";
            
            setTimeout(decider2,3000);     
        }
        function decider2()
       {
        blurbg.classList.add("blur");
            modal.classList.add("openmodaldialog");
       }
        let userp=document.getElementById("yourscore");
    let computer=document.getElementById("compscore");
    setTimeout(updatescore,2000);
    function updatescore()
    {
        userp.innerHTML=user_score;
    computer.innerHTML=cmp_score;
    }
       
        function dis(message1,color1)
        {
            display.innerHTML=message1;
            div.style.backgroundColor=color1;
        }
    
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

let r1=document.getElementById("rimg");
let p1=document.getElementById("pimg");
let s1=document.getElementById("simg");
function submitPoll() {
    document.getElementById("rockimg").disabled = true;

    document.getElementById("paperimg").disabled = true;
    document.getElementById("scissorsimg").disabled = true;
    r1.classList.add("blur");
    p1.classList.add("blur");
    s1.classList.add("blur");
    setTimeout(function() {
        r1.classList.remove("blur");
        p1.classList.remove("blur");
        s1.classList.remove("blur");
        document.getElementById("rockimg").disabled = false;
    document.getElementById("paperimg").disabled = false;
        document.getElementById("scissorsimg").disabled = false;
    }, 3000);
}

document.getElementById("rockimg").addEventListener("click", submitPoll);
document.getElementById("paperimg").addEventListener("click", submitPoll);
document.getElementById("scissorsimg").addEventListener("click", submitPoll);
