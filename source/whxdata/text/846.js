rh._.exports({"0":["shader_enable_corner_id"],"1":["shader_enable_corner_id"],"2":["shader_enable_corner_id"],"3":["\n  ","\n  ","\n  ","With this function you can set a global state for all shaders being used where, when enabled, the shader \"steals\" 2 bits from the input colour values. The first is from the lower bit of the red colour value, and the second is from the lower\n    bit of the blue colour value. These values can get then be recovered in the shader to work out which vertex you are dealing with (ie: which corner).","\n  "," ","\n  ","\n  ","shader_enable_corner_id(enable);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","enable","\n        ","Enable (","true",") or disable (","false",") this function.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","shader_enable_corner_id(true);","\n  ","The above code will enable the use of colour bits for the corner id for all shaders.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Shaders","\n        ","Next: ","shader_get_name","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["shader_enable_corner_id"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"846"})