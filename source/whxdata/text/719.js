rh._.exports({"0":["audio_channel_num"],"1":["audio_channel_num"],"2":["audio_channel_num"],"3":["\n  ","\n  ","\n  ","With this function you can set how many audio channels are available for playing audio in GameMaker Studio 2. What this basically means is that you give the number of simultaneous sounds that can be played at any one time, and if\n    the number exceeds the amount, those sounds with a lower ","priority"," are stopped to free up a channel for the sounds with a higher ","priority",". You can use this function to optimise your game for devices\n    as the lower the number of channels for audio the better the performance, but bear in mind that this may also cause noticeable cut off of certain sounds if many are played at once.","\n  "," ","\n  ","\n  ","audio_channel_num(num);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","num","\n        ","Number of available audio channels (default is 128).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","switch (os_browser)","    {\n    ","    case browser_not_a_browser:","       switch (os_type)","          {\n    ","          case os_windows:","          case os_macos:","             audio_channel_num(200);\n    ","             break;\n    ","          default:\n    ","             audio_channel_num(64);\n    ","             break;\n    ","          }\n    ","       break;\n    ","    default:\n    ","       audio_channel_num(16);\n    ","       break;\n    ","    }\n  ","\n  ","The above code checks the platform that the game is running on and changes the number of available sound channels to increase performance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_debug","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_channel_num"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"719"})