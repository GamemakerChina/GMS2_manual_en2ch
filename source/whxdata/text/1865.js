rh._.exports({"0":["ds_priority_read"],"1":["ds_priority_read"],"2":["ds_priority_read"],"3":["\n  ","\n  ","\n  ","With this function you can recreate a saved DS priority (one that has previously been written as a string using ","ds_priority_write()","). You must first create a new DS priority to read the string into, and if\n    the DS priority already exists and has information stored in it, then this will be cleared before reading. This function is of vital importance when creating save/load mechanisms for your game. Note that if the data structure was created with previous\n    versions of ","GameMaker"," you should add the optional argument \"legacy\", setting it to ","true"," as the string format has changed with this version.","\n  "," ","\n  ","\n  ","ds_priority_read(id, str [, legacy]);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to write.","\n      ","\n      ","\n        ","str","\n        ","The string to write from.","\n      ","\n      ","\n        ","legacy (","optional",")","\n        ","Can be either ","true"," or ","false"," or omitted completely.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","p_queue = ds_priority_create();"," ini_open(\"save.ini\");\n    "," var str = ini_read_string(\"P_Queues\", \"0\", \"\");"," if (str != \"\")","     {\n    ","     ds_priority_read(p_queue, str);","     }\n    "," ini_close();\n  ","\n  ","The above code creates a priority queue and stores the index in the variable \"p_queue\". It then opens an ","ini"," file and reads a string from that, checking to make sure that the string is not returned as empty first. This string is then\n    read into the newly created DS priority.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Priority Queues","\n        ","Next: ","ds_priority_write","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_priority_read"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1865"})