rh._.exports({"0":["shader_get_sampler_index"],"1":["shader_get_sampler_index"],"2":["shader_get_sampler_index"],"3":["\n  ","\n  ","\n  ","Since you cannot change the value of a shader sampler within the shader itself, you have to set it before calling the shader using one of the available ","uniform set"," functions. However, to be able to do ","that"," you\n    must first call this function to get the \"handle\" of the shader sampler that you will want to set.","\n  ","NOTE",": Although a shader is made up of two discreet programs (vertex and fragment) this function will not differentiate between the two and will return the handle of the shader sample from either of them.","\n  "," ","\n  ","\n  ","shader_get_sampler_index(shader, uniform);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","shader","\n        ","The index of the shader to use.","\n      ","\n      ","\n        ","uniform","\n        ","The shader sampler to get the handle of (a string).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","glassshader_bgsampler = shader_get_sampler_index(GlassShader, \"s_BackgroundSampler\")"," spr = sprite_get_texture(sprite_index, 0);"," shader_set(GlassShader);\n    "," texture_set_stage(glassshader_bgsampler, spr);"," shader_reset();\n  ","\n  ","The above code will get the ","handle"," for the sampler within the shader indexed as \"GlassShader\" and then set that shader constant to the given sprite texture.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shader_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["shader_get_sampler_index"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"833"})