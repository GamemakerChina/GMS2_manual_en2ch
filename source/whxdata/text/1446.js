rh._.exports({"0":["draw_surface_stretched_ext"],"1":["draw_surface_stretched_ext"],"2":["draw_surface_stretched_ext"],"3":["\n  ","\n  ","\n  ","This function does exactly the same as the ","draw_surface_stretched()"," function with the added ability to set the colour blending and alpha value for the surface when it is drawn (similar to the function\n    ","draw_surface_ext()",").","\n  ","NOTE",": When working with surfaces there is the possibility that they can cease to exist at any time due to them being stored in texture memory. You should ","ALWAYS"," check that a surface exists using ","surface_exists()","    before referencing them directly.","\n  "," ","\n  ","\n  ","draw_surface_stretched_ext(id, x, y, w, h, col, alpha);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The unique ID value of the surface to draw.","\n      ","\n      ","\n        ","x","\n        ","The x position of where to draw the surface.","\n      ","\n      ","\n        ","y","\n        ","The y position of where to draw the surface.","\n      ","\n      ","\n        ","w","\n        ","The width at which to draw the surface.","\n      ","\n      ","\n        ","h","\n        ","The height at which to draw the surface.","\n      ","\n      ","\n        ","colour","\n        ","The colour with which to colour the surface.","\n      ","\n      ","\n        ","alpha","\n        ","The alpha with which to blend the surface.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_surface_stretched_ext(surf, x, y, 200, 200, c_white, 0.5);","\n  ","This will draw the given surface with its left corner at the instances x/y position and it will be stretched to occupy an area of 200x200 pixels with no blending, but partial transparency.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Surfaces","\n        ","Next: ","draw_surface_tiled","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_surface_stretched_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1446"})