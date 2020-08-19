rh._.exports({"0":["General Layer Functions"],"2":["layer functions"],"3":["\n  ","\n  ","\n  ","The GameMaker Studio 2 ","Room Editor"," permits you to add ","layers"," of different assets to your room. These can be tile maps (using tile sets), backgrounds, sprites or sequences, and instances,\n    but note that unlike the room editor, you are ","not"," limited to a single asset type per layer, and can add multiple asset types to the same layer - for example you can have a background and a tile map all on the same layer. Note that each asset\n    that is added to a layer is considered an ","element"," of that layer.","\n  ","This section outlines the general functions used when working with room layers, as well as a few functions specific to working with ","instance layer"," ","elements:","\n  "," ","\n  ","\n    ","layer_exists","\n    ","layer_get_id","\n    ","layer_get_depth","\n    ","layer_get_id_at_depth","\n    ","layer_get_name","\n    ","layer_get_all","\n    ","layer_get_all_elements","\n    ","layer_get_element_layer","\n    ","layer_get_element_type","\n    ","layer_get_x","\n    ","layer_get_y","\n    ","layer_get_hspeed","\n    ","layer_get_vspeed","\n    ","layer_create","\n    ","layer_destroy","\n    ","layer_x","\n    ","layer_y","\n    ","layer_hspeed","\n    ","layer_vspeed","\n    ","layer_add_instance","\n    ","layer_has_instance","\n    ","layer_instance_get_instance","\n    ","layer_destroy_instances","\n    ","layer_element_move","\n    ","layer_set_visible","\n    ","layer_get_visible","\n    ","layer_depth","\n    ","layer_force_draw_depth","\n    ","layer_is_draw_depth_forced","\n    ","layer_get_forced_depth","\n    ","layer_script_begin","\n    ","layer_script_end","\n    ","layer_shader","\n    ","layer_get_script_begin","\n    ","layer_get_script_end","\n    ","layer_get_shader","\n  ","\n  "," ","\n  ","We also have a couple of extra functions relating to targeting layers in a different room. It may be that you want to change something in a room that is not the current room, or maybe you want to generate rooms procedurally, or any number of things.\n    To enable this we use the following functions:","\n  "," ","\n  ","\n    ","layer_set_target_room","\n    ","layer_get_target_room","\n    ","layer_reset_target_room","\n  ","\n  "," ","\n  ","What you do here is set the target room using the appropriate function and then call the layer functions are normal. These layer functions will now apply ","only"," to the target room and not the current one. When you are finished you'd call the\n    reset function to return the code scope back to the current room again.","\n  ","WARNING!"," While targeting another room, you can use all the regular layer functions ","except"," you cannot create instances using ","instance_create_layer()","    or ","instance_create_depth()",", nor will the layer function ","layer_add_instance()"," be\n    available.","\n  ","Finally, and this is exclusively for use with ","instances"," on layers (although the layer itself can have other elements, they will not be affected by the following functions), you have a couple of functions that can be used to deactivate or reactivate\n    all instances:","\n  "," ","\n  ","\n    ","instance_deactivate_layer","\n    ","instance_activate_layer","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","Tile Map Layers","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["General Layer Functions"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"1007"})