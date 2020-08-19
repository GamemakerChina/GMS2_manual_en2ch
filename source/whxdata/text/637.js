rh._.exports({"0":["bbox_left"],"1":["bbox_left"],"2":["bbox_left"],"3":["\n  ","\n  ","\n  ","This ","read only"," variable returns the position (along the x-axis) within the room of the left hand bounding box for the instance, where the bounding box is defined by the maximum width and height of the mask for the instance\n    (as set by the ","sprite_index"," or by the ","mask_index","). Even when a sprite has a precise collision mask, the bounding box exists and is\n    used for certain things, and so you can use this variable to find it. Please note that when the instance has no sprite assigned the value returned will be the same as the instance X position.","\n  "," ","\n  ","\n  ","bbox_left;","\n  "," ","\n  ","\n  ","Real (integer)","\n  "," ","\n  ","\n  ","if bbox_left < 0","     {\n    ","     x = sprite_xoffset;","     }\n  ","\n  ","The above code checks to see if the bounding box of the instance is outside the room and if it is it sets the instance to a new position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Instance Variables","\n        ","Next: ","bbox_top","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["bbox_left"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"637"})