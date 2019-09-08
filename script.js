var data = {
    pq202:{
        Question:[
            "In your own words, describe what event driven programming is. What event handler was used in the I Have a Dream app? How was it used?",
            "Is it possible to create an app without event driven programming? Explain.",
            "What elements and components make up the User Interface (UI) for the I Have A Dream app?",
            "What are some of the elements that make up the UI for a car? A vending machine?"
            ],
        Answer:[
            "a"
            ]
        },
    pq203:{
        Question:[],
        Answer:[]
        },
    pq204:{
        Question:[],
        Answer:[]
        },   
    pq205:{
        Question:[],
        Answer:[]
        },
    pq206:{
        Question:[],
        Answer:[]
        }        
    };

$("#hideAll").click(function(){
    $(".AppendedQandA").html("");  
    });



for(var key in data){
    // console.log(data[key].Question);
    // console.log(data[key].Answer);
    

    for(var i=0;i<data[key].Question.length;i++){
        var div = document.getElementById("PQEx").cloneNode(true);
        $("#midCenterDiv").append(div);
        div.className = "AppendedQandA";
        
        var childQObj = $(div).find(".questionTxt");
        $(childQObj[0]).text(data[key].Question[i]);
        var childAObj = $(div).find(".answerTxt");
        $(childAObj[0]).text(data[key].Answer[i]);
        
        }
    
    }

$(".AppendedQandA").show();












// $(".buttonL").click(function(){
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

        
//     });
    

