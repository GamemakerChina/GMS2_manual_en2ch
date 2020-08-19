rh._.exports({"0":["vertex_submit"],"1":["vertex_submit,pr_pointlist,pr_linelist,pr_linestrip,pr_trianglelist,pr_trianglestrip"],"2":["vertex_submit,pr_pointlist,pr_linelist,pr_linestrip,pr_trianglelist,pr_trianglestrip"],"3":["\n  ","\n  ","\n  ","You can use this function to submit the contents of a vertex buffer to the graphics pipeline for use with a shader. You supply the buffer index to use, the base primitive type to use (see the constants below) and the texture that is to be used. The\n    base primitive type is only used for assigning the order in which the vertexes that you stored in the buffer are drawn and connected, but the actual data used for each of the vertexes will be that which you defined when creating the vertex buffer.","\n  ","NOTE",": This function can only be used in the ","Draw Event",".","\n  ","For a visual example of the different base primitives available, see the image below:","\n  ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","pr_pointlist","\n        ","A primitive consisting of a list of points.","\n      ","\n      ","\n        ","pr_linelist","\n        ","A primitive made up of a individual lines in a list.","\n      ","\n      ","\n        ","pr_linestrip","\n        ","A primitive made up of a consecutive strip of lines.","\n      ","\n      ","\n        ","pr_trianglelist","\n        ","A primitive made up of individual triangles in a list.","\n      ","\n      ","\n        ","pr_trianglestrip","\n        ","A primitive made up of a consecutive strip of triangles.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","vertex_submit(buffer, primitive, texture);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The buffer to use.","\n      ","\n      ","\n        ","primitive","\n        ","The primitive base type.","\n      ","\n      ","\n        ","texture","\n        ","The texture to use (or -1 for no texture).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","shader_set(shader_prim);"," vertex_submit(buff, pr_trianglelist, sprite_get_texture(sprite_index));"," shader_reset();\n  ","\n  ","The above code will submit the vertex buffer indexed in the variable \"buff\" for drawing with the shader \"shader_prim\", using a triangle list as the base primitive and the texture of the sprite for the instance running the code.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Primitives And Vertex Formats","\n        ","Next: ","draw_primitive_begin","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["vertex_submit"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1417"})