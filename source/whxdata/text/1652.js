rh._.exports({"0":["gif_add_surface"],"1":["gif_add_surface"],"2":["gif_add_surface"],"3":["\n  ","\n  ","\n  ","With this function you can save a frame to a GIF file from a surface. You supply the GIF file ID (as returned by the function ","gif_open()",") and a surface ID (as returned by the function ","surface_create()","),\n    as well as a delay time between frames. The delay time is calculated in 1/100ths of a second, but note that once the GIF has been created, if you use it for promotional purposes for example, different browsers may interpret the frame delay slightly\n    differently - see ","here"," for more details. You may (optionally) supply X and Y offset values for the surface being used to add to\n    the GIF, in which case the part drawn to the GIF will begin from the offset and not the default (0,0) position, permitting you to select only a section of the surface to add. You can also supply a quantization value, which is an integer between 0\n    and 3, where 0 is full quantization and 3 is zero quantization (lower values will have a subsequent degradation in quality, but create a smaller GIF). Note that there isn't much difference between the default quality of 2, and the highest of 3,\n    and using 3 will significantly slow down the creation of the GIF so care should be taken when using the maximum value.","\n  ","Note that there are no built-in limits on number of frames or on the size of those frames in your GIF, but if you use too much memory then the function will fail and return -1, otherwise it will return 0.","\n  "," ","\n  ","\n  ","gif_add_surface(gif_index, surface, delay_time, [xoffset], [yoffset]);","\n  "," ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","gif_index","\n        ","The ID of gif to add the surface data to","\n      ","\n      ","\n        ","surface","\n        ","The ID of the surface to use as the added frame","\n      ","\n      ","\n        ","delay_time","\n        ","The delay time for the frame (in 100ths of a second)","\n      ","\n      ","\n        ","[xoffset]","\n        ","[","Optional","] The offset along the X axis of the surface to add from","\n      ","\n      ","\n        ","[yoffset]","\n        ","[","Optional","] The offset along the Y axis of the surface to add from","\n      ","\n      ","\n        ","[quantization]","\n        ","[","Optional","] The quantization amount from 0 to 3 (0 lowest quality, 3 highest quality, default is 2)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","if save_gif == true"," {\n    "," if count == 0","     {\n    ","     gif_image = gif_open(room_width, room_height);","     }\n    "," else if count < 30","     {\n    ","     gif_add_surface(gif_image, application_surface, 6/100);","     }\n    "," else\n    ","     {\n    ","     gif_save(gif_image, \"GameCapture.gif\");","     count = 0;","     save_gif = false;","     }\n    "," count++;\n    "," }\n  ","\n  ","The above code will create a GIF image file with 30 frames taken from the application surface and then save it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","Cameras And Display","\n        ","Back: ","\n        ","Next: ","gif_save","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gif_add_surface"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1652"})