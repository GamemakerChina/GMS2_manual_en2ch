rh._.exports({"0":["audio_resume_all"],"1":["audio_resume_all"],"2":["audio_resume_all"],"3":["\n  ","\n  ","\n  ","With this function you can resume all sounds that have been paused previously.","\n  "," ","\n  ","\n  ","audio_resume_all();","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if keyboard_check_pressed(ord(\"P\"))","    {\n    ","    global.Pause = !global.Pause;","    if global.Pause","       {\n    ","       audio_pause_all();\n    ","       }\n    ","    else\n    ","       {\n    ","       audio_resume_all();\n    ","       }\n    ","    }\n  ","\n  ","The above code checks for a press of the keyboard key \"P\" and if it detects one it sets the global variable \"Pause\" to ","true"," or false and then either pauses all sounds or restarts all previously\n    paused sounds.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_stop_sound","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_resume_all"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"698"})