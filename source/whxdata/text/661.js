rh._.exports({"0":["skeleton_attachment_create_colour"],"1":["skeleton_attachment_create_colour,skeleton_attachment_create_color"],"2":["skeleton_attachment_create_colour,skeleton_attachment_create_color"],"3":["\n  ","\n  ","\n  ","When you create you skeletal animation sprite, you can assign ","attachment slots"," and ","attachments"," to go in them. These are simply images (sprites) that are separate from the animation but when attached will move along with the bone they are\n    attached to. Normally you would assign these attachments in your animation program (Spine), but with this function you can create your own at run-time using a sprite asset from your game. the function requires that you give the attachment a name (as\n    a string) and then set the ","sprite_index"," and ","image_index"," to use, as well as the x and y origin (which can\n    be different to that defined by the sprite in the sprite properties), and you can also set any transforms that you wish to be applied to the image when attached, as well as the colour to be blended with the image and it's alpha (transparency)\n    value. If the attachment was successfully created the function will return ","1"," and if it was not (you supplied an invalid sprite index, or the base sprite is not a Spine sprite) then it will return ","-1",".","\n  ","It is worth noting that the instance sprite can have a blend colour and alpha setting (","image_blend"," and ","image_alpha","),\n    as can the attachment slot (see the function ","skeleton_slot_colour_set()","), and so the final colour and alpha that the assigned attachment sprite for the slot will have will be a composite\n    of all these values.","\n  "," ","\n  ","\n  ","skeleton_attachment_create_colour(name, sprite, ind, xorigin, yorigin, xscale, yscale, rot, colour, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","The name (as a string) of the attachment to create.","\n      ","\n      ","\n        ","sprite","\n        ","The sprite_index to get the attachment image from.","\n      ","\n      ","\n        ","ind","\n        ","The image_index to get the attachment image from.","\n      ","\n      ","\n        ","xorigin","\n        ","The x origin for the image being used.","\n      ","\n      ","\n        ","yorigin","\n        ","The y origin for the image being used.","\n      ","\n      ","\n        ","xscale","\n        ","The horizontal scaling of the image, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","yscale","\n        ","The vertical scaling of the image, as a multiplier: 1 = normal scaling, 0.5 is half etc...","\n      ","\n      ","\n        ","rot","\n        ","The rotation of the image: 0 = normal, 90 = turned 90° counter-clockwise etc.","\n      ","\n      ","\n        ","Colour","\n        ","The colour value to use (A constant, integer or hex value).","\n      ","\n      ","\n        ","Alpha","\n        ","The alpha value to use (from 0 to 1).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","1 if successful, -1 if not","\n  "," ","\n  ","\n  ","skeleton_attachment_create_colour(\"sword\", spr_Weapons, 0, 0, 80, 1, 1, 90, c_red, 1);"," skeleton_attachment_create_colour(\"knife\", spr_Weapons, 1, 0, 45, 1, 1, 90, c_yellow, 1);"," skeleton_attachment_create_colour(\"crossbow\",\n    spr_Weapons, 0, 10, 30, 1, 1, 0, c_white, 0.5);"," skeleton_attachment_set(\"slot_leftHand\", choose(\"sword\", \"knife\", \"crossbow\"));","\n  ","The above code would check the currently assigned attachment name for the slot named \"slot_leftHand\" and if an empty string is returned, a new sprite is attached.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Attachments","\n        ","Next: ","skeleton_bone_data_get","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["skeleton_attachment_create_colour"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"661"})