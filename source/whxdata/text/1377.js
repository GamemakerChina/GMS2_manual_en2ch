rh._.exports({"0":["draw_text_transformed_colour"],"1":["draw_text_transformed_colour,draw_text_transformed_color"],"2":["draw_text_transformed_colour,draw_text_transformed_color"],"3":["\n  ","\n  ","\n  ","This function is a combination of the base ","draw_text()"," function with the ","draw_text_transformed()"," and ","draw_text_colour()","    functions, permitting you to scale and rotate text as well as colour it with a gradient fill and change its alpha value, ignoring the base alpha and colour settings for drawing.","\n  ","NOTE: ","Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate\n    font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary\n    using the function ","font_set_cache_size()",".","\n  "," ","\n  ","\n  ","draw_text_transformed_colour(x, y, string, xscale, yscale, angle, c1, c2, c3, c4, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the drawn string.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the drawn string.","\n      ","\n      ","\n        ","string","\n        ","The string to draw.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scale.","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scale.","\n      ","\n      ","\n        ","angle","\n        ","The angle of the text.","\n      ","\n      ","\n        ","c1","\n        ","The colour for the top left of the drawn text.","\n      ","\n      ","\n        ","c2","\n        ","The colour for the top right of the drawn text.","\n      ","\n      ","\n        ","c3","\n        ","The colour for the bottom right of the drawn text.","\n      ","\n      ","\n        ","c4","\n        ","The colour for the bottom left of the drawn text.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha for the text.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_halign(fa_center);"," draw_set_valign(fa_middle);\n    "," image_angle += 1;"," draw_text_transformed_colour(room_width / 2, room_height / 2, keyboard_string, 2, 2, image_angle, c_red, c_red, c_yellow, c_yellow, 0.5);","\n  ","The above code will draw the given text in the middle of the room, spinning round and scaled to twice its original size, with a colour gradient going from yellow to red as well as an alpha of 0.5.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text","\n        ","Next: ","draw_text_ext_transformed_colour","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_text_transformed_colour"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1377"})