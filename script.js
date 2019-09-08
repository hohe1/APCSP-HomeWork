var data = {
    pq202qa:{
        Question:[
            "In your own words, describe what event driven programming is. What event handler was used in the I Have a Dream app? How was it used?",
            "Is it possible to create an app without event driven programming? Explain.",
            "What elements and components make up the User Interface (UI) for the I Have A Dream app?",
            "What are some of the elements that make up the UI for a car? A vending machine?"
            ],
        Answer:[
            "Event driven programming is adding listeners into your program to detect when the user does a certain input. In the 'I have a dream app' we used buttons.", "It is possible to have simple apps that does do much, like apps that play a sound when you open it.","We used buttons and images.","If you make a car you need something that serves as the wheel, display speed, etc. Vending machines need buttons and a display."
            ],
        Img:["","","",""]
        },
    pq203qa:{
        Question:[
            "In your own words, give a sentence that would explain to a friend the difference between the WWW and the Internet.",
            "(POGIL) List a beneficial effect and a harmful effect for a social media app that you discussed in your POGIL group. Are the effects on society, culture, or economics? Include a screenshot of the Venn diagram you made with your group."

            ],
        Answer:[
            "WWW is on the internet, the internet contains WWW. Internet is the net work, WWW is the pages."
            ],
        Img:["","a","",""]
        },
    pq204qa:{
        Question:[],
        Answer:[],
        Img:["","","",""]
        },   
    pq205qa:{
        Question:[],
        Answer:[],
        Img:["","","",""]
        },
    pq206qa:{
        Question:[],
        Answer:[],
        Img:["","","",""]
        }        
    };

$("#hideAll").click(function(){
    $(".AppendedQandA").hide();  
    });



for(var key in data){
    // console.log(data[key].Question);
    // console.log(data[key].Answer);
    

    for(var i=0;i<data[key].Question.length;i++){
        var div = document.getElementById("PQEx").cloneNode(true);
        $("#midCenterDiv").append(div);
        // console.log(div.id = String(key));
        div.id=String(key)+"i";
        div.className = "AppendedQandA " + String(key);
    
        var childQObj = $(div).find(".questionTxt");
        $(childQObj[0]).text(data[key].Question[i]);
        var childAObj = $(div).find(".answerTxt");
        $(childAObj[0]).text(data[key].Answer[i]);
        
        var childMObj = $(div).find(".Aimg");
        if(data[key].Img[i] === ""){
            childMObj.remove();
            }
        }
    
    }

//$(".AppendedQandA").show();












$(".buttonL").click(function(){
//     var divID = this.id+"QuestionContainer";
//     var questionArr = data[this.id].Question;
//     var answerArr = data[this.id].Answer;

//     for(var i=0;i<questionArr.length;i++){
//         var div = document.getElementById("PQEx").cloneNode(true);
//         $("#midCenterDiv").append(div);
//         div.id = divID+i;
//         div.className = "AppendedQandA";
//         var actualId ="#"+divID+i;
//         var childQObj = $(actualId).find(".questionTxt");
//         $(childQObj[0]).text(questionArr[i]);
//         var childAObj = $(actualId).find(".answerTxt");
//         $(childAObj[0]).text(questionArr[i]);
//         }
    $(".AppendedQandA").hide();  
    $("."+this.id+"qa").show();


        
    });
    
    $(".AppendedQandA").hide();  


