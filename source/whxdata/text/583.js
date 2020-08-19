rh._.exports({"0":["sprite_get_speed"],"1":["sprite_get_speed"],"2":["sprite_get_speed"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve the sprite speed as defined for the sprite resource in the ","Sprite Editor",". The value returned can then be used, for example, to calculate how\n    many frames may be drawn for different ","image_speed",". Note that the return value will be very different depending on the ","type"," of speed\n    that was applied in the Sprite Editor, either ","Frames Per Second",", or ","Frames Per Game Frame",". The following two examples illustrate this:","\n  ","\n    ","If you have a sprite that draws 1 frame per ","second"," and set the image speed to 0.5 it will draw at 0.5 frames per second. If your game frame rate is 60 frames per second then the sprite will draw 1 frame for every 120\n      game frames.","\n    ","If you have a sprite that draws 1 frame per ","game frame"," and set the image speed to 0.5 it will draw 0.5 frames per game frame. If your game frame rate is 60 frames per second then the sprite will draw 30 frames for\n      every 60 game frames.","\n  ","\n  ","You can find out what the type of animation speed was used when defining the sprite using the function ","sprite_get_speed_type()",", and you can set the animation speed ","and"," type\n    using the function ","sprite_set_speed()",".","\n  "," ","\n  ","\n  ","sprite_get_speed(index)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the sprite to get the speed of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","s_speed = sprite_get_speed(sprite_index);"," s_type = sprite_get_speed_type(sprite_index);","\n  ","The above code gets the sprite speed and the sprite animation type and stores them in instance variables for future use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Information","\n        ","Next: ","sprite_get_speed_type","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_get_speed"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"583"})