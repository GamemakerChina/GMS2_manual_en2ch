rh._.exports({"0":["gpu_get_tex_mip_enable"],"1":["gpu_get_tex_mip_enable,mip_off,mip_on,mip_markedonly"],"2":["gpu_get_tex_mip_enable,mip_off,mip_on,mip_markedonly"],"3":["\n  ","\n  ","\n  ","With this function you can get whether mipmapping is switched off, switched on for everything or switched on only for texture groups selected in the ","Texture Group Manager",". The function will return\n    one of the constants listed below, with the default setting being ","mip_markedonly",".","\n  "," ","\n  ","\n  ","gpu_get_tex_mip_enable();","\n  "," ","\n  ","\n  ","Constant:","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n      ","\n      ","\n        ","mip_off","\n        ","Mipmapping is disabled.","\n      ","\n      ","\n        ","mip_on","\n        ","Mipmapping for all textures is enabled.","\n      ","\n      ","\n        ","mip_markedonly","\n        ","Mipmapping is enabled for textures that have it enabled in the Texture Group options (default).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","if gpu_get_tex_mip_enable != mip_on","     {\n    ","     gpu_set_tex_mip_enable(mip_on);\n    ","     }\n  ","\n  ","The above code will check to see if mipmapping is enabled and if it is not, it will enable it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Mipmapping","\n        ","Next: ","gpu_get_tex_mip_enable_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gpu_get_tex_mip_enable"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1309"})