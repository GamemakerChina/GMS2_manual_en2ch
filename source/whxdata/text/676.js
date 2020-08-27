rh._.exports({"0":["skeleton_get_minmax"],"1":["skeleton_get_minmax"],"2":["skeleton_get_minmax"],"3":["\n  ","\n  ","\n  ","This function will return an array with the total bounding box value for all the individual bounding boxes assigned to a skeleton animation sprite. The returned array will have 4 elements:","\n  ","\n    ","[0] - the minimum x position for all bounding boxes","\n    ","[1] - the minimum y position for all bounding boxes","\n    ","[2] - the maximum x position for all bounding boxes","\n    ","[3] - the maximum y position for all bounding boxes","\n  ","\n  "," ","\n  ","\n  ","skeleton_get_minmax();","\n  "," ","\n  ","\n  ","Array (4 elements: xMin, yMin, xMax, yMax)","\n  "," ","\n  ","\n  ","var frame = skeleton_animation_get_frame(0);"," if frame > 0 && frame < 2","     {\n    ","     var box = skeleton_get_minmax();","     var ww = (box[2] - box[0]) / 2;","     var hh = (box[3] - box[1]) / 2;","     part_particles_create(global.p_sys, box[0] + ww, box[1] + hh, global.Stars, 10);","     }\n  ","\n  ","The above code will check the current frame of the animation assigned to track 0 and then burst some particles from a point in the middle of the total bounding box for the sprite.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Drawing And Miscellaneous","\n        ","Next: ","skeleton_get_num_bounds","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_get_minmax"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"676"})