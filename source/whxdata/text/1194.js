rh._.exports({"0":["mp_linear_step_object"],"1":["mp_linear_step_object"],"2":["mp_linear_step_object"],"3":["\n  ","\n  ","\n  ","With this function you tell an instance to take a \"step\" towards a specific point, specified by the xgoal and ygoal values. The size of the step (which is how many pixels the instance should move each step) is indicated by the stepsize, and\n    if the instance is already at the position it will stop and not move any further, contrary to other, simpler functions like ","move_towards_point()",". The stepsize is also the distance \"ahead\"\n    that the object will check each step for a collision, and you can choose whether the instance stops at a collision with an object or instance of your choice.","\n  "," ","\n  ","\n  ","mp_linear_step_object(xgoal, ygoal, stepsize, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","xgoal","\n        ","The target x position.","\n      ","\n      ","\n        ","ygoal","\n        ","The target y position.","\n      ","\n      ","\n        ","stepsize","\n        ","The speed the instance moves in pixels per step.","\n      ","\n      ","\n        ","obj","\n        ","The object that is to block the path. Can be an object index, an instance id or the special keyword, ","all","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if mp_linear_step_object(mouse_x, mouse_y, 5, obj_Wall)","     {\n    ","     instance_create_layer(x, y, \"Effects\", obj_Explosion);","     instance_destroy();\n    ","     }\n  ","\n  ","The above code will make the object move towards the mouse at a speed of 5 pixels per step, only checking for collisions with the object \"obj_Wall\". Once it reaches the mouse position it will create an object \"obj_Explosion\" and\n    destroy itself.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Motion Planning","\n        ","Next: ","mp_linear_path","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["mp_linear_step_object"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1194"})