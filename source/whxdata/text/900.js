rh._.exports({"0":["timeline_position"],"1":["timeline_position"],"2":["timeline_position"],"3":["\n  ","\n  ","\n  ","This variable holds the current position (moment) a time line is currently at. You can change this value to skip parts of the time line, or to repeat parts or to start the time line again from the beginning.","\n  "," ","\n  ","\n  ","timeline_position;","\n  "," ","\n  ","\n  ","Real (single precision floating point value)","\n  "," ","\n  ","\n  ","if !timeline_running","     {\n    ","     timeline_position = 0;","     timeline_running = true;","     }\n  ","\n  ","The above code will check to see if the instance is running a time line, and if it is not then it resets the assigned time line to start at the first moment and then starts it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Timelines","\n        ","Next: ","timeline_loop","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["timeline_position"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"900"})