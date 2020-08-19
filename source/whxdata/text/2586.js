rh._.exports({"0":["fps_real"],"1":["fps_real"],"2":["fps_real"],"3":["\n  ","\n  ","\n  ","In GameMaker Studio 2 there are two main ways that can be used to tell the speed at which your game runs. The ","game speed"," (as specified in the Game Options) and the ","fps","    (frames per second). These values are often confused, but basically one is the number of game steps that GameMaker Studio 2 is supposed to be completing in a second (game speed), while the other is the number of CPU steps that GameMaker Studio 2    is actually completing in a second (the real fps), and this value is generally much higher than the game speed, but will drop as your game gets more complex and uses more processing power to maintain the set room speed.","\n  ","This ","read-only"," variable returns the current fps as an integer value. Please note that the function will only update once every step of your game and so may appear to \"jump\" from one value to another, but this is quite normal.","\n  ","NOTE",": On the HTML5 target, this variable will instead return a multiple of the monitor refresh rate as GameMaker Studio 2 has to rely on the browser for timing and despatch.","\n  "," ","\n  ","\n  ","fps_real","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if debug_mode","    {\n    ","    draw_text(32, 32, \"FPS = \" + string(fps_real));","    }\n  ","\n  ","The above code will check to see if the game is in debug mode and if it is it will display the current real fps on the screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Debugging","\n        ","Next: ","debug_mode","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["fps_real"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2586"})