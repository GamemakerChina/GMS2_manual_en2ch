rh._.exports({"0":["layer_background_get_index"],"1":["layer_background_get_index"],"2":["layer_background_get_index"],"3":["\n  ","\n  ","\n  ","This function can be used to get the current image index value of the background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and the function will return real value that represents the image index being shown for the sprite. The function will return -1 if either the\n    background element doesn't exist or the element doesn't have a valid sprite assigned to it.","\n  "," ","\n  ","\n  ","layer_background_get_index(background_element_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to get the information from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (the current sprite image index or -1)","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_sky\");"," var back_id = layer_background_get_id(lay_id);"," if layer_background_get_index(back_id) < 4","     {\n    ","     layer_background_index(back_id, 4);","     }\n  ","\n  ","The above code will get the layer ID for the layer named \"Background_sky\" and then use that to get the ID of the background element on that layer. This ID is then used to check if the image index for the element is less than 4, and if so it\n    is set to 4.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_get_speed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_get_index"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1109"})