rh._.exports({"0":["texture_global_scale"],"1":["texture_global_scale"],"2":["texture_global_scale"],"3":["\n  ","\n  ","\n  ","This function allows you to control the scaling of the texture pages on load from the WAD file that is part of your final game executable. The input value must be a power of two value and will work such that:","\n  ","\n    ","To set the texture pages to be 1:1 use ","texture_global_scale(1)","\n    ","To half textures all the time use ","texture_global_scale(2)","\n    ","To quarter them use ","texture_global_scale(4)",", etc...","\n  ","\n  ","In this way you can better control texture page memory usage on platforms with low memory issues. Note that textures pages are created on demand from the WAD, and so you can either call this at the start of the game to load all textures scaled, or you\n    can call it at specific times to load specific textures, in which case you'd probably want to call ","draw_texture_flush()"," before calling this function, then use the pre-fetch functions to get the correct\n    texture pages into memory.","\n  "," ","\n  ","\n  ","texture_global_scale(pow2integer);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","pow2integer","\n        ","The scale factor to use (1, no scale, 2, half scale, 4, quarter scale, etc...)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_texture_flush();"," texture_global_scale(2);\n    "," sprite_prefetch(spr_Trees);\n  ","\n  ","The above code will flush all textures from memory, then set the texture scaling to 2 (so texture pages are half size) and then finally pre-fetch the texture page that the sprite \"spr_Trees\" is contained within.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Textures","\n        ","Next: ","draw_texture_flush","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["texture_global_scale"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1529"})