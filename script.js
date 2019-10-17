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
        Img:["","","",""],
        Video:["","","",""]
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
        Img:["","images\\203_1Img.PNG","",""],
        Video:["","","",""]
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
        Img:["","","",""],
        Video:["","","",""]
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
        Img:["","","",""],
        Video:["","","",""]
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
        Img:["","","images\\206_2Img.png",""],
        Video:["","","",""]
        },
    pq207qa:{
        Question:[
            "In this lesson, you created your own sound board app. Give a brief description of it here. Describe its theme, if it has one, and what particular sounds (music or speeches) it plays.  Click on Add Files at the bottom of the page to attach your video (or if you uploaded your video to youtube, use insert/youtube from the option above to embed your video in your portfolio page).",
            "Describe how you designed your app's UI. What components does it use?",
            "Now that you've had some experience building apps in App Inventor, what do you think about programming. Is it a creative activity? In what ways does it allow you to express yourself?"
            ],
        Answer:[
            "The sound board is really simple, it have 2 buttons(an addititonal button had been added) and plays sound when click, you can also take pictures, and it also plays sound after you took a picture. The theme is your environment, it can be the city, country side, or anywhere you want. Video:",
            "This app have layout elements nested within layout elements to position the button, in the desireble spot. The UI use a lot of buttons and elements that allow the user to input/change variable, such as camera, button, switch, etc...",
            "I think we should learn actual Java and not block coding, but then this isn't APCSA. Still I did \"wrote\" the code, so that allowed me to express my creativity."
        ],
        Img:["","",""],
        Video:["video\\207_0.mp4","",""]
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
        Img:["","",""],
        Video:["","",""]
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
            `2^9(1)+2^8(1)+2^7(1)+2^6(0)+2^5(1)+2^4(0)+2^3(0)+2^2(0)+2^1(1)+2^0(1) = 512+256+128+0+32+0+0+0+2+1 = 931`,
            "517-2^9=5, 2^0(1)+2^1(0)+2^2(1) = 0010 0000 0101 ",
            "binary have 2 digits: 0-1, octal have 8 digits 0-7, decimal have 10 digit: 0-9",
            "",
            ""
        ],
        Img:["","","","images\\209_3Img.png","images\\209_4Img.png"],
        Video:["","","","",""]
        },
    pq210qa:{
        Question:[
            "(POGIL) Insert a screenshot of your Logicly diagram for the Exclusive-OR circuit below.",
            "(POGIL) Consider these three things: The OR gate (i.e., the physical circuit), the Boolean OR function (as defined by its truth table), and the OR symbol. How would arrange them from most abstract to least abstract? And what criterion would you use to determine their order?",
            "Consider these three things: A binary digit (e.g., 1 or 0), the flip-flop circuit diagram, and the flip-flop circuit (i.e., the physical circuit). How would you arrange them from most abstract to least abstract and what criterion would you use to determine their order?"
        ],
        Answer:[
            "",
            "from most to least abstract: Symbol ,Boolean/Function, Physical gate. This is ordered by details and how specific it is described. For example, the symbol is merely a symbol, if you need to know the gate to understand it. the function is the same, but it have true/false making it easier to understand and less abstract. the physical gate is literally what the gate look like and how it work, therefore it's least abstract.",
            "from most to least abstract: binary digit, circuit diagram, flip-flop circuit. Order determined by details. 1 and 0 requires some thinking to make a flip flop. The diagram show you how it works but it is still a simplified version of the actual circuit. the actual flip flop is least abstract becuase it's the actual circuit."
        ],
        Img:["images\\210_0Img.png","",""],
        Video:["","",""]
        },
    pq211qa:{
        Question:[
            "What is a bit and what does it mean to say that \"it's all just bits\"? (Koan 1) Give examples of the things today that are stored in bits",
            "Describe, in your own words, Moore's Law.",
            "Give an example of how the digital explosion is \"neither good nor bad\" but has both positive and negative implications.",
            "Find and summarize a news article that talks about the positive or negative impacts of a computing innovation. Is the technology itself positive or negative? Or have people used the technology in positive and/or negative ways?"
        ],
        Answer:[
            "A bit is 0 or 1 binary, on or off. It's all just bit because computers are chips + transistors which have only on or off 0 or 1. ",
            "Each chip have many transisters that can represent 0 or 1 depending on the current that flow through it. Moore's states that the number of transister in chips doubles every 2 years.",
            `The good: Less work for us humans, especially the boring Assembly line jobs, machines can do the same job many times without getting tired or making a mistake. That improves te quility of produces while lowering the production value, making products more afforable. Believe it or not this paragraph you are reading is not actually type out in Html by me. It's a javaScript function that take the parameter I gave it and append this div into the Html for me, less work for me, yay.....
            The Bad: Machines replaces jobs, leading to a higher unemployment rate, this is especially true when there are computers that learn from humans, computers that are 'creative' and creat songs, only to then have another computer software sing that song created by a computer. Humans are not part of that process.
            `,
            `Link: https://www.visualcapitalist.com/how-technology-is-disrupting-the-construction-industry/
            Title: How Technology is Disrupting the Construction Industry
            Summary: about half of the companies in construction industry consider themselve increasingly rely on tech, using softwares and hardwares. And the companies believe they must use tech in order to stay in business.
            That is positive for us, this means companies will be more efficient with construction. But this also may put people out of jobs as computers take over their roles. I believe the tech is use in a way to benefit the employees and others as well as it make constructions more efficient and safier for everyone.
            `
        ],
        Img:["","","",""],
        Video:["","","",""]
        },
    workUnit2qa:{
        Question:["work.gif"],
        Answer:[""],
        Img:["images\\onTimeF150.gif"],
        Video:[""]
        },
//Unit 2 ^^^^^^^^^^^^  ----------------------------------------------------------------------|
//-------------------------------------------------------------------------------------------|
    pq302qa:{
        Question:[
            "Explain the meaning of the statements shown here, both in AP CSP pseudocode and App Inventor. For example, suppose the variable X has the value 10 before the statement is executed. What value would it have after the statement is executed?",
            "One aspect of abstraction is that it helps to reduce details to focus on what's relevant. How does the use of a variable, such as dotsize, instead of a value, such as '5', help to reduce detail and focus on what is essential in this program?"
        ],
        Answer:[""],
        Img:["",""],
        Video:["",""]
        },
    pq303qa:{
        Question:[
            "Decode this message by converting it from binary to ASCII: 1000001 1110000 1110000 0100000 1001001 1101110 1110110 1100101 1101110 1110100 1101111 1110010 0100000 1010010 1001111 1000011 1001011 1010011 0100001",
            "Describe what it means to say that JPEG is a lossy compression technique and whether or not it affects the quality of camera pictures.",
            "Give a specific example of a binary sequence that can represent more than one type of data -- e.g., a number, a color, a character -- and describe how to interpret its different values."
        ],
        Answer:[""],
        Img:["","",""],
        Video:["","",""]
        },
    pq304qa:{
        Question:[
            "For enhancement #5 (the "+'"If Block Exercise"'+") give a brief description of your solution to this problem. PROVIDE A SCREENSHOT OF YOUR APP"+"'S CODE -- the revised blocks -- and describe how the if/else block works to solve the problem in this case. If appropriate, include a description of any significant problems or bugs you encountered in solving this problem. App Inventor now has a Download Blocks as Image feature (right click on the white space in the blocks editor to choose) that also can be used to take a screenshot of all of your code or the Windows snipping tool can be used.",
            "When you use the Camera component to take a picture as the Canvas background, explain why the picture goes away when the app is restarted. HINT: Think about the different hardware components we talked about in an earlier lesson and where on the device the picture is stored. What do you think could be done to prevent the picture from disappearing when the app is restarted?",

        ],
        Answer:[""],
        Img:["",""],
        Video:["",""]
        },
    pq305qa:{
        Question:[
            "The Wikipedia article on refactoring talks about code smell and one motivation for engaging in refactoring. What is code smell? Describe briefly two examples of "+'"code smell"'+" and how refactoring would eliminate them.",
            "Insert a screenshot of the procedure from your app below.",
            "What are the advantages of using procedural abstraction? Name at least 2 advantages."
        ],
        Answer:[""],
        Img:["","",""],
        Video:["","",""]
        },  
    pq306qa:{
        Question:[
            "(POGIL) Describe an algorithm for identifying the card that was flipped.",
            "(POGIL) The card "+"trick"+" shows that it is always possible to identify the card that was flipped as long as only one card was flipped. Would it be possible always to determine if an error occurred if two cards were flipped?"
        ],
        Answer:[""],
        Img:["",""],
        Video:["",""]
            },    
    pq307qa:{
        Question:[
            "Explain how the error card trick from the Error Detection lesson uses a parity scheme. Was it an even or odd parity scheme?",
            "What are some of the limitations of using parity bits for error detection?",
            "Another type of error detection is a check sum. Research what a check sum is and then describe it in your own words. Can a check sum identify where an error occurs?",
            "(Optional) Explain in your own words the difference between error detection and error correction. Describe how the error correction process used in the video above allows the computer to fix errors."
        ],
        Answer:[""],
        Img:["","","",""],
        Video:["","","",""]
        },
    pq308qa:{
        Question:[
            "How are lists used in this app? Why is a list a useful data abstraction or an abstract data type (ADT) in programming? Is it easy to add new destinations to the tour?",
            "How do APIs simplify complex programming tasks? Pick an app that you use on your device (e.g. Twitter, Google Maps) and see whether it provides an API and some of the functions you can control with it. Describe your results below.",
            "How is GPS used in this app? Do some research to find out how GPS works and describe it here in a couple sentences.",
            "Insert screenshots of the enhancements that you made below and describe how they work."
        ],
        Answer:[""],
        Img:["","","",""],
        Video:["","","",""]
        },
    pq309qa:{
        Question:[
            "What does it mean to say that data is 'persistent'?",
            "What's the difference, in terms of where data is located, for data stored in a global variable vs. data stored in a database?",
            "Include screenshots and explanations of your enhancements."
        ],
        Answer:[
            ""
        ],
        Img:["","","",],
        Video:["","","",]
        },
    pq310qa:{
        Question:[
        "What is metadata? Give an example of how a piece of metadata could be used to increase the usefulness of an image or document.",
        "What is a model?",
        "What's the difference between a raster image and an ASCII representation of a text document?",
        "What are filename extensions? What are they used for?",
        "What is lossless representation? What is lossy representation? What are the trade-offs in using each representation?",
        "What is lossless representation? What is lossy representation? What are the trade-offs in using each representation?",
        "What would you have to do to delete a document from your computer so that it could not possibly be read by anyone else?",
        "What is free and open source software? Provide an example.",
        "Freeeeeeeeeeeeeeeeeeeeeeeeeeee Responseeeeeeeeeeeeeeeee",
        "How has retouching become a controversial issue? Give an example.",
        "Would you rather own a camera (or camera phone) with a higher number of megapixels or lower? Explain.",
        "Other than digital images, what might be an example of a computer model? Explain your answer based on the definition of a model.",
        "The code that implements App Inventor is open source and its impact on education is obvious. Find another example of open source software and describe its positive impact on education, business or society.",
        ],
        Answer:[
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
        ],
        Img:["","","","","","","","","","","","","",],
        Video:["","","","","","","","","","","","","",]
        },  
    };

$("#hideAll").click(function(){
    $(".AppendedQandA").hide();  
    $("#watThisH1").text("What is this?");
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
        
        var childMObj = $(div).find(".Aimg"); //find image tag and replace the src
        if(data[key].Img[i] === ""){
            childMObj.remove();
        
        }else{
            console.log(data[key].Img[i]);
            childMObj.attr("src",data[key].Img[i]);
        }

        var childMObj = $(div).find(".vdo"); //same as above, but video.
        if(data[key].Video[i] === ""){
            childMObj.remove();
        
        }else{
            console.log(data[key].Video[i]);
            childMObj.attr("src",data[key].Video[i]);
        }
    }
    
}

//$(".AppendedQandA").show();

$("#JumpUnit3").click(function(){
    window.location.assign("C:\\Users\\Administrator\\Desktop\\APCSP-HomeWork\\Unit3.html");
});

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

    $("#watThisH1").text("You're viewing: "+this.id);
        
    });
    
    $(".AppendedQandA").hide();  


