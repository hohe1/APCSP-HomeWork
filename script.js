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
        Answer:[
            "You take the variable x and add 1 to it. For example, if x is 2 and you do x+1 then x will return 3.",
            "The point isn't the dot size, it is about drawing the dot, variable comes in here as a good place holder as you can set it to a initial value that you can easily change later down the lines."
        ],
        Img:["",""],
        Video:["",""]
        },
    pq303qa:{
        Question:[
            "Decode this message by converting it from binary to ASCII: 1000001 1110000 1110000 0100000 1001001 1101110 1110110 1100101 1101110 1110100 1101111 1110010 0100000 1010010 1001111 1000011 1001011 1010011 0100001",
            "Describe what it means to say that JPEG is a lossy compression technique and whether or not it affects the quality of camera pictures.",
            "Give a specific example of a binary sequence that can represent more than one type of data -- e.g., a number, a color, a character -- and describe how to interpret its different values."
        ],
        Answer:["APP INVENTOR ROCKS!","Lossy means some data are lost in the process of compression and will not be able to return to the original uncompressed version perfectly. This is because the pictures' quality is slightly lowered to save space.",
        "1000001, this represents 65 in decimal which represents the letter A in ASCII. Or you can just leave it as 65.        "
        ],
        Img:["","",""],
        Video:["","",""]
        },
    pq304qa:{
        Question:[
            "For enhancement #5 (the "+'"If Block Exercise"'+") give a brief description of your solution to this problem. PROVIDE A SCREENSHOT OF YOUR APP"+"'S CODE -- the revised blocks -- and describe how the if/else block works to solve the problem in this case. If appropriate, include a description of any significant problems or bugs you encountered in solving this problem. App Inventor now has a Download Blocks as Image feature (right click on the white space in the blocks editor to choose) that also can be used to take a screenshot of all of your code or the Windows snipping tool can be used.",
            "When you use the Camera component to take a picture as the Canvas background, explain why the picture goes away when the app is restarted. HINT: Think about the different hardware components we talked about in an earlier lesson and where on the device the picture is stored. What do you think could be done to prevent the picture from disappearing when the app is restarted?",

        ],
        Answer:["To prevent negative dot size, I simply don't allow the user to go below 0 on the dot size slider.  But if I have to prevent negative then:",
        "The picture is not persistent data. It is thrown out after we are done messing around with it, we didn't save it. We could save the file/picture to the device inorder to preserve it. Perhaps even on the user's google drive."],
        Img:["images\\304_0.png",""],
        Video:["",""]
        },
    pq305qa:{
        Question:[
            "The Wikipedia article on refactoring talks about code smell and one motivation for engaging in refactoring. What is code smell? Describe briefly two examples of "+'"code smell"'+" and how refactoring would eliminate them.",
            "Insert a screenshot of the procedure from your app below.",
            "What are the advantages of using procedural abstraction? Name at least 2 advantages."
        ],
        Answer:[
            "Code smell is the feeling you get when you feel like you made some obscured mistakes in the code. By rearranging your code you can potentially find some mistakes that had eluded you before and thus eliminate the code smell.",
            " ",
            "1.People won't know how your code works, making it more secure. 2.It's simplified making it easier to use even if others dont understanding how it works, it just works. You don't know how I append this text here, you just know I did and that's all it matters.            "
        ],
        Img:["","images\\305_1.png",""],
        Video:["","",""]
        },  
    pq306qa:{
        Question:[
            "(POGIL) Describe an algorithm for identifying the card that was flipped.",
            "(POGIL) The card "+"trick"+" shows that it is always possible to identify the card that was flipped as long as only one card was flipped. Would it be possible always to determine if an error occurred if two cards were flipped?"
        ],
        Answer:[
            "1.Look and count the index in the columns, and see if the number of flipped cards are odd or even. 2. Determine if it's an odd or even parity bit. 3.Look and count the index in a row, see 4.which one doesn't match. 5.(column,row) is your flipped card.",
            "Yes, it is possible, you will still notice something doesn't add up. However, you won't be able to locate the flipped cards."
        ],
        Img:[
            "",
            ""
        ],
        Video:["",""]
            },    
    pq307qa:{
        Question:[
            "Explain how the error card trick from the Error Detection lesson uses a parity scheme. Was it an even or odd parity scheme?",
            "What are some of the limitations of using parity bits for error detection?",
            "Another type of error detection is a check sum. Research what a check sum is and then describe it in your own words. Can a check sum identify where an error occurs?",
            "(Optional) Explain in your own words the difference between error detection and error correction. Describe how the error correction process used in the video above allows the computer to fix errors."
        ],
        Answer:[
            "If the amount of flipped card in each column and row is odd, then it's an odd parity, if the number of flipped cards is even then it's even parity.            ",
            "It's only limited to one error, more errors cause the detection system to break down.            ",
            "Checksum takes the data and generates a code which is then compared to source code to see if there is a mistake.",
            "The video's method is to instruct the computer to interpret the mistake in the correct way thus patching the mistake. Error detection is simply detecting the error, while error correction is compensating for or fixing the error."
        ],
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
        Answer:[
            "List makes it easy to keep track of the locations and you don't have to declare multiple variable when one list can do the job. Furthermore by placing list within in lists we can have almost and object and store both the name and coordinates of a place. List is useful to keep things in line and organize, thus it makes adding new destinations very easy.",
            "API allows you to use stuff that are already built, use data that are already collected. This saves you time and energy as you do not need to acquire those data yourself. I know at least one website that uses the sound cloud API to play and embed songs in the website. Th sound cloud API allows you to search in its song database, get a song and play it.",
            "GPS can be used in the map app to locate you. GPS works by pinging GPS satellites and have it triangulate your position and sent that data back to you.",
            "Didn't have time to make one :(",
        ],
        Img:["","",""],
        Video:["","","",""]
        },
    pq309qa:{
        Question:[
            "What does it mean to say that data is 'persistent'?",
            "What's the difference, in terms of where data is located, for data stored in a global variable vs. data stored in a database?",
            "Include screenshots and explanations of your enhancements."
        ],
        Answer:[
            "It means the data persist after you turn off the computer, the data is stored instead of thrown away after shutting down the computer.",
            "The global variable initiates every time you run the program, meaning whatever data store in that variable is overwritten. Storing in tiny DB allows the data to be retrieved with a ‘key' and will not overwrite when you restart the app.",
            "DNE :(",
        ],
        Img:["","",],
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
            "Metadata are data that gove information about other data, for example, properties of a text file. It is useful because sometimes you want to organize the data files and you don't want to read each file individually. It's kind of like sorting a library, you are gonna want the metadata about the book instead of reading the whole book when sorting.            ",
            "A model is the computer's representation and simulation of some sort of real-life phenomenon.             ",
            "Raster image changes the bits into colors in RGB while ASCII changes the bits into symbols and characters. In short, one converts to text while the other converts to image.            ",
            "Filename extensions are the. whatever at the end of filenames, it tells the computer what to do with the file and how to open it.            ",
            "Lossless is good for preserving the original thing, however it can't compress as much and may not be useable until uncompress. Lossy compression, on the other hand, cause some data to be lost in the process, but sometimes it's good enough and no one notice anyways.            ",
            "Steganography is hiding a message in plain sight, for example combing the first letter of the first word to spell out a hidden message, ultimately it require a set of instruction to extract the actual message intend to be hidden within an otherwise unsuspicious message. No such activity has taken place, no steganography here either.",
            "You will need to overwrite the disk, maybe zeroing it.",
            "Free and open-source soft wares allow the user and community to make changes to its source codes without a fee, for example, gimp is a free open source image editor, it is similar to PS.",
            "-----------------------------------seperation line------------------------------------------",
            "Retouching is the digital manipulation of an image to make the subject of the image look more attractive. It became a controversial issue because it makes teens follow idols and held to impossibly high standards. They will never look as good unless they too, retouch of course.            ",
            "More megapixels allow for a higher quality photograph as more details are captured. However, due to the higher quality, it takes more space and becomes impractical for every day uses. There comes a point when it's just good enough.",
            "A model in computer science is a simulation of an everyday phenomenon. For example, an image simulates what we see. Other models might include text documents like pdf, as it simulates a book or an article we are reading.",
            "Linux operating system is a free open-source operating system, and it impacts society by offering an operating system own by the community, not companies. This means greater accessibility and more people can use computers. The VLC media player is another example, its accessibility allow it to be found in many classrooms.            ",
        ],
        Img:["","","","","","","","","","","","","",],
        Video:["","","","","","","","","","","","","",]
        },  
    workUnit3qa:{
        Question:["work.gif"],
        Answer:[""],
        Img:["images\\f2Blocked.gif"],
        Video:[""]
        },

//Unit 3 ^^^^^^^^^^^^  ----------------------------------------------------------------------|
//-------------------------------------------------------------------------------------------|

    pq402qa:{
        Question:[
        "This app presents a new type of event which you haven't encountered before. What is that new event? How often is it triggered?",
        "Consider the apps you've developed so far. Can you list all the different events your apps have responded to? What other events do you think an app can respond to? Explore some of the components in App Inventor and see what event handlers they have.",
        "What are the advantages of writing procedures in programming? Use the procedures you wrote for this app as examples in your response."
        ],
        Answer:[
        "This event is the 'sprite.touched' event, it fires when the user taps the sprite on the canvas.",
        "Our Lights off app have buttons, sprites, and timer. So there are 3 event handlers, The app responses to the button being clicked, the sprites being clicked and when the timer fires every so often.",
        "Writing procedures allow you to reuse codes more easily. For example, I wrote a procedure for resetting the game, I had to reset the size of sprites, reset timers, etc... and if I want to have multiple conditions for resetting the game, I would need to copy and paste the lengthy code block. But with procedures, I can just call it in 1 single block."   
        ],
        Img:["","",""],
        Video:["","",""]
        },  
    pq403qa:{
        Question:[
        "Describe the purpose of each enhancement that you added to your app. Give brief descriptions of the enhancements and provide screenshots of important blocks and describe how you used them to solve certain programming problems. Include these descriptions in your write-up, below.",
        "When the user touches an ImageSprite, both the Canvas.Touched and ImageSprite.Touched events are triggered. This is important for more complex games. For instance, suppose there are "+"good"+" and "+"bad"+" sprites in your game. If you hit one, you earn a point. If you hit the other, you lose two points. If you hit the Canvas and don't hit the ImageSprite, you lose 1 point. How would you code this?",
        "How do you speed up the movement of the ImageSprite? What is the fastest it could move?"
        ],
        Answer:[
        "I added a TNT, a bad sprite that immediately ends the game when touched.",
        "Each sprite has its own individual touch event, so just hook up the sprites to the corresponding result when tapped. As for misses, the canvas touch handler actually has a ‘spriteAnyTouch' component that detects if any sprite is touched. So just add an if statement.",
        "To speed up the sprite, simply decrease the ‘interval' property in the timer component. The fastest is probably 1 millisecond." 
        ],
        Img:["images\\403_0Img.png","",""],
        Video:["","",""]
        },
    pq404qa:{
        Question:[
        "Include a screenshot of your app's face drawing, and the code involved, showing the use of a loop and a procedure. You can take a screenshot on most Android devices by pressing the power button and the volume down button and the same time and then emailing the photo from the gallery to yourself, or uploading the image to Google Drive. To practice for the Create task, describe how two of the algorithms (procedures that you wrote) in the code combine to form a bigger algorithm (the drawFace procedure).",
        "Can you draw a triangle with this set of Logo commands? Discuss how or why not.",
        "Discuss: If you were designing the Logo language, how would you change some of our basic commands so that it would be easy to draw a triangle and easier to draw other shapes -- i.e., what should the basic commands do that would make drawing easier.",
        "What weaknesses do you find in using the procedures (the abstractions) we gave you -- forward, turn -- for drawing simple shapes? How would you change the definitions of these procedures to make it easier to draw shapes? Give a specific example that illustrates how a more powerful set of procedures would improve things."
        ],
        Answer:[
        "I wrote algorithms to draw different parts of the face.",
        "You can not draw a triangle using 3 lines using the logo program. There is no option to turn 60 degrees.",
        "I would 1.) allow the user to turn x degrees. 2.) allow user to set the length of each individual lines.        ",
        "The abstractions limited the user to draw line of the same length and turning angles to 90 degrees. I would 1.) allow the user to turn x degrees. 2.) allow user to set the length of each individual lines." 
        ],
        Img:["images\\404_0Img.png","","",""],
        Video:["","","",""]
        },  
    pq405qa:{
        Question:[
        "Write an if/else statement to express the following real life situation. Mary likes ice cream and always chooses chocolate unless there is no chocolate in which case she chooses strawberry. But if there's no strawberry either then she settles for vanilla, which, for some reason, is always available.",
        "We didn't need it for the loop in this lesson, but the number element in the For each number loop is a local variable whose value changes automatically on each iteration of the loop. For example, in this loop number would start at 1 and then go to 2, 3 and 4. And this value can be used in the body of the loop, as shown in this example. Given that, trace through this loop and figure out what value global sum would have when the loop finishes.",
        "App Inventor's random-integer block is an abstract model of randomness -- i.e., an abstraction of real randomness such as flipping a real coin. What would you say about the random-integer block if you ran the coin flipping simulation 10,000 times and the result was that it came up heads 55% of the time?        "
        ],
        Answer:[
        "",
        "5",
        "good enough, if it's not consistantly 55%" 
        ],
        Img:["images\\405_0Img.png","images\\405_1Img.png",""],
        Video:["","",""]
        },  
    pq406qa:{
        Question:[
        "(POGIL) According to your results, does App Inventor's PRNG provide a good model of randomness?",
        "(POGIL) A friend claims that flipping a coin 100 times and finding that it comes up heads only 45% of the time shows that the coin is biased. How should you reply?",
        "Because we are using a coin flip app, this experiment really tests only that App Inventor's random integer block generates a 1 around half the time. Is this a sufficient test for App Inventor's PRNG? What other experiments might you do to increase your confidence in App Inventor's PRNG?"
        ],
        Answer:[
        "Yes, it's good enough, PRNG random walk do eventually start repeating.",
        "Theoretically 50% not same as experimentally 50%.",
        "Showing an integer in the case of coin flipping is sufficient. Maybe generate a float instead of a number would be better."   
        ],
        Img:["","",""],
        Video:["","",""]
        },
    pq407qa:{
        Question:[
        "Consider the following Dilbert cartoon? Would it be possible for a PRNG to spit out 6 NINEs in a row?",
        "Are slot machines fair? Why or why not?",
        "Is it possible to devise a method that would allow you to win consistently on a slot machine?"
        ],
        Answer:[
        "Yes, 99999... is possible, it's the same probability as any other number in a RNG, that's the point of RNG anyway.",
        "Slot machine are inherently bias In the owner's favor, why on earth will you run a 50 50 slot machine.",
        "No. It's PRNG but in favor of the owner." 
        ],
        Img:["images\\407_0Img.jpg","",""],
        Video:["","",""]
        },  
    pq408qa:{
        Question:[
        "What are the main differences between Bill Nye's solar system model and the Second Life model?",
        "(POGIL) What would happen if there were lots more wolves than there are bunnies? Would the wolves live forever? Record your hypothesis, prediction and experiment results.",
        "POGIL) This model chose to include certain features and exclude other features. For example, this simulation only includes rabbits, wolves, and grass but there are other predators of rabbits and other food sources for rabbits. Why do you think the creators focused on these data elements and not others? How might this introduce bias (concentration on or interest in a particular area) into the simulation?"
        ],
        Answer:[
        "Bill's model actually make sense as a scientific model regarding planet distance, while the 2nd life one is for artistic endeavors only, it's an abstraction of Bill's model.",
        "No, wolf would not live forever, as rabbit runs out, wolves starves to death. And I nailed it with the prediction.",
        "The creator didn't include the entire ecosystem because the point of the simulation is the relationship between wolf, rabbit, and grass. The other organisms may be too distracting for the user. The creator focuses on rabbit, wolf, and grass because it's a relatively simple concept to understand. This might introduce a bias towards rabbits in this simulation because wolves don't have interspecies competition."   
        ],
        Img:["","",""],
        Video:["","",""]
        },  
    pq409qa:{
        Question:[
        "Which generation of the 4-bit simulators above is the most abstract? Why?",
        "Explain the purpose or function of the RAM and the CPU. ",
        "Describe in your own words the difference between the fetch and execute steps. ",
        "Summarize the differences between assembly language and machine language programming."
        ],
        Answer:[
        "I believe the newest ones are more abstract, as they make some options simpler.",
        "RAM stores the variable and commands, CPU executes them.",
        "Fetch is getting the commands and variables ready to be executed, execute is running the commands.",
        "Machine language is 0 and 1, and can be executed by the CPU. Assembly language is the coding language we humans use, need compiler before executing." 
        ],
        Img:["","","",""],
        Video:["","","",""]
        },
    pq410qa:{
        Question:[
        "Is it possible to identify someone, perhaps a patient, knowing just the gender, birth date, and zip code? Why or why not?",
        "Are electronic documents like paper documents? Write 2-3 sentences comparing and contrasting them.",
        "Earlier in the course, you built the Map Tour app. In the final version, what kind of data is collected from the user? Does the user know the data is being collected? Can they opt out of providing data and still use the app?",
        "Is the Privacy Act effective? Explain why or why not.",
        "Are you willing to trade some of your privacy for the convenience of having a computer or a company recommend products to you? Why or why not? Under what circumstances?",
        "How do we leave digital "+"footprints and fingerprints?"+" Do you think this is important for everyone to know? Why or why not?",
        "How have social media platforms such as Twitter, Instagram, Snapchat, etc. affected our privacy?",
        "In this course, you are building apps that collect data from users, the device, and its sensors. What responsibilities do we have as app developers for the data we collect?",
        "Search the web for a recent news story that deals with privacy. LINK to the article and then write a paragraph summarizing the article, including any beneficial or harmful impacts on privacy."
        ],
        Answer:[
        "If you knew this information, you might have just violated HIPAA. These information allow for a patient to be identified, as it is possible to gather a list of individuals matching the descriptions, and said list is not long, making the patients easily identifiable.",
        "Electronic documents last longer, and is sometimes immune from destruction as it is spread to a large number of anonymous individuals. Electronic documents are also less secure, it is possible, depending on the security of the system, that someone from across the world can gain access without permission. The benefit is that is can be shared across the world in just an instant.",
        "Faces are blurred out, and so are license plates, but given enough effort I believe it is possible to identify them. They can not opt out.",
        "Referring to ECPA 1986. It is ineffective as it is outdated.",
        "Yes, we all had in some ways or others traded our privacy to obtain the convenience of computer. When we use google our data is collected, even if you use youtube without logging in, youtube still collect information and make recommendations accordingly. But it allows you to find more videos you might like.",
        "We leave footprints and fingerprints when ever we put identifying information online. even if not placed publicly, since companies sell and collect data. It is likely you had already traded your information for some sort of service.",
        "Social media make life less private as many of us decided to share many aspects of our lives online.",
        "We need to protect provide the user with a relative amount of privacy.",
        "I read https://medium.com/swlh/the-norms-that-undermine-online-privacy-ee117a0ff4e9; In this article the author discusses getting paid for our data that companies are collecting for free and used to monitor our habits and make recommendations, also an instance of potential HIPAA violation by google."
        ],
        Img:[
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],
        Video:[
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ]
        },
     workUnit4qa:{
        Question:["work.gif"],
        Answer:[""],
        Img:["images\\f2Blocked.gif"],
        Video:[""]
        },

//Unit 4 ^^^^^^^^^^^^  ----------------------------------------------------------------------|
//-------------------------------------------------------------------------------------------|
   
    pq502qa:{
            Question:[
            "Include a screenshot of an interesting design that your Logo app made AND a screenshot of the code that created it.",
            "Describe in your own words, with a specific example from Logo, how our choice of abstractions (commands) in this lesson provides us with the ability to solve problems that couldn't be solved with the abstractions (commands) used in Logo Part 1."
            ],
            Answer:[
            "some abstraction here would help... img size forever 500px * 500px",
            "We use parameters to change how much the robot move each time, this allows use to draw shapes of different sizes instead of 10px each time. The picture from the previous question shows hexagons with size of each line set to 15px.",
            ],
            Img:["images\\502_0Img.png",""],
            Video:["",""]
            },

    pq503qa:{
            Question:[
            "(POGIL) Define a pseudocode algorithm that will efficiently play the guessing game.            ",
            "(POGIL) To guess a number between 1 and 100, what's the maximum number of guesses your algorithm would take?            ",
            "(POGIL) To guess a number between 1 and 500, what's the maximum number of guesses your algorithm would take?            ",
            "Suppose you have a deck of cards and you want to find the Ace of Spades. If the deck is shuffled, which is the best search algorithm to use and why?",
            "Give an example of a search problem you encounter in everyday life. Does it use sequential, binary, or some other search algorithm?"
            ],
            Answer:[
            "RNGnumber = math.random()	i = 1	While		If (guess > highestNum/(2^i))	guess = guess + highestNum/(2^i)	i++	else if (guess > highestNum/(2^i))		guess = guess - highestNum/(2^i)		i++	Else	You have the right number	End",
            "7 guesses max, as 7^2=128 is > 100",
            "2^9 = 512, first power of 2 greater than 500",
            "Binary, sequential search only works in an ordered list.            ",
            "Everyday I have to look for a notebook in my backpack. I use sequential search. My backpack is orderly."
            ],
            Img:["","","","",""],
            Video:["","","","",""]
            },  

    pq504qa:{
            Question:[
            "Bubble and Merge Sort are referred to as comparison sorts because the values of the two pieces of data are compared during each step. Why are the radix and bucket sort not comparison sorts?",
            "Which sort do you think would be the fastest if you had to sort more than one deck of cards? Why?",
            ],
            Answer:[
            "They don't compare with other index, bucket just look at the item and look at the buckets and throw it in. It's like trash sorting, you don't compare apple and banana, you just put them both in composing.",
            "Merge sort, merge sort is better for sorting large amount of items. It's n log n, instead of N^2 ",
            ],
            Img:["",""],
            Video:["",""]
            },  
            
    pq505qa:{
            Question:[
            "Describe the significance of the global variable index. How is indexing used with lists in this app?",
            "Describe how parallel lists were used in this app. Why was the parallel structure of the lists necessary?",
            "Include screenshots of your code for exercises 2 and 3 from the Enhancements section.",
            "Include a screenshot of the code that added your extra question (exercise 4) AND explain why the code for the buttons worked without any changes after the addition of the extra question."
            ],
            Answer:[
            "Indexing were used to index the question and to pick it out from the list.",
            "Parallel lists are used in quiz app to 'line up' the question and the answers. This structure is necessary as there is no object in MIT app inventor and we could've use list within list but parallel list manage the complexity of the app.",
            "",
            "The code works because I use an equivalent List.Length(), the .length returns the number of items in the list, thus each time I add to the list, I do not need to go back and change the code."
            ],
            Img:["","","images\\505_2Img.png","images\\505_3Img.png"],
            Video:["","","",""]
            },

    pq506qa:{
            Question:[
            "Describe your solution for the second project that added a Search button. Provide a SCREENSHOT of the search button click code that uses a complex algorithm with loops and lists. Why was a loop necessary?",
            "Write AP text-style pseudocode for a linear search that searches through a list to find an item x. It should display found if the x is equal to an item in the list.",
            "Give brief descriptions of the enhancements you added to your app for the third project, a quiz topic of your own choosing. Provide SCREENSHOTS of important blocks and describe how you used them to solve certain programming problems.",
            "To practice for the Create project prompt, grab a SCREENSHOT of a program code segment from your project that implements an algorithm that includes two or more algorithms within it and includes mathematical and/or logical concepts. An ideal algorithm is a procedure that you created that includes calls to other procedures that you created, where at least one of those includes math or logic (ifs or loops). Describe how each of the two algorithms within the bigger algorithm functions independently as well as in combination to form a new algorithm. Basically, answer 2c! ",
            ],
            Answer:[
            "You must loop through the lists to search the questions, this is a case of sequential search.",
            "for (i = 0;i<List.length;i++){ If (List[i] = x){ Display  x}}",
            "SHAKE to skip a question, I added an a listener that listen for shake.",
            "Within, the display question can set the label's text to the question,  the global variable answers to the answer of the question, and the picture to the corresponding question. This works without checking if the question had already been answered because it just pulls whatever information is the index of the list. The Check_If_Question_had_been_answred function checks if the index of the list contains a question that had already been answered to avoid double scoring. When both put together, it first check if the index is already answered, then it displays a new question.",
            ],
            Img:["images\\506_0Img.png","","images\\506_1Img.png","images\\506_2Img.png"],
            Video:["","","",""]
            },

    pq507qa:{
            Question:[
            "Present the results and the analysis you did for each of the experiments in this lesson, -- i.e., the table of running times you observed, the graphs you created, and the conclusions you reached regarding the searching algorithms and sorting algorithms. Provide a clear description, referring to your graphs and your tabulated data (which are included, or linked to), to explain how you arrived at your conclusions.",
            ],
            Answer:[
            "The fastest one is merge sort for the sorting algorithm, and binary search for the search algorithm. The data are here: (https://docs.google.com/spreadsheets/d/1HNDpe9B1deDsmtdVR_XqkTD5aw29LW0ssdIaiy9zpCs/edit?usp=sharing)"
            ],
            Img:[""],
            Video:[""]
            },

    pq508qa:{
            Question:[
            "(POGIL) A password scheme consists of a minimum password length and the different types of symbols (i.e., letters, numbers, specials) that can be used in the password. Using the Password Strength Calculator, determine the optimal scheme for withstanding a brute force attack of at least 10 years by an ordinary PC performing 100 million tests per second.",
            "(POGIL) According to this 2012 article, a password-cracking computer can try 350 billion passwords per second. How would you have to modify your scheme to withstand a 10-year attack by this specially designed computer?",
            "(POGIL) That article was written in 2012. Password cracking technology has probably gotten a lot better. Suppose the number of passwords that can be checked per second doubles every year, use the Password Strength Calculator to determine an optimal password scheme for the year 2020?",
            "(POGIL) For the routes starting and ending at Trinity College, identify the nearest neighbor route and the optimal route. What does this show you about the nearest neighbor heuristic?",
            ],
            Answer:[
            "The optimal scheme for withstanding a brute force attack for 10 years would have a length of 9 years and all possible complications: Uppercase, lowercase, numbers, and special characters.",
            "This can be nullify by using a password length of 11, include Uppercase, Lowercase, numbers and special characters.",
            "An optimal password scheme for the year 2020 based on this would be 12 characters long and contains Uppercase letter. Lower case letters, numbers and special characters. This scheme would take 216.8 year to crack and ”has 612,709,757,329,767,000,000,000 possible combinations!” ",
            "The optimal route that visits all schools would have the individual travel to colleges A,B, then C and then back to Trinity College, or in the reverse order (C,B,A). This shows the nearest neighbor heuristic is not the best, but it's good enough, and solves intractable problems.",
            ],
            Img:["","","",""],
            Video:["","","",""]
            },

    pq509qa:{
            Question:[
            "How do web search tools make it more efficient to find information?",
            "When you type a word or phrase into the Google search engine, what is the search algorithm that is being used? Explain in your own words the process used by Google's search engine.",
            "What is a captcha? How has the collective efforts of Internet users contributed to analyzing images through captchas?",
            "\"The architecture of human knowledge has changed as a result of search.\" Do you agree? Explain your reasoning.",
            "What are the differences between Figures 4.10 and Figure 4.11 in the book? Why are there differences even though they are both a Google search results page?",
            "How do you think mobile computing might have influenced web searches? Would you retain your search history or delete it? Why?",
            "Would you retain your search history or delete it? Why?",
            "Should a researcher place absolute trust in a search engine? Why or why not?",
            "The authors claim \"search is a new form of control over information\" (p. 111) and \"search is power\" (p. 145). Why might it be important to talk about the social implications of searching on the Internet?",
            "How have search trends been used to predict information? What are the positive and negative impacts of using trends to make predictions?",
            "Find and read an article about web searches or algorithms. Write a 3-4 paragraph summary of the article. Include the author's name, the title of the article, the date it was published, and a link to the article.",
            ],
            Answer:[
            "Web search tool allows the user to access more revelevent information quickly.            ",
            "Instant search, google guess what you will type next, google work by using the user's geographic location, and past history to rank pages, this way the user can get the most relevant information quickly. Google use an algorithm canll Pagerank.",
            "Captcha is the 'I'm not a bot' test, it uses images from the internet, so if you upload an image to the database your image is a contribution to robot training and human deceiving.",
            "I agree, as we know more, we get more information into the search result, if 1600s have a search engine they bloodletting would show up a lot in a query for treatment.",
            "Language differences aside, one contains more information and one contains less. This difference is due to location and politics",
            "Mobile computing makes a larger data set of web search history. I use incognito in mobile phones, so my search history is basically automatically deleted. It's fine by me as I don't do much searching on mobile phone and it free up some local storage space.",
            "I usually use retain my history as it makes finding websites I used easier, deleting history only means I can't see it.",
            "You should not absolutely trust a search engine, results can be ads and ranks could be bought. However the mainstream ones generally it's trustworthy. ",
            "Your search engine decide what information you have access to. We can use that to censor sensitive information and enforce security.",
            "If a lot of people search for a term, then you are also likely to search for that term. Positive: easy to search for things. Negative: your information is also collected to personalize your results.",
            "https://www.searchenginejournal.com/how-search-algorithms-work/252301/#close (Dave Davies, May 10, 2018.)	In this article the author talked about how google use an algorithm to rank pages. The author introduces the reader to the idea that algorithm is a recipe, a procedure for a computer to do things with. The author stresses however. An algorithm differs from a formula as it can be changed to be personalized. The author also suggests that thinking google uses an algorithm with sub-algorithms, each do different things but ultimately comes together in the end. The author also mentions ‘Entities', something that is unique and distinguishable. In an analogy of a dinner, an entities would be the people eating. Using entities the algorithm can determine what is most relevant given the context, and should be displayed.",
            ],
            Img:["","","","","","","","","","","","",""],
            Video:["","","","","","","","","","","","",""]
            },

    pq602qa:{
        Question:[
            "What is bandwidth? What do you think affects the differences in bandwidth globally as well as in different locations in the U.S.?",
            "What is the latency? How does it differ from bandwidth? Why is it a useful measure?",
            "What is the digital divide? What are some ways to reduce the effects of the digital divide?"
            ],
        Answer:[
            "Bandwidth is how much data can be sent over the internet.                   ",
            "Latency is also known as lag, a delay between sending the information to when it's received. It's different from bandwidth because bandwidth is a measurement of bits of data while latency is the measurement of time.",
            "The division between people who have access to the internet and people without. Some ways to reduce it is by improving the living condition of more remote regions, improve the infrastructure so they are on the grid."
            ],
        Img:["","","",""],
        Video:["","","",""]
        },

    pq603qa:{
        Question:[
            "(POGIL Activity 1) How does the geographical distance between the source and destination hosts on a network affect latency?",
            "What are the benefits of packet switching?",
            "(POGIL Activity 2) Missing Packets. What should happen if a packet goes missing? Who (which layer) would handle this? What action would they have to take? And what additional information would be needed in the packet in order to handle it?",
            "(POGIL Activity 2) Security/Privacy. As the packets are being transmitted through the network, can people other than the sender and receiver read the messages? What methods can we use to protect the message?"
            ],
        Answer:[
            "The data sent actually has to physically travel to said destination, so the further the destination from the host, the longer it'll take.            ",
            "Packet switching allows for an organized way to send data over the internet. More importantly, it's decentralized nature allows the message to take alternative routes if the most optimal routes are down.",
            "When packets are missing, the Transport layer attempt to recover it by requesting another one, if the missing packet can not be recovered, it will probably get skipped. To recover a packet the TCP would need IP header of the sender and TCP header, so it knows where the packet belongs in the message.",
            "Yes, anyone connected to the network can intercept the message, to protect our information we use encryption.            "
            ],
        Img:["","","",""],
        Video:["","","",""]
        },

    pq604qa:{
        Question:[
            "What is DNS and how does it work? How does DNS help you connect to a web server like Amazon?",
            "Include a screenshot of your message log in the DNS Simulation app in Activity 1.            ",
            "(POGIL) Discuss why and how a list variable would be a better choice for storing the recipient's multiple messages in the DNS simulation app.",
            ],
        Answer:[
            "DNS is like a phone book, it looks up the IP address of a website host/server you want to visit.",
            "",
            "A list of a variable would allow for data structure and better organization, ie. easier to keep track of how many items are in the list, easier to add new values, etc..."
            ],
        Img:["","images\\604_1.png","",],
        Video:["","","",]
        },

    pq605qa:{
        Question:[
            "Post a screenshot of your code for the caesarDecrypt function.",
            "Explain the difference between a function and a procedure. Give an example of a function.    ",
            "Explain the difference between global and local variables. Why are local variables easier to debug than global variables?"
            ],
        Answer:[
            "",
            "The function returns a value, while the procedure performs a task and doesn't return anything. An example of a function called add(), inside you add 2 values are returns it. So if you put all(1,2) the functions returns.            ",
            "The scope is different. Global variables can be accessed from anywhere of the code while the local variables can only be accessed within its function.            "
            ],
        Img:["images\\605_0.png","",""],
        Video:["","",""]
        },

    pq606qa:{
        Question:[
            "Explain briefly how the following substitution ciphers can be broken: Caesar cipher, Simple substitution cipher, Vigenere cipher.",
            "Define symmetric encryption.            ",
            ],
        Answer:[
            "Both Caesar and simple sub can be broken with frequency analysis. You can roughly match the frequency of the letters used in the encrypted text and the plain English language. Vigenere cipher is trickier, however, if the text is long enough, a pattern will emerge, then you can count the factor of the gap(number of letters in between each appearance), break the encrypted text into segments of that length, then brute force.            ",
            "The key to encode and decode are the same, so the recipient and the sender need to share the key.            ",
            ],
        Img:["",""],
        Video:["",""]
        },

    pq607qa:{
        Question:[
            "Explain in your own words how public-key encryption is not symmetric.            ",
            "Cryptography relies on open standards - a protocol or standard that is publicly available. Why are open standards necessary?",
            ],
        Answer:[
            "Open standards allow encryption to be used without infringing on someone's copyright.",
            "Public key encryption takes advantage of a one-way function, basically a function that is easy in one direction but difficult in the reverse direction. You can then encrypt with your private key, exchange the encrypted item, then decrypted with the private key, and get the same result.            ",
            ],
        Img:["",""],
        Video:["",""]
        },

    pq608qa:{
        Question:[
            "For each of the 5 bugs in the Caesar Cipher app, explain what the bug was, how to fix it, and the type of error (semantic or syntax). If you wish, you can take a picture of your corrected blocks and then annotate it to identify and describe the bugs you fixed.",
            ],
        Answer:["Bug1: a global variable PLAIN_ALPHABET is used instead of the local variable. Bug2: encrypt function returns the alphabet instead of the ciphertext. Bug3: The shift in decrypt is hardcoded to 5. Bug4: the text is displayed in the wrong text box. Bug5: returned ciphertext instead of plaintext        "],
        Img:[""],
        Video:[""]
        },

    pq609qa:{
        Question:[
            "What does it mean to say that the government would like to have a back door to the encrypted data on a mobile phone?",
            "What are the main legal and ethical reasons for letting the government have a back door?",
            "What are the main legal and ethical reasons against letting the government have a back door?",
            "Do you think Apple should abide by the Court's decision and unlock the mobile phone in the San Bernardino case? Explain.",
            ],
        Answer:[
            "The government wants to have a way to bypass the security measures (such as password) of people so they can get more information and less privacy for the individual.            ",
            "The government sometimes need important information they can not access without the criminal/terrorist's password/decrypt key. The ethnical reason is to help the government protect the public.            ",
            "The government would gain a tremendous amount of power if they can bypass our locks and gain access to our information whenever they wanted. This would allow for mass surveillance which is against the core ideal of the United States.",
            "I think Apple did the right thing, considering the FBI already had enough information regarding the case. The addition of a back door would make it hard to be sure that our private data is private. Of course, more data would make the nation more secure but does add loads of data of normal civilians with no criminal record like you and I make FBI's job any easier processing all those data trying to find a potential terrorist?"
            ],
        Img:["","","",""],
        Video:["","","",""]
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
    window.location.assign("Unit3.html");
});

$("#JumpUnit4").click(function(){
    window.location.assign("Unit4.html");
});

$("#JumpUnit5").click(function(){
    window.location.assign("Unit5.html");
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


