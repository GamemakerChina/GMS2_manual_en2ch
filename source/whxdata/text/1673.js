rh._.exports({"0":["keyboard_string"],"1":["keyboard_string"],"2":["keyboard_string"],"3":["\n  ","\n  ","\n  ","This variable holds a string containing the last (at most) 1024 characters typed on the keyboard. This string will only contain printable characters typed, but it ","will"," correctly respond to pressing the backspace key by erasing the last character.\n    This variable is ","not"," read only and you can change it, for example to set it to \"\" (an empty string) if you handled it already, and you can use the ","String Functions"," to manipulate it. Note that\n    when using the on-screen ","Virtual Keyboard",", ","only"," this variable will be updated with the keyboard input.","\n  "," ","\n  ","\n  ","keyboard_string;","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","if string_length(keyboard_string) > 15","    {\n    ","    keyboard_string = string_copy(keyboard_string, 1, 15);","    }\n  ","\n  ","The above code will limit the length of the keyboard string to 15 characters, removing those that are over that limit by copying the first fifteen characters back into the variable.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Keyboard Input","\n        ","Next: ","io_clear","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["keyboard_string"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1673"})