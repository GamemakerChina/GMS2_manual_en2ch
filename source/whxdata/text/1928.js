rh._.exports({"0":["clipboard_has_text"],"1":["clipboard_has_text"],"2":["clipboard_has_text"],"3":["\n  ","\n  ","\n  ","This function will return ","true"," if the clipboard contains text or ","false"," if it does not.","\n  ","NOTE",": This function is only valid for the ","Windows"," target.","\n  "," ","\n  ","\n  ","clipboard_has_text();","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if clipboard_has_text()","    {\n    ","    str = clipboard_get_text();","    clipboard_set_text(\"\");\n    ","    }\n  ","\n  ","The above code checks the clipboard for text and if it contains any, it is read as a string into the variable \"str\". Finally the clipboard is cleared by setting it to an empty string.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Strings","\n        ","Next: ","clipboard_get_text","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["clipboard_has_text"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1928"})