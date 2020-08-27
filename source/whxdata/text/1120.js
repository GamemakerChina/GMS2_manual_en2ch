rh._.exports({"0":["layer_sprite_xscale"],"1":["layer_sprite_xscale"],"2":["layer_sprite_xscale"],"3":["\n  ","\n  ","\n  ","Using this function you can change whether the given sprite element on a layer should be scaled along the x axis or not. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()","    or when you use the function ","layer_sprite_get_id()","), and then set the scale value. A scale of 1 indicates no scaling (1:1), smaller values will scale down (0.5, for example, will half the width of the\n    sprite used), larger values will scale up, and negative values will flip the sprite and scale it unless the value used is exactly -1 (in which case the sprite used is just flipped right-to-left about its origin position with no scaling).","\n  "," ","\n  ","\n  ","layer_sprite_xscale(sprite_element_id, xscale);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite element to change","\n      ","\n      ","\n        ","xscale","\n        ","The xscale value (default is 1)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var asset_sprite = layer_sprite_get_id(layer, \"gfc_Trees\");"," if layer_sprite_get_xscale(asset_sprite) != 1 || layer_sprite_get_yscale(asset_sprite) != 1","     {\n    ","     layer_sprite_xscale(asset_sprite, 1);","     layer_sprite_yscale(asset_sprite, 1);","     }\n  ","\n  ","The above code will check the sprite element assigned to the layer the instance running the code is on and if it is scaled in either direction it will set both the x-axis scale and y-axis scale to 1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_yscale","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_xscale"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1120"})