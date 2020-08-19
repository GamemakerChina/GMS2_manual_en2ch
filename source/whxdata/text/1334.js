rh._.exports({"0":["draw_point_colour"],"1":["draw_point_colour,draw_point_color"],"2":["draw_point_colour,draw_point_color"],"3":["\n  ","\n  ","\n  ","With this function you can draw a single pixel anywhere on the screen with a colour that you define. The colour settings will over-ride the base colour set with the function ","draw_set_colour()",".","\n  ","NOTE",": If you are wanting to draw a shape using a shader, you should be aware that most shaders expect the following inputs: vertex, texture, Colour. However, when using this function, only vertex and colour data are being passed in, and so the\n    shader may not draw anything (or draw something but not correctly). If you need to draw shapes in this way then the shader should be customised with this in mind.","\n  "," ","\n  ","\n  ","draw_point_colour(x, y, col1);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of the point.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of the point.","\n      ","\n      ","\n        ","col1","\n        ","The colour of the point.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_point_colour(50, 50, c_red);","\n  ","This would draw a red pixel at (50,50).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Basic Forms","\n        ","Next: ","draw_rectangle","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_point_colour"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1334"})