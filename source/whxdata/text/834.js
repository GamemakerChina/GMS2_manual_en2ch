rh._.exports({"0":["Shaders"],"2":["Shaders,_YY_GLSLES_,_YY_GLSL_,_YY_HLSL11_,_YY_PSSL_"],"3":["\n  ","\n  ","\n  ","Shaders are an incredibly powerful tool for manipulating what and how things are ","rendered"," to the screen by the graphics card. Since these tiny programs are actually run on the graphics card\n    itself, this means that they are extremely fast to process, freeing up valuable CPU cycles for more game logic.","\n  ","To create a shader you will need to have written both a ","Vertex Shader"," and a ","Fragment Shader"," (also know as a ","Pixel Shader",") using the ","Shader Editor",", and even if (for example)\n    you only wish to change the vertex positions for an instance being drawn, or if you only want to change the colour values for the pixels, you will still need ","both"," programs for a complete shader to work.","\n  ","NOTE",": Shaders do ","not"," permit you to change the value of any variables that you pass into them, and so these will be called ","shader constants"," in all the documentation that refers to them.","\n  ","For a complete overview of the available GLSL ES functions and variables that you can use to program the shaders themselves, please refer to the ","OpenGL ES Shading Language (GLSL ES) Reference Pages",".\n    The following link is also useful as it contains some quick reference cards for the OpenGL ES API (note that only the last two cards shown are applicable to GameMaker Studio 2): ","OpenGL ES Reference Cards",".","\n  ","Using a shader in your projects is very simple, and only requires a couple of lines of code to get the most basic of use from it:","\n  ","shader_set(myShader);"," draw_self();\n    "," shader_reset();\n  ","\n  ","As you can see, they are used in a similar manner to blend modes and surfaces, where you first select (set) the shader, draw what you want using it, then reset the draw target again afterwards. If you wish to render the full screen through a shader,\n    and not just a single sprite or background, you will need to set up a surface to catch the current view, and then pass that through to the shader (see ","Surfaces"," for more information).","\n  ","NOTE",": Shaders, like anything related to drawing, can ","only be used in the draw event",". It is also worth noting that if you are trying to use a colour value in a shader and the object has no texture, the results will turn out black.","\n  ","If the shader you are using has input values, these are set using the ","uniform"," functions. You would first get the uniform ","handle"," (which is essentially an ID value for the uniform to be set) using the function ","shader_get_uniform()"," in\n    the ","Create Event"," of the instance using the shader, and then store these handles in variables, something like this:","\n  ","colour_to_find = shader_get_uniform(sShaderDemo5, \"f_Colour1\");"," colour_to_set = shader_get_uniform(sShaderDemo5, \"f_Colour2\");","\n  ","Once you have the uniform handles, they can then be set in the shader code for the ","Draw Event"," like this:","\n  ","shader_set(sShaderDemo5);"," shader_set_uniform_f(colour_to_find, 1,1,1 );"," shader_set_uniform_f(colour_to_set, 1,0,0 );"," draw_sprite(sprite_index,image_index,x+24, y);"," shader_reset();\n  ","\n  ","One final thing to note is that although shaders are accepted across all platforms, they are still device specific and if the hardware or software of the device cannot use shaders then you will get an error. Therefore you are recommended to check that\n    the shader has been compiled before setting uniforms or using the shader itself, like this:","\n  ","if (shader_is_compiled(myShader))","     {\n    ","     shader_set(myShader);\n    ","     draw_self();\n    ","     shader_reset();\n    ","     }\n    "," else show_debug_message(\"Shader failed\");","\n  ","As an extra check you can also call the function ","shaders_are_supported()"," to see if the hardware even supports shaders. In general you'd do these checks on game start and store the results as a\n    ","global variable"," to then check later.","\n  ","It is important to note that GameMaker Studio 2 also supports some conditional compile ","Macros"," which can be used within GLSL ES shaders so they can perform alternative code on specific supported platforms. The macros and the platforms they will\n    be generated on are shown in the table below:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Shader Macro","\n        ","Value","\n        ","Target Platform","\n      ","\n      ","\n        ","_YY_GLSLES_","\n        ","1","\n        ","All target platforms","\n      ","\n      ","\n        ","_YY_GLSL_","\n        ","2","\n        ","Mac and Ubuntu (Linux)","\n      ","\n      ","\n        ","_YY_HLSL11_","\n        ","3","\n        ","Windows, UWP, XboxOne","\n      ","\n      ","\n        ","_YY_PSSL_","\n        ","4","\n        ","PS4","\n      ","\n    ","\n  ","\n  "," ","\n  ","When you compile your GameMaker Studio 2 project on any one of the listed platforms using a GLSL ES format shader, ","one"," of the above macros will be generated which can then be used checked in the shader code like this:","\n  ","#ifdef _YY_HLSL11_"," // HLSL shader code here"," #else\n    "," // GLSL shader code here"," #endif\n  ","\n  ","If you are new to shaders or want a more complete guide to creating and use them using GameMaker Studio 2, then please see the following page of the manual:","\n  ","\n    ","Guide To Using Shaders","\n  ","\n  "," ","\n  ","The following functions are available for drawing and setting shaders:","\n  "," ","\n  ","\n    ","shader_get_name","\n    ","shader_get_uniform","\n    ","shader_get_sampler_index","\n    ","shader_set","\n    ","shader_set_uniform_f","\n    ","shader_set_uniform_f_array","\n    ","shader_set_uniform_i","\n    ","shader_set_uniform_i_array","\n    ","shader_set_uniform_matrix","\n    ","shader_set_uniform_matrix_array","\n    ","shader_reset","\n    ","shader_is_compiled","\n    ","shaders_are_supported","\n    ","shader_current","\n  ","\n  "," ","\n  ","We also have a special function which defines a global state for all shaders:","\n  ","\n    ","shader_enable_corner_id","\n  ","\n  "," ","\n  ","When working with texture samplers in shaders you will need information about the texture being used, in which case you can use the following functions:","\n  "," ","\n  ","\n    ","sprite_get_texture","\n    ","sprite_get_uvs","\n    ","font_get_texture","\n    ","font_get_uvs","\n    ","texture_get_width","\n    ","texture_get_height","\n    ","texture_get_texel_width","\n    ","texture_get_texel_height","\n    ","texture_set_stage","\n    ","gpu_set_texfilter_ext","\n    ","gpu_set_texrepeat","\n  ","\n  "," ","\n  ","While this manual will ","not"," cover any of the Open GL shader functions and variables, it does contain a list of the ones that are unique to GameMaker Studio 2. These constants are not part of the Open GL specification for shaders and are supplied\n    to simplify the integration of shaders within your projects.","\n  ","\n    ","Shader Constants","\n  ","\n  "," ","\n  ","Finally, GameMaker Studio 2 permits you to define your own ","Vertex Formats"," from which you can create your own custom primitives. This can greatly speed up shader operations or can be used to extend their capabilities and create surprising effects.\n    You can find information on this in the following sections:","\n  ","\n    ","Primitives And Vertex Formats","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Asset Management","\n        ","Next: ","Sequences","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Shaders"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"834"})