import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare const $: any;
declare const moment: any;
declare const RiveScript: any;
declare const p5: any;
declare const play: any;



function setup() {
    debugger;
    var TimeChat = moment().format('hh:mm a');
    const bot = new RiveScript();
    bot.loadFile("assets/js/trainedBrain.rive", brainReady, brainError);
    var speech = new p5.Speech();
    // speech.speak('Hello! I am bot, how may i help you ');
    var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)

    foo.onResult = showResult; // bind callback function to trigger when speech is recognized

    foo.continuous = true;
    foo.interimResults = false;

    foo.onEnd = speechEnded;
    foo.start();
    var button = $('#button');
    var userinput = $('#user_input');
    var reply = $('#output');
    var textVal = $('#para1');

    function brainReady() {
        console.log("Brain Ready");
        bot.sortReplies();
    }

    function brainError() {
        console.log("Brain Error");
    }


    console.log(foo);

    function speechEnded() {
        debugger;
        this.speechEnd = false;
        /*let start = Date.now().getTime();*/
        //        alert();
    }

    function showResult() {
        debugger;
        if (foo.resultValue) {
            var input = foo.resultString;
            console.log(input);
            let input1 = userinput.val();
            userinput.val(input);
            $('.chatbot-div').append('<div class="first card mb-3 shadow-sm"><div class="card-body py-2 px-3 bg-primary text-white rounded"><p class="mb-0">' + input + '</p><small class="timedate"><i class="fas fa-clock"></i>' + " " + TimeChat + '</small></div></div>');

            // if(input =='shape of you'){
            //    var vid1 = document.getElementById("myVideo");
            // setTimeout(function(){
            //     vid1.play();
            //     },4000);
            //  }
            if (input == 'cancel') {
                debugger;
                location.reload();
            }

        }
        //  if(input =='closer'){
        // var vid = document.getElementById("closersong");
        // setTimeout(function(){
        //     vid.play();
        //     },4000);
        //  }


        var output = bot.reply('local-user', input);



        speech.speak(output);
        setTimeout(function () {
            $('.chatbot-div').append('<div class="card mb-3 shadow-sm"><div class="card-body py-2 px-3 bg-secondary text-white rounded"><p class="mb-0">' + output + '</p><small class="timedate"><i class="fas fa-clock"></i>' + " " + TimeChat + '</small></div></div>');
        }, 1500);
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

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
    userText: any = '';
    bot: any;
    speechEnd:boolean = true;
    constructor() { }

    ngOnInit() {
        setup();
    }
    public fnInitBot(form: NgForm) {
        this.fnBotReply(form);
    }

    fnBotReply(value) {
        debugger;
        this.bot = new RiveScript();
        this.bot.loadFile("assets/js/trainedBrain.rive", this.brainReady(), this.brainError());
        var TimeChat = moment().format('hh:mm a');
        var button = $('#button');
        var userinput = $('#user_input');
        var reply = $('#output');
        var textVal = $('#para1');
        var input = value.userText;
        let input1 = userinput.val();
        userinput.val(input);
        $('.chatbot-div').append('<div class="first card mb-3 shadow-sm"><div class="card-body py-2 px-3 bg-primary text-white rounded"><p class="mb-0">' + input + '</p><small class="timedate"><i class="fas fa-clock"></i>' + " " + TimeChat + '</small></div></div>');
        var output = this.bot.reply('local-user', input);
        setTimeout(function () {
            $('.chatbot-div').append('<div class="card mb-3 shadow-sm"><div class="card-body py-2 px-3 bg-secondary text-white rounded"><p class="mb-0">' + output + '</p><small class="timedate"><i class="fas fa-clock"></i>' + " " + TimeChat + '</small></div></div>');
        }, 1500);

    }

    brainReady() {
        debugger;
        console.log("Brain Ready");
        this.bot.sortReplies();
        var reply = this.bot.reply('local-user', 'set');

    }

    brainError() {
        console.log("Brain Error");
    }

    fnInitChatBot(){
        setup();
    }
}
