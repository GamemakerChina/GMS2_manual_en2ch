rh._.exports({"0":["draw_get_halign"],"1":["draw_get_halign,fa_left,fa_center,fa_right"],"2":["draw_get_halign,fa_left,fa_center,fa_right"],"3":["\n  ","\n  ","\n  ","This function is used to get the text alignment setting along the horizontal axis, and will return one of the constants listed below.","\n  "," ","\n  ","\n  ","draw_get_halign();","\n  "," ","\n  ","\n  ","Constant","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Alignment","\n      ","\n      ","\n        ","fa_left","\n        ","\n      ","\n      ","\n        ","fa_center","\n        ","\n      ","\n      ","\n        ","fa_right","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","if draw_get_halign() != fa_left","     {\n    ","     draw_set_halign(fa_left);\n    ","     }\n    "," draw_text(100, 32, \"Score: \" + string(score));","\n  ","The above code will check to see if the current text alignment is left-aligned, and if it's not then it will be set and then some text is drawn.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Text","\n        ","Next: ","draw_get_valign","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_get_halign"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1369"})