rh._.exports({"0":["vertex_create_buffer_from_buffer_ext"],"1":["vertex_create_buffer_from_buffer_ext"],"2":["vertex_create_buffer_from_buffer_ext"],"3":["\n  ","\n  ","\n  ","As with the function ","vertex_create_buffer()",", this function will create a new vertex buffer, only now the vertex data it stores is copied from the regular buffer that is specified as the source. The buffer\n    is pre-formatted with the vertex format for building primitives for use with (for example) shaders, and you can also supply an offset within the source buffer to copy from and the number of vertices that the final buffer should have. Note that if\n    the number of vertices does not match those being copied you may get corrupted vertex data.","\n  "," ","\n  ","\n  ","vertex_create_buffer_from_buffer_ext(buffer, format, src_offset, vert_num);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The buffer to create the vertex buffer from.","\n      ","\n      ","\n        ","format","\n        ","The primitive vertex format to use.","\n      ","\n      ","\n        ","src_offset","\n        ","The offset within the the source buffer to copy from.","\n      ","\n      ","\n        ","vert_num","\n        ","The number of vertices the buffer should have.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Pointer","\n  "," ","\n  ","\n  ","vertex_format_begin();"," vertex_format_add_position_3d();\n    "," vertex_format_add_colour();\n    "," vertex_format_add_textcoord();\n    "," var my_format = vertex_format_end();"," v_buff = vertex_create_buffer_from_buffer(global.modelBuff, myFormat, 0, 512);","\n  ","The above code will create a new vertex format then create a new vertex buffer from a previously created regular buffer, applying the custom vertex format to it with 0 offset. The function tells the new vertex buffer that it should expect 512 vertices.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Primitives And Vertex Formats","\n        ","Next: ","vertex_get_buffer_size","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["vertex_create_buffer_from_buffer_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1401"})