rh._.exports({"0":["ansi_char"],"1":["ansi_char"],"2":["ansi_char"],"3":["\n  ","\n  ","\n  ","This function returns a string containing the character with raw BYTE value set. This will not, ","and should not",", be displayed, but it will save correctly to disk for use in encoding.","\n  "," ","\n  ","\n  ","ansi_char(val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","val","\n        ","The raw byte value.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String (Single character)","\n  "," ","\n  ","\n  ","var str1 = ansi_char($EF);"," var str2 = ansi_char($BB);"," var str3 = ansi_char($BF);"," file_text_write_string(global.saveFile, str1 + str2 + str3);","\n  ","The above code creates a string from raw byte data and writes it to a (previously opened) file.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Strings","\n        ","Next: ","chr","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ansi_char"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1895"})