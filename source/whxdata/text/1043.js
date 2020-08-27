rh._.exports({"0":["layer_get_shader"],"1":["layer_get_shader"],"2":["layer_get_shader"],"3":["\n  ","\n  ","\n  ","This function can be used to check if the given layer has a shader assigned to it. You supply the layer ID (which you get when you create the layer using ","layer_create()",") or the layer name (as a string - this will\n    have a performance impact), and the function will return either the shader index of the shader assigned, or -1 if no shader is assigned.","\n  "," ","\n  ","\n  ","layer_get_shader(layer_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to target (or the layer name as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Shader Index (or -1 if no shader is assigned)","\n  "," ","\n  ","\n  ","if layer_get_shader(layer) == -1","    {\n    ","    layer_shader(layer, shd_Sepia);","    }\n  ","\n  ","The above code will check to see if the layer that the instance running the code has a shader assigned to it and if it doesn't one is assigned.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_set_target_room","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_get_shader"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1043"})