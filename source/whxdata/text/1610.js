rh._.exports({"0":["window_get_visible_rects"],"1":["window_get_visible_rects"],"2":["window_get_visible_rects"],"3":["\n  ","\n  ","\n  ","With this function you can find the overlapping region of the rectangle defined by (x1,y1) to (x2,y2) on each of the attached displays. The function will return an array with 8 values per display (ie: if you have two displays, the array will have a\n    length of 16 indices), where the values [0 ... 3] correspond to the overlapx1, overlapy1, overlapx2, overlapy2 - defining the region of overlap on this display and will be set to 0,0,0,0 if no overlap - and the values [4 ... 7] corresponds to the\n    monitorx1, monitory1, monitorx2, monitory2 - the coordinates of the display in the virtual display space. This can be used to test whether a saved window position is going to be visible or not (the user may have disconnected an external monitor or\n    moved the window off screen which left the window position that was saved as not being valid), for example.","\n  "," ","\n  ","\n  ","window_get_visible_rects(x1, y1, x2, y2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The left edge of the rectangle to check","\n      ","\n      ","\n        ","y1","\n        ","The top edge of the rectangle to check.","\n      ","\n      ","\n        ","x2","\n        ","The right edge of the rectangle to check","\n      ","\n      ","\n        ","y2","\n        ","The bottom edge of the rectangle to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Array","\n  "," ","\n  ","\n  ","var wx = window_get_x();"," var wy = window_get_y();"," var ww = window_get_width();"," var wh = window_get_height();"," display_data = window_get_visible_rects(wx, wy, wx + ww, wy + wh);"," display_num = array_length(display_data) / 8;","\n  ","The above code will generate a 1D array held in the variable ","display_data"," containing the information about the displays, as well as create the variable ","display_num"," to hold the number of active displays found.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Game Window","\n        ","Next: ","window_mouse_get_x","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["window_get_visible_rects"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1610"})