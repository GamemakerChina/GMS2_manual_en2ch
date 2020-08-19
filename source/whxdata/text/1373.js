rh._.exports({"0":["draw_text_colour"],"1":["draw_text_colour,draw_text_color"],"2":["draw_text_colour,draw_text_color"],"3":["\n  ","\n  ","\n  ","This function will draw text in a similar way to ","draw_text","()"," only now you can choose the colours to use for colouring the text as well as the alpha value, and these new values will be used instead\n    of the base drawing colour and alpha.","\n  ","NOTE",": Gradient blending is not available for the HTML5 target unless WebGL is enabled, although you can still set the blending colours and it will blend the font with the first given colour. However all blending in this way creates a duplicate\n    font which is then stored in the cache and used when required, which is far from optimal and if you use multiple colour changes it will slow down your games performance. You can set the font cache size to try and limit this should it be necessary\n    using the function ","font_set_cache_size()",".","\n  "," ","\n  ","\n  ","draw_text_colour(x, y, string, c1, c2, c3, c4, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the drawn string.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the drawn string.","\n      ","\n      ","\n        ","string","\n        ","The string to draw.","\n      ","\n      ","\n        ","c1","\n        ","The colour for the top left of the drawn text.","\n      ","\n      ","\n        ","c2","\n        ","The colour for the top right of the drawn text.","\n      ","\n      ","\n        ","c3","\n        ","The colour for the bottom right of the drawn text.","\n      ","\n      ","\n        ","c4","\n        ","The colour for the bottom left of the drawn text.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha for the text.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_set_colour(c_white);"," draw_text(100, 100, \"Health\");"," draw_text_colour(100, 200, string(health), c_lime, c_lime, c_green, c_green, 1);","\n  ","The above code will draw two sections of text on the same line, with the first text being drawn white (as that is the base drawing colour) and the second text being drawn with a lime green to normal green gradient.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text","\n        ","Next: ","draw_text_transformed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_text_colour"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1373"})