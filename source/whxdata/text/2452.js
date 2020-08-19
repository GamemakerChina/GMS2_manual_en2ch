rh._.exports({"0":["buffer_save_ext"],"1":["buffer_save_ext"],"2":["buffer_save_ext"],"3":["\n  ","\n  ","\n  ","With this function you can save part of the contents of a buffer to a file, ready to be read back into memory using the ","buffer_load()"," function. The \"offset\" defines the start position within the buffer\n    for saving (in bytes), and the \"size\" is the size of the buffer area to be saved from that offset onwards (also in bytes).","\n  "," ","\n  ","\n  ","buffer_save_ext(buffer, filename, offset, size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","buffer","\n        ","The index of the buffer to save.","\n      ","\n      ","\n        ","filename","\n        ","The name of the file to save as.","\n      ","\n      ","\n        ","offset","\n        ","The offset within the buffer to save from (in bytes).","\n      ","\n      ","\n        ","size","\n        ","The size of the buffer area to save (in bytes).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","buffer_save_ext(buff, \"Player_Save.sav\", 0, 16384);","\n  ","Saves part of the current contents of the buffer with the id stored in the variable \"buff\" to a file.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Buffers","\n        ","Next: ","buffer_save_async","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["buffer_save_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2452"})