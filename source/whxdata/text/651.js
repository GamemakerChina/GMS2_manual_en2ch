rh._.exports({"0":["skeleton_animation_set_frame"],"1":["skeleton_animation_set_frame"],"2":["skeleton_animation_set_frame"],"3":["\n  ","\n  ","\n  ","This function will set the animation assigned to the given track to the frame you supply. The frame index should be an real value between 0 and the number of frames for the animation (which you can get using the function ","skeleton_animation_get_frames",").\n    If you supply a value outside of this range, the animation will be looped to make up the difference, for example if the animation has 5 frames and you set the frame to 8, the actual frame shown will be 3.","\n  "," ","\n  ","\n  ","skeleton_animation_set_frame(track, index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","track","\n        ","The animation track to set the frame of.","\n      ","\n      ","\n        ","index","\n        ","The new index for the animation frame.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if global.pause","     {\n    ","     skeleton_animation_set_frame(0, -image_speed);","     }\n  ","\n  ","The above code will set the frame index for the animation in track 0 to the negative image speed when the global \"pause\" variable is ","true"," (essentially pausing the animation).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Animation","\n        ","Next: ","skeleton_skin_get","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_animation_set_frame"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"651"})