rh._.exports({"0":["tilemap_get_frame"],"1":["tilemap_get_frame"],"2":["tilemap_get_frame"],"3":["\n  ","\n  ","\n  ","Since tiles can be animated, it can sometimes be useful to know which frame is currently being drawn and react accordingly, so with this function you can retrieve the current frame index for a given tile map. You give the tile map element ID (which\n    you get when you create a tile map element using ","layer_tilemap_create()"," or when you use the function ","layer_tilemap_get_id()","), and the function will return\n    the frame index.","\n  "," ","\n  ","\n  ","tilemap_get_frame(tilemap_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","tilemap_element_id","\n        ","The unique ID value of the tile map element to get the frame index of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (between 0 (inclusive) and the maximum number of frames of animation (exclusive))","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Tiles_Traps\");"," var map_id = layer_tilemap_get_id(lay_id);"," if tilemap_get_frame(map_id) >= 2 && tilemap_get_frame(map_id) < 4","     {\n    ","     global.activate = true;","     }\n    "," else\n    ","     {\n    ","     global.activate = false;","     }\n  ","\n  ","The above code checks the current animation frame for the given tile map on the given layer, and sets a global variable based on the return value.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Tile Map Layers","\n        ","Next: ","tilemap_get_tile_width","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["tilemap_get_frame"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1066"})