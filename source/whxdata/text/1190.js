rh._.exports({"0":["place_snapped"],"1":["place_snapped"],"2":["place_snapped"],"3":["\n  ","\n  ","\n  ","With this function you can check and see if the origin of an instance (its x and y position) is aligned to a grid with the hsnap and vsnap values specified by you.","\n  "," ","\n  ","\n  ","place_snapped(hsnap, vsnap);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","hsnap","\n        ","The horizontal snapping to check.","\n      ","\n      ","\n        ","vsnap","\n        ","The vertical snapping to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","with (obj_Pieces)","     {\n    ","     if !place_snapped(32, 32)","         {\n    ","         move_snap(32, 32);","         }\n    ","     }\n  ","\n  ","The above code checks all instances of \"obj_Pieces\" to see if they are snapped to a grid of 32x32 pixels, and if they are not it snaps them to the nearest position in that grid.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","motion_add","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["place_snapped"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1190"})