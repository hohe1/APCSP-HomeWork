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
            "(POGIL) List a beneficial effect and a harmful effect for a social media app that you discussed in your POGIL group. Are the effects on society, culture, or economics? Include a screenshot of the Venn diagram you made with your group.",
            "(POGIL) If you were a developer of one of the social media apps that you discussed, how would you reduce the harmful effects?"

            ],
        Answer:[
            "WWW is on the internet, the internet contains WWW. Internet is the net work, WWW is the pages.",
            "The benefitical effects and harmful effects can affects society, culture and economic. For example a new song can became a new cultural sensation, some company even use social media to use make money, thus economical. The effects of social media can also effects society by starting trends. Sometimes the effects are harmful like that one time kids ate laundary pods to gain social media likes and almost died.",
            "To reduce the harm, from the pervious problems we should censor some contents and ban some users, that way undesirable effects are miniumized."
            ],
        Img:["","images\\203_1Img.PNG","",""]
        },
    pq204qa:{
        Question:[
            "What components make up the User Interface (UI) for this enhanced version of the I Have A Dream app?",
            "A computational artifact is something created by a human using a computer.  We've just created a mobile app, which is certainly an example of such a artifact.  Given examples from your own experience of computational artifacts that you've created -- images, videos, presentations, mash-ups -- and describe the software you used to create them."
            ],
        Answer:[
            "There is an additional button and we used a layout element to put the buttons at the right places.",
            "A computatonal artifact I created is this web page."
            ],
        Img:["","","",""]
        },   
    pq205qa:{
        Question:[
            "Give an example of a special purpose computer that you are familiar with and briefly describe its hardware and its software.",
            "Explain in your own words the difference between running your app by \"Connecting to the Companion\" and running your app by \"Packaging\" it.",
            "As we learned in this lesson, a byte is about the same amount of memory as a character, such as the letter 't'. There are approximately 7 million characters in all of the Harry Potter novels combined. How many bytes of memory would all of the Harry Potter novels take up? How many copies of the Harry Potter novels would fit on a 7 Gigabyte flash drive. (Remember 1 Gigabyte is 1 billion bytes.)"
            ],
        Answer:[
            "I'm quite familar with my scientific calculator, at least when it comes to using it. Pretty sure it have a battery(hardware).",
            "Connect to companion is not actually installing the app, packing it is actually installing the app, after installing, the app will stay on the device and will not update as changes are made to the prototype in the IDE.",
            "7000000 / 8 = 875000 bytes. 7000000000 / 875000 = 8000 novels."
            ],
        Img:["","","",""]
        },
    pq206qa:{
        Question:[
            "(POGIL) Write an algorithm using the 4 simple commands to navigate the robot through the maze in the POGIL question listed in your online textbook.",
            "(POGIL) Write an algorithm using repetition control structures to navigate the robot through the maze referenced above.",
            "(POGIL) Include a description or a photo of your drawing of a maze that the general algorithm in the POGIL exercise CANNOT solve.",
            "(POGIL) Write an algorithm for washing a stack of 10 items that are cups and dishes mixed together, where the rule is that cups are washed in hot water and dishes in cold water. Use simple commands like hot_wash and cold_wash. You may also use the control structures IF and REPEAT n times. Identify the parts of your algorithm that are examples of Sequence, Selection and Repetition."
            ],
        Answer:[
            `REPEAT_UNTIL gray
            MOVE_FORWARD
            If (CAN_MOVE(right))
                ROTATE_RIGHT
            If (CAN_MOVE(left))
                ROTATE_LEFT
            `,
            `REPEAT 8 times
            MOVE_FORWARD
            If (CAN_MOVE(right))
                ROTATE_RIGHT
            If (CAN_MOVE(left))
                ROTATE_LEFT`,
            "",
            `REPEAT 10 times 
            IF Saucers 
                Cold_wash
            IF Dish
                Hot_wash
            `
            ],
        Img:["","","images\\206_2Img.png",""]
        },
    pq207qa:{
        Question:[
            "In this lesson, you created your own sound board app. Give a brief description of it here. Describe its theme, if it has one, and what particular sounds (music or speeches) it plays.  Click on Add Files at the bottom of the page to attach your video (or if you uploaded your video to youtube, use insert/youtube from the option above to embed your video in your portfolio page).",
            "Describe how you designed your app's UI. What components does it use?",
            "Now that you've had some experience building apps in App Inventor, what do you think about programming. Is it a creative activity? In what ways does it allow you to express yourself?"
            ],
        Answer:[
            "The sound board is really simple, it have 2 buttons(an addititonal button had been added) and plays sound when click, you can also take pictures, and it also plays sound after you took a picture. The theme is your environment, it can be the city, country side, or anywhere you want. Video link: ",
            "This app have layout elements nested within layout elements to position the button, in the desireble spot. The UI use a lot of buttons and elements that allow the user to input/change variable, such as camera, button, switch, etc...",
            "I think we should learn actual Java and not block coding, but then this isn't APCSA. Still I did \"wrote\" the code, so that allowed me to express my creativity."
        ],
        Img:["","",""]
        },
    pq208qa:{
        Question:[
            "Write an explanation of abstraction, including at least one example, in your own words.",
            "Give 2-3 examples of abstractions in everyday life not identified in the lecture.",
            "Consider an example of software, a mobile application, or a web site and explain how it is an abstraction"
            ],
        Answer:[
            "Abstraction, is simplify something a lot, but still have the basic concept. An example is simplifing a game AI into if statements.",
            "Example 1: I go to school in the morning. This example left out the unimportant details of what method of transportation, the exact time I left, what I wear, etc... Another example would be studying the informations that is going to be in the exam instead of reading the whole text book.",
            "The example is an abstraction because it is designed to do a specific thing and doesn't give you irrelevant details."
        ],
        Img:["","",""]
        },
    pq209qa:{
        Question:[
            "Figure out what decimal value is represented by the following binary number 0011 1010 0011",
            "Represent the decimal value 517 as a binary number.",
            "The binary number system is base 2 and has 2 digits. The decimal number system is base 10 and has 10 digits. The octal system is base 8. How many digits does it have? What are they, starting at 0?",
            "Suppose the number 523 is a base-8 octal number. What would its value be in decimal? In binary?",
            "Challenging: Convert the base-5 number 243 into decimal."
        ],
        Answer:[ 
            "",
            "",
            "",
            "",
            ""
        ],
        Img:["","","","",""]
        },
    pq210qa:{
        Question:[
            "(POGIL) Insert a screenshot of your Logicly diagram for the Exclusive-OR circuit below.",
            "(POGIL) Consider these three things: The OR gate (i.e., the physical circuit), the Boolean OR function (as defined by its truth table), and the OR symbol. How would arrange them from most abstract to least abstract? And what criterion would you use to determine their order?",
            "Consider these three things: A binary digit (e.g., 1 or 0), the flip-flop circuit diagram (), and the flip-flop circuit (i.e., the physical circuit). How would you arrange them from most abstract to least abstract and what criterion would you use to determine their order?"
        ],
        Answer:[],
        Img:["","",""]
        },
    pq211qa:{
        Question:[
            "What is a bit and what does it mean to say that \"it's all just bits\"? (Koan 1) Give examples of the things today that are stored in bits",
            "Describe, in your own words, Moore's Law.",
            "Give an example of how the digital explosion is \"neither good nor bad\" but has both positive and negative implications.",
            "Find and summarize a news article that talks about the positive or negative impacts of a computing innovation. Is the technology itself positive or negative? Or have people used the technology in positive and/or negative ways?"
        ],
        Answer:[],
        Img:["","","",""]
        },
//Unit 2 ^^^^^^^^^^^^  
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
        
        }else{
            console.log(data[key].Img[i]);
            childMObj.attr("src",data[key].Img[i]);
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


