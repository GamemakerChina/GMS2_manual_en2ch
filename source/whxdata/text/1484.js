rh._.exports({"0":["part_system_drawit"],"1":["part_system_drawit"],"2":["part_system_drawit"],"3":["\n  ","\n  ","\n  ","With this function you can force a particle system to draw all the current particles on the screen. If ","part_system_automatic_draw()"," is switched off then this function will show the particles when\n    used in the draw event of an instance, or it can be used when the drawing target is set to a surface (using ","surface_set_target()",") to draw the particles in the system to that surface.","\n  "," ","\n  ","\n  ","part_system_drawit(ind);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The index of the particle system to draw the particles of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if surface_exists(surf)","     {\n    ","     surface_set_target(surf);\n    ","     part_system_drawit(global.psys);\n    ","     surface_reset_target();\n    ","     }\n  ","\n  ","The above code checks to see if the surface indexed in the variable \"surf\" exists, and if it does it then sets the drawing target to the surface, draws the particle system with the ID stored in the global variable, and then resets the drawing\n    target so all normal drawing appears on the screen once more.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Systems","\n        ","Next: ","part_system_draw_order","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["part_system_update"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1484"})