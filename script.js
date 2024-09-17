let pat_name="";
 let pat_age="";
 let pat_weight="";
 let doct_spec="";
 let doct_name="";
 let doct_time="";

 function chatbot(input,a) {
  let output = "";
  input = input.toLowerCase();
  if (a==0) {
    output="please enter your name to continue...."
  }else if(a==1){
    pat_name=input;
    output="enter your age "+pat_name;
  }else if(a==2){
    pat_age=input;
    output="enter your weight "+pat_name;
  }
  else if(a==3){
    pat_weight=input;
    output="please choose your specialties 1)ENT 2)Dental 3)Eye"
  }
  else if(a==4){
    if(input=="1"){
      doct_spec="ENT";
      output="Available doctor 1)Mr Shubham";
      doct_name="Mr Shubham";
    }
    if(input=="2"){
      doct_spec="Dental";
      output="Available doctor 1)Ms Vartika";
      doct_name="Ms vartika";
    }
    if(input=="3"){
      doct_spec="Eye";
      output="Available doctor 1)Ms Mansi";
      doct_name="Ms Mansi";
    } 
  }
  else if(a==5){
    output="Enter prefered time for "+doct_name;
  }
  else if(a==6){
    doct_time=input;
    output="Please pay INR 1000 to book appointment"
  }
  else if(a==7){
    printapplication(pat_name,pat_age,pat_weight,doct_spec,doct_name,doct_time);
   
    
  }
  
  
  return output;
}


function displayUserMessage(message) {
  let chat = document.getElementById("chat");
  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.classList.add("user");
  let userAvatar = document.createElement("div");
  userAvatar.classList.add("avatar");
  let userText = document.createElement("div");
  userText.classList.add("text");
  userText.innerHTML = message;
  userMessage.appendChild(userAvatar);
  userMessage.appendChild(userText);
  chat.appendChild(userMessage);
  chat.scrollTop = chat.scrollHeight;
}


function displayBotMessage(message) {
  let chat = document.getElementById("chat");
  let botMessage = document.createElement("div");
  botMessage.classList.add("message");
  botMessage.classList.add("bot");
  let botAvatar = document.createElement("div");
  botAvatar.classList.add("avatar");
  let botText = document.createElement("div");
  botText.classList.add("text");
  botText.innerHTML = message;
  botMessage.appendChild(botAvatar);
  botMessage.appendChild(botText);
  chat.appendChild(botMessage);
  chat.scrollTop = chat.scrollHeight;
}

let count=0;
function send() {
  let input = document.getElementById("input").value;
  if (input) {
    displayUserMessage(input);
    let output = chatbot(input,count);
    count++;
    setTimeout(function() {
      displayBotMessage(output);
    }, 1000);
    document.getElementById("input").value = "";
  }
}
function printForm() {
 const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
    <html>
      <head>
        <title>Application Form</title>
        <style>
          @media print {
            body {
              font-size: 12pt;
              font-family: Arial, sans-serif;
            }
          }
        </style>
      </head>
      <body>
        ${document.getElementById("application-form").outerHTML}
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}
function printapplication(name,age,weight,spec,doct,time){
  displayBotMessage("your appointment slip");
  const formHtml = `
    <form id="application-form">
      <h1>GFG Hospital</h1>
      <h2>Geeks for Geeks, Sector-136, Noida</h2>
      <label for="name">Name:</label>
      <input type="text" id="name" value="${name}" readonly><br><br>
      <label for="age">Age:</label>
      <input type="number" id="age" value="${age}" readonly><br><br>
      <label for="weight">Weight:</label>
      <input type="number" id="weight" value="${weight}" readonly><br><br>
      <label for="spec">Specialty:</label>
      <input type="text" id="spec" value="${spec}" readonly><br><br>
      <label for="doct">Doctor:</label>
      <input type="text" id="doct" value="${doct}" readonly><br><br>
      <label for="time">Preferred Time:</label>
      <input type="text" id="time" value="${time}" readonly><br><br>
       
       <div class="prescription">
                <h3>Prescription:</h3>
                <textarea id="prescription" name="prescription" rows="50" cols="40"></textarea>
            </div>
            <button type="button" onclick="printForm()">Print Application slip</button>

    </form>
  `;
  displayBotMessage(formHtml);
  count = 0;



}


document.getElementById("button").addEventListener("click", send);


document.getElementById("input").addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    send();
  }
});
