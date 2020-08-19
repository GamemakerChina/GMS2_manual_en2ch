rh._.exports({"0":["layer_depth"],"1":["layer_depth"],"2":["layer_depth"],"3":["\n  ","\n  ","\n  ","This function can be used to change the ","depth"," of the given layer, changing the order in which its contents will be rendered to the screen. You supply the layer ID (which you get when you create the layer using ","layer_create()",")\n    or the layer name (as a string - this will have a performance impact) and then give the new depth to set it to (an integer value form -16000 to 16000). The layer depth is defined as being higher when \"further away\" from the camera and lower\n    when \"closer\" to the camera, so if you have three layers with depths -100, 0, 100, the layers will draw in the order 100, 0, -100, so that the \"top\" layer (ie, the closest to the camera view and so drawn over everything else) will\n    be the layer with the -100 depth.","\n  ","The following image shows a schematic of how depth works for layers:","\n  ","Note that you can check the depth of a layer at any time using the function ","layer_get_depth()",".\n    Also note that the minimum and maximum layer depths are -16000 to 16000, and anything outside of those depths ","will not be rendered",". If you require a depth outside of that range then you will need to use the function ","layer_force_draw_depth()",".","\n  "," ","\n  ","\n  ","layer_depth(layer_id, depth)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","layer_id","\n        ","The unique ID value of the layer to set the depth of (or the layer name as a string)","\n      ","\n      ","\n        ","depth","\n        ","The new depth for the layer","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if layer_get_depth(layer) != -100","    {\n    ","    layer_depth(layer, -100);","    }\n  ","\n  ","The above code gets the depth of the layer that the instance running the code is on, and if it is not -100 then the depth is set to -100.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","General Layer Functions","\n        ","Next: ","layer_force_draw_depth","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_depth"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1034"})