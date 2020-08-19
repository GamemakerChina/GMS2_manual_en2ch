rh._.exports({"0":["script_execute"],"1":["script_execute"],"2":["script_execute"],"3":["\n  ","\n  ","\n  ","This function was originally designed for calling script ","assets"," in a dynamic way, but with the introduction of user-defined functions it can now be used in two ways:","\n  ","\n    ","The first way is to support ","legacy"," scripts, where each script was a single function and the title of the script was also the name of the function. Used in this way, it will work as before and It will run a user created script asset and pass\n      the given arguments into it. Note that it isn't actually calling the ","script"," in this case but, the ","script function"," of the same name within the script. ","\n    ","The second way is to call a function from a script asset that contains multiple functions or variable definitions. In this case you would provide the function name and the arguments it requires rather than the script asset name. Note that this will only work for ","script functions"," and not for ","methods",", as only script functions have a script ID assigned to them.","\n  ","\n  ","While this function is designed primarily for legacy support it is not deprecated as it still has it's place in networking and remote procedure call situations. It is also worth noting that this function\n    is slow, and using it a lot may adversely affect performance.","\n  "," ","\n  ","\n  ","script_execute(scr, arg0, arg1, arg2..., etc...);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","scr","\n        ","The name of the function/script that you want to call","\n      ","\n      ","\n        ","arg0, arg1, arg2..., etc...","\n        ","The different arguments that you want to pass through to the function/script","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Will depend on the return value from the script/function being called","\n  "," ","\n  ","\n  ","script_execute(choose(move_up, move_down, move_left, move_right), irandom(5));","\n  ","The above example code will use ","script_execute"," to choose one of four user defined functions (in this case related to movement) and pass a random integer to it as the first argument.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Scripts","\n        ","Next: ","script_exists","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["script_execute"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"830"})