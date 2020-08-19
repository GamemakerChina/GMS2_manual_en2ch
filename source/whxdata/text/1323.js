rh._.exports({"0":["Basic Forms"],"2":["Basic Forms"],"3":["\n  ","\n  ","\n  ","GameMaker Studio 2 has a whole collection of functions available for drawing different forms and shapes. These functions should only ever be used in the draw event of an instance (you ","can"," use them\n    elsewhere but you won't see anything!) and create purely graphic effects, which means that they do not generate collision events as those can only be done through the sprite or collision mask that has been assigned to an instance. All these functions\n    are affected by the current draw colour, alpha and blend mode (see the section on ","Colour",").","\n  ","IMPORTANT!"," Lines, points and forms are always drawn at 1:1 with the ","screen resolution",", regardless of the event they are drawn in.","\n  ","IMPORTANT!"," These functions will break the vertex batching and increase the number of texture swaps in your game, so having multiple calls to any of them in a single draw frame may lead to performace issues.","\n  ","The following drawing functions exist for drawing basic shapes. Note that these functions are slow to call and only supplied as basic drawing tools:","\n  "," ","\n  ","\n    ","draw_arrow","\n    ","draw_circle","\n    ","draw_circle_colour","\n    ","draw_ellipse","\n    ","draw_ellipse_colour","\n    ","draw_line","\n    ","draw_line_colour","\n    ","draw_line_width","\n    ","draw_line_width_colour","\n    ","draw_point","\n    ","draw_point_colour","\n    ","draw_rectangle","\n    ","draw_rectangle_colour","\n    ","draw_roundrect","\n    ","draw_roundrect_colour","\n    ","draw_roundrect_ext","\n    ","draw_roundrect_colour_ext","\n    ","draw_triangle","\n    ","draw_triangle_colour","\n  ","\n  "," ","\n  ","The following functions are also included in GameMaker Studio 2 to set drawing precision and draw some very specific things:","\n  "," ","\n  ","\n    ","draw_set_circle_precision","\n    ","draw_button","\n    ","draw_healthbar","\n    ","draw_path","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing","\n        ","Next: ","Sprites And Tiles","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Basic Forms"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"1323"})