rh._.exports({"0":["gamepad_remove_mapping"],"1":["gamepad_remove_mapping"],"2":["gamepad_remove_mapping"],"3":["\n\n\n\n  ","\n  ","\n  ","This function can be used to remove the current device mapping from the given gamepad slot index. Once called, the slot index will need to be remapped using the ","gamepad_test_mapping()"," function if you want\n    to be able to be able to use the gamepad constants to detect input correctly (direct input can always be retrieved using the ","gamepad_axis","/","button","/","hat_count()"," and\n    ","gamepad_axis","/","button","/","hat_value()"," functions together).","\n  "," ","\n  ","\n  ","gamepad_remove_mapping(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","Which gamepad index \"slot\" to remove the mapping from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if remap == true","     {\n    ","     gamepad_remove_mapping(global.PadIndex);\n    ","     }\n  ","\n  ","The above code will remove the mapping from the given gamepad index slot based on the value of a variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Gamepad Input","\n        ","Next: ","gamepad_is_supported","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["gamepad_remove_mapping"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1749"})