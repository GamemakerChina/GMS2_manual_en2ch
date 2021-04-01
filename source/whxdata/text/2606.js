rh._.exports({"0":["scheduler_resolution_set"],"1":["scheduler_resolution_set"],"2":["scheduler_resolution_set"],"3":["\n  ","\n  ","\n  ","This function is used to change the resolution of the Windows thread scheduler. The resolution value supplied in the argument needs to be in ","milliseconds",".","\n  ","By default, ","GameMaker Studio 2"," uses a resolution of 1 millisecond, which is the smallest resolution allowed and gives the best performance. Changing the resolution to a higher value may affect performance negatively,\n    but it may also reduce power consumption.","\n  ","You can supply -1 as the argument to revert the resolution to its default value (as set by Windows). Note that changing the scheduler's resolution will impact all processes running at the same time as your game.","\n  ","NOTE",": This function is for ","Windows ","only.","\n  "," ","\n  ","\n  ","scheduler_resolution_set(milliseconds);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","milliseconds","\n        ","The new resolution value (in milliseconds) or -1 for default","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","scheduler_resolution_set(2);","\n  ","This example sets the resolution of the Windows thread scheduler to 2 milliseconds.","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","OS And Compiler","\n        ","Back: ","\n        ","Next: ","os_browser","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["scheduler_resolution_set"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2606"})