rh._.exports({"0":["keyboard_get_map"],"1":["keyboard_get_map"],"2":["keyboard_get_map"],"3":["\n  ","\n  ","\n  ","Sometimes you may wish to get the ascii code for a mapped key (to see if it is already mapped, for example) which is what this function returns. The function will take a keycode value as returned by the function ","ord()","    (only ","capital"," letters from A-Z or numbers from 0-9), or any of the ","vk_*"," constants listed on the main ","Keyboard Input"," page.","\n  "," ","\n  ","\n  ","keyboard_get_map(key);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","key","\n        ","This is the key that you wish to get the mapped value from","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if keyboard_get_map(ord(\"A\")) = ord(\"A\")","    {\n    ","    keyboard_set_map(ord(\"A\"), keyboard_lastkey);","    }\n  ","\n  ","The above example code will first check and see if \"A\" has been mapped to another key, and if it hasn't it will map it to the last key that the user has pressed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Keyboard Input","\n        ","Next: ","keyboard_unset_map","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["keyboard_get_map"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1664"})