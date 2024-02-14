
            function getUrlParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                var results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            }
    
            // Retrieve the text parameter from the URL
            var newText = getUrlParameter('text');
            let decider=document.getElementById("text");
            decider.innerHTML=newText;
            if(newText=="You Win")
            decider.style.color="green";
            else
            decider.style.color="red";

            