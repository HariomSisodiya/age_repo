function mainPage(){
    var mainDiv = document.querySelector("#mainDiv");

    var front = document.createElement("div");
    front.setAttribute("style","width:100vw;height:100vh; background:url('./flat-lay-office-elements-with-copyspace.jpg'); background-size:cover;");
    front.setAttribute("class","d-flex align-items-center justify-content-end");

    var contain = document.createElement("div");
    contain.setAttribute("style","width:46%; height:40%;");
    contain.setAttribute("class","d-flex flex-column justify-content-around")

    var h1 = document.createElement("h1");
    h1.innerText = "Age Calculator";
    h1.setAttribute("style","font-size:5vw; color:#364152;");
    contain.appendChild(h1);

    var button = document.createElement("button");
    button.innerText = "Check Age";
    button.setAttribute("style","width:20%; font-size:1.1vw;");
    button.setAttribute("class","btn btn-outline-info");
    button.addEventListener("click",()=>{
        calculate_Page();
    });
    contain.appendChild(button);

    var p = document.createElement("p");
    p.innerText = 'Just Calculate Your Age and Celebrate Milestones....';
    p.setAttribute("style","color:#364152; font-size:1.4vw;")
    contain.appendChild(p);

    front.appendChild(contain);

    mainDiv.appendChild(front);
}
function calculate_Page(){
    var main = document.querySelector("#mainDiv");
    main.innerHTML = "";

    var container =  document.createElement("div");
    container.setAttribute("style","width:100vw; height:100vh; background-color:#e4e5eb;");
    container.setAttribute("class","d-flex align-items-center justify-content-center");
    
    var mainContain = document.createElement("div");
    mainContain.setAttribute("style","width:30%; height:30%; box-shadow:10px 10px 10px 10px grey; border-radius:10px; background-color:whitesmoke; color:#364152;");
    mainContain.setAttribute("class","d-flex flex-column justify-content-around align-items-center");

    var h1 = document.createElement("h1");
    h1.innerText = "Age Calculator";
    mainContain.appendChild(h1);

    var p = document.createElement("p");
    p.innerText = "Enter Your Birthdate :-";
    mainContain.appendChild(p);

    var span = document.createElement("span");
    span.setAttribute("style","width:80%;")
    span.setAttribute("class","d-flex justify-content-around");
    mainContain.appendChild(span);
    
    var input = document.createElement("input");
    input.setAttribute("type","date");
    input.setAttribute("id","birthdate");
    input.setAttribute("style","width:40%; outline:none; color:#364152; font-size:1.1vw;")
    span.appendChild(input);

    var button = document.createElement("button");
    button.innerText = "Calculate Age";
    button.setAttribute("style","width:40%; font-size:1.1vw;");
    button.setAttribute("class","btn btn-outline-success");
    button.addEventListener("click",()=>{
        calculate_Age();
    });
    span.appendChild(button);

    var p1 = document.createElement("p");
    p1.setAttribute("id","result");
    mainContain.appendChild(p1);


    container.appendChild(mainContain);
    
    main.appendChild(container);
}
function calculate_Age(){
    var birthdate = document.querySelector("#birthdate").value;
    var resultElement = document.querySelector("#result");

    if(birthdate){
        const today = new Date();
        const birthDate = new Date(birthdate);

        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();
        let day = today.getDay() - birthDate.getDate();

        if(month < 0){
            age--;
            month += 12;
        }
        if(day < 0){
            month--;
            day += new Date(
                today.getFullYear(),
                today.getMonth(),
                0
            ).getDate();
        }

        resultElement.innerText = "Your age is "+(age)+" Year "+(month)+" Month and "+(day)+" Days.";
        resultElement.setAttribute("style","color:green;  font-size:1.2vw; margin-top:10px;");
    }
    else{
        resultElement.innerText = "Please enter your Birthdate";
        resultElement.setAttribute("style","color:red;");
    }
}
