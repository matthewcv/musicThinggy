/**
 * Created by matthew on 12/8/2014.
 */
(function () {
    "use strict";

    angular.module("theApp",[])
        .controller("MainController",[MainController]);




    function MainController(){
        this.title = "music thinggy";
        this.isPlaying = false;
        this.volume = 1;
        window.AudioContext = window.AudioContext||window.webkitAudioContext;
        this.context = new AudioContext();


        //this.source.start();
    }


    MainController.prototype = {
         toggleTone:function(){
             if(this.isPlaying){
                 this.source.stop(0);
             }else{
                 this.createOscillator();
                 this.source.start(0);
             }

             this.isPlaying = !this.isPlaying;

         },
        createOscillator: function () {
            this.source = this.context.createOscillator();
            this.gain = this.context.createGain();
            this.gain.gain.value = this.volume;
            this.source.connect(this.gain);
            this.gain.connect(this.context.destination);
        },
        volumeChange:function(){
            this.gain.gain.value = this.volume;
        }
    }

})();


/* Notes
* 1) once you start an oscillator node, you can only stop it once and you can never re-start it
* */