rh._.exports({"0":["async_load"],"1":["async_load"],"2":["async_load"],"3":["\n  ","\n  ","\n  ","This variable is ","global"," in scope and is used to hold a ","DS map"," when used in the ","Asynchronous Events",",\n    and -1 at all other times. The actual contents of the DS map will depend on the type of asynchronous event ","callback",", as well as the function that was used to trigger the event, so refer to\n    the individual pages for those events for full details of all the possible DS map contents.","\n  "," ","\n  ","\n  ","async_load;","\n  "," ","\n  ","\n  ","Real (integer value)","\n  "," ","\n  ","\n  ","sprite =  sprite_add(\"player_5.png\", 16, true, true, 0, 0);","\n  ","The above code would be called in an event in the game to add a sprite from an included file. This would then trigger the ","Image Loaded"," Asynchronous Event, where you would parse the ","async_load"," map:","\n  ","if ds_map_find_value(async_load, \"id\") == sprite","     {\n    ","     if (ds_map_find_value(async_load, \"status\") >= 0)","         {\n    ","         sprite_index = sprite;","         }\n    ","     }\n  ","\n  ","The above code will first check the ID of the ","async_load"," map, then check the status of the callback. If the value is greater than or equal to 0 (signaling success) the result from the callback will then be used to set the sprite index of the\n    instance to the newly loaded image.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Global Variables","\n        ","Next: ","score","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["async_load"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"481"})