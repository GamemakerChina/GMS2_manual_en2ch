rh._.exports({"0":["highscore_add"],"1":["highscore_add"],"2":["highscore_add"],"3":["\n  ","\n  ","\n  ","With this function you can add a name and a score to the internal global high score list. There is no need to check the value to see if it is high enough to enter into the score list as GameMaker Studio 2 will only store\n    those values that are greater than the tenth position stored.","\n  "," ","\n  ","\n  ","highscore_add(str, numb);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","str","\n        ","The string (name) to attribute the score to","\n      ","\n      ","\n        ","numb","\n        ","The number (score) to add.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if lives = 0","     {\n    ","     highscore_add(global.Name, score);","     score = 0;","     room_goto(rm_MainMenu);\n    ","     }\n  ","\n  ","The above code will check the lives and if they are set to 0, it will add the current score and the string held in the global variable \"Name\" into the high score list, before finally setting the score to 0 and sending the player to the room\n    indexed in \"rm_MainMenu\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Game Control","\n        ","Next: ","highscore_name","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["highscore_add"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1172"})