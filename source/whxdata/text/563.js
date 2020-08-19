rh._.exports({"0":["asset_get_type"],"1":["asset_get_type,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_unknown"],"2":["asset_get_type,asset_object,asset_sprite,asset_sound,asset_room,asset_tiles,asset_path,asset_script,asset_font,asset_timeline,asset_shader,asset_animationcurve,asset_sequence,asset_unknown"],"3":["\n  ","\n  ","\n  ","With this function you can get the type of asset being referenced from its name (a string). One of the ","constants"," listed below will be returned.","\n  "," ","\n  ","\n  ","asset_get_type(name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","name","\n        ","The name of the game asset to get the type of (a string).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Constant","\n  ","\n    ","\n      ","\n        ","\n          ","Constant","\n          ","Description","\n        ","\n        ","\n          ","asset_object","\n          ","The given name refers to an ","object",".","\n        ","\n        ","\n          ","asset_sprite","\n          ","The given name refers to a ","sprite",".","\n        ","\n        ","\n          ","asset_sound","\n          ","The given name refers to a ","sound",".","\n        ","\n        ","\n          ","asset_room","\n          ","The given name refers to a ","room",".","\n        ","\n        ","\n          ","asset_tiles","\n          ","The given name refers to a ","tile set",".","\n        ","\n        ","\n          ","asset_path","\n          ","The given name refers to a ","path",".","\n        ","\n        ","\n          ","asset_script","\n          ","The given name refers to a ","script",".","\n        ","\n        ","\n          ","asset_font","\n          ","The given name refers to a ","font",".","\n        ","\n        ","\n          ","asset_timeline","\n          ","The given name refers to a ","time line",".","\n        ","\n        ","\n          ","asset_shader","\n          ","The given name refers to a ","shader",".","\n        ","\n        ","\n          ","asset_animationcurve","\n          ","The given name refers to an ","Animation Curve",".","\n        ","\n        ","\n          ","asset_sequence","\n          ","The given name refers to a ","Sequence",".","\n        ","\n        ","\n          ","asset_unknown","\n          ","The given name refers to an asset that either does not exist, or is not one of the above listed.","\n        ","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","if asset_get_type(\"pth_Path_\" + string(global.Game)) == asset_unknown","     {\n    ","     show_debug_message(\"Path doesn't exist!!!\");","     }\n    "," else\n    ","     {\n    ","     path_index = asset_get_index(\"pth_Path_\" + string(global.Game));","     }\n  ","\n  ","The above code checks a dynamically created asset name to see if the asset is of the correct type. If it is not, then a debug message will be shown, otherwise the asset name is used to assign the asset to the instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Assets And Tags","\n        ","Next: ","tag_get_asset_ids","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["asset_get_type"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:\n    \n  ","Returns:","Example:"],"id":"563"})