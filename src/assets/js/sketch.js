//var speech;
//var text;
//function setup(){
//  noCanvas();
//    
//  text = document.getElementById('para1').innerHTML;
//  speech = new p5.Speech();
//  speech.speak('Welcome Dileep Singh, How are u Today ?');
//      
//  
//}
var TimeChat = moment().format('hh:mm a');
function setup(){
    debugger;
    noCanvas();
    
    const bot = new RiveScript();
    bot.loadFile("assets/js/trainedBrain.rive", brainReady, brainError);
    speech = new p5.Speech();
    debugger;
    speech.speak('say start assessment');
    var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
    
    foo.onResult = showResult; // bind callback function to trigger when speech is recognized
    
    foo.continuous = true;
    foo.interimResults = false;
        
    foo.onEnd = speechEnded;
    foo.start(); 
    var button = select('#button');
    var userinput = select('#user_input');
    var reply = select('#output');
    var textVal = select('#para1');   
   
    function brainReady(){
        console.log("Brain Ready");
        bot.sortReplies();
    }
    
    function brainError(){
        console.log("Brain Error");
    }
    
   
    console.log(foo);

    function speechEnded(){
        debugger;
        /*let start = Date.now().getTime();*/
//        alert();
    }
    
function showResult(){
    debugger;
    if(foo.resultValue){
        var input = foo.resultString;
        console.log(input);
        let input1 = userinput.value();
        userinput.value(input);
        $('.chatbot-div').append('<div class="first card"><div class="card-body">'+ input +'<small class="timedate"><i class="fas fa-clock"></i>'+" "+ TimeChat +'</small></div></div>');
        
        if(input =='shape of you'){
           var vid1 = document.getElementById("myVideo");
        setTimeout(function(){
            vid1.play();
            },4000);
         }
        if(input == 'cancel'){
            debugger;
            location.reload();
        }

    }
         if(input =='closer'){
        var vid = document.getElementById("closersong");
        setTimeout(function(){
            vid.play();
            },4000);
         }
                
        
        var output = bot.reply('local-user', input);
    
        

        speech.speak(output);
        setTimeout(function(){
            $('.chatbot-div').append('<div class="second"><p>'+ output +'</p><p class="timedate"><i class="fa fa-clock-o"></i>'+" "+ TimeChat +'</p></div>');
        },1500);
        reply.html(output);
    }
    
    
//   console.log(foo.resultString); // log the result
//    var abc = foo.resultString;
//    console.log(abc);
//    
//    speech.speak("You Said" + abc);
//    
//    
//    if(abc =='shape of you'){
//        window.open('https://www.youtube.com/results?search_query='+abc);
//        speech.speak("Here is you matches");
//        var vid = document.getElementById("myVideo");
//        setTimeout(function(){
//            vid.play();
//            },3000);
//    }
//    else{
//        speech.speak('No Match Found, Listen this song');
//        var vid = document.getElementById("closersong");
//        setTimeout(function(){
//            vid.play();
//            },4000);
//        
//    }
    
   
    


    
   

}
     

//function mousePressed(){
//    let voice = speech.voices;
//    let randomVoices = random(voice);
//    console.log(voice);
//    console.log(randomVoices.name);
//    
//    speech.setVoice('Google US English');
//    speech.speak(text);
//}