rh._.exports({"0":["skeleton_animation_get_ext"],"1":["skeleton_animation_get_ext"],"2":["skeleton_animation_get_ext"],"3":["\n  ","\n  ","\n  ","A single skeletal animation sprite can have various animation sets, and these sets can be assigned different tracks so that you can \"mix and match\" animation sets. This function will return the name of the animation set currently used by the\n    given track number (as set by the function ","skeleton_animation_set_ext",").","\n  "," ","\n  ","\n  ","skeleton_animation_get_ext(track);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","track","\n        ","The track number to get the animation set name of.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","if skeleton_animation_get_ext(1) != \"bodyfight\"","     {\n    ","     skeleton_animation_set_ext(\"bodyfight\", 1);","     }\n  ","\n  ","The above code will change the animation set being used by track 1 to \"bodyfight\" if it is not already.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Animation","\n        ","Next: ","skeleton_animation_set_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_animation_get_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"644"})