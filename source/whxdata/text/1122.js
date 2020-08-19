rh._.exports({"0":["layer_sprite_angle"],"1":["layer_sprite_angle"],"2":["layer_sprite_angle"],"3":["\n  ","\n  ","\n  ","Using this function you can change the angle for the given sprite element on a layer. You give the sprite element ID (which you get when you create a sprite element using ","layer_sprite_create()"," or when you\n    use the function ","layer_sprite_get_id()","), and then set the angle value, from 0 to 359 anti-clockwise, where 0 is to the right, 90 is to the top, 180 is to the left and 270 is to the bottom. If you set\n    a value greater than 360 this will be looped to bring it within the 0 - 359 range.","\n  "," ","\n  ","\n  ","layer_sprite_angle(sprite_element_id, angle);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite_element_id","\n        ","The unique ID value of the sprite element to change","\n      ","\n      ","\n        ","angle","\n        ","The angle of the sprite (default is 0)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var asset_sprite = layer_sprite_get_id(layer, \"gfc_Trees\");"," if layer_sprite_get_angle(asset_sprite) != 0","    {\n    ","    layer_sprite_angle(asset_sprite, 0);","    }\n  ","\n  ","The above code will check the sprite element assigned to the layer the instance running the code is on and if its angle is not 0 it will set it to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Layers","\n        ","Next: ","layer_sprite_blend","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sprite_angle"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1122"})