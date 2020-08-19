rh._.exports({"0":["layer_background_destroy"],"1":["layer_background_destroy"],"2":["layer_background_destroy"],"3":["\n  ","\n  ","\n  ","This function will destroy the given background element. You supply the background ID (which you get when you create the background using ","layer_background_create()"," or when you use the layer ID along\n    with ","layer_get_background_id()",") and this will remove it. Note that this does ","not"," remove the layer, only the background from it, and if the background is one that has been added in the room\n    editor, then the next time you leave the room and then return, the background will be recreated again. However if the room is persistent, the background will be removed unless room persistence is switched off again.","\n  "," ","\n  ","\n  ","layer_background_destroy(background_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background to be destroyed","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_trees\");"," var bck_id = layer_background_get_id(\"Forrest\");"," if layer_background_exists(lay_id, bck_id)","     {\n    ","     layer_background_destroy(bck_id);\n    ","     }\n  ","\n  ","The above code checks the layer \"Background_trees\" to see if the given background element exists and if it does, then it is destroyed (but not the layer).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_visible","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1090"})