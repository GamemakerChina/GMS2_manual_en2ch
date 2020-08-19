rh._.exports({"0":["draw_sprite_part"],"1":["draw_sprite_part"],"2":["draw_sprite_part"],"3":["\n  ","\n  ","\n  ","With this function you can draw part of any sprite at a given position within the room. As with ","draw_sprite()"," you can specify a sprite and a sub-image for drawing, then you must give the ","relative coordinates","    within the sprite of the area to select for drawing. This means that a left position of 0 and a top position of 0 would be the top left corner of the sprite and all further coordinates should be taken from that position. The image below shows an example\n    of how this works:","\n  ","You should note that if the texture page permits automatic cropping then this function may not work as expected,\n    since the extra \"empty\" space around the sprite will have been removed for creating the texture page. To resolve this issue, you will need to set the texture page settings (in the ","Texture Group Editor",")\n    to disable the option ","Automatic Crop",".","\n  ","NOTE",": When drawing with this function, the sprite ","x offset"," and ","y offset","    are ignored and the sprite part will be drawn with the top left corner at the specified x / y position in the room.","\n  ","NOTE",": This function is only useful for ","bitmap"," sprites and will not work with SWF or JSON (Spine) sprites.","\n  "," ","\n  ","\n  ","draw_sprite_part(sprite, subimg, left, top, width, height, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","subimg","\n        ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object).","\n      ","\n      ","\n        ","left","\n        ","The x position on the sprite of the top left corner of the area to draw.","\n      ","\n      ","\n        ","top","\n        ","The y position on the sprite of the top left corner of the area to draw.","\n      ","\n      ","\n        ","width","\n        ","The width of the area to draw.","\n      ","\n      ","\n        ","height","\n        ","The height of the area to draw.","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_sprite_part(sprite_index, image_index, 4, 0, sprite_width-16, sprite_height-16, x, y );","\n  ","This will draw the instances assigned sprite (sprite_index) and its current frame of animation (image_index), however it will shave a 4px margin off the width on both sides, and an 8 pixel margin off the height from the bottom of the original 24x24\n    pixel sprite.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_sprite_part_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_sprite_part"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1352"})