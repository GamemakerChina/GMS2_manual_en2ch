rh._.exports({"0":["gpu_set_tex_min_mip_ext"],"1":["gpu_set_tex_min_mip_ext"],"2":["gpu_set_tex_min_mip_ext"],"3":["\n  ","\n  ","\n  ","With this function you can set the minimum mipmap level which is currently used for a given shader sampler. You supply the index value for the shader sampler (as returned by the function ","shader_get_sampler_index()",",\n    and then give a value, where 0 is for full resolution, 1 is for the first mipmap, 2 for the second etc...","\n  "," ","\n  ","\n  ","gpu_set_tex_min_mip_ext(sampler_index, minmip);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sampler_index","\n        ","The index of the shader sampler to get","\n      ","\n      ","\n        ","minmip","\n        ","The minimum mipmap level to use","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var _sampleIndex = shader_get_sampler_index(shd_Glass, \"s_Background\");"," var _spriteTex = sprite_get_texture(sprite_index, 0);"," shader_set(shd_Glass);\n    "," if gpu_get_tex_min_mip_ext(_sampleIndex) != 0","     {\n    ","     gpu_set_tex_min_mip_ext(_sampleIndex, 0);","     }\n    "," texture_set_stage(_sampleIndex , _spriteTex);"," shader_reset();\n  ","\n  ","The above code sets the minimum mipmap level to 0 for the given shader texture sampler if it has not already been set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_set_tex_max_mip","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_set_tex_min_mip_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1316"})