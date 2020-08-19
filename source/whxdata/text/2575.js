rh._.exports({"0":["debug_get_callstack"],"1":["debug_get_callstack"],"2":["debug_get_callstack"],"3":["\n  ","\n  ","\n  ","This function generates an array of strings, where the current script is listed first. The exact string format will vary depending on the target platform chosen, but it will mostly have the script/event name, then a colon : and then the line number,\n    something like this:","\n  ","\"gml_Script_script2:1\"","\n\"gml_Script_script1:32\"","\n\"gml_Script_script0:64\"","\n\"gml_Object_object0_Create_0:1\"","\n  "," ","\n  ","\n  ","debug_get_callstack()","\n  "," ","\n  ","\n  ","Array","\n  "," ","\n  ","\n  ","if debug_mode","     {\n    ","     if keyboard_check(vk_escape)","         {\n    ","         var _a = debug_get_callstack();","         for (var i = 0; i < array_length_id(_a); ++i;)","             {\n    ","             show_debug_message(_a[i]);\n    ","             }\n    ","         }\n    ","     }\n  ","\n  ","The above code checks to see if debug mode is enabled and if it is it checks to see if a key ios being held down. If it is it then outputs the current call stack to the console,","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Debugging","\n        ","Next: ","exception_unhandled_handler","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["debug_get_callstack"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2575"})