rh._.exports({"0":["ds_priority_write"],"1":["ds_priority_write"],"2":["ds_priority_write"],"3":["\n  ","\n  ","\n  ","This function returns a string which can then be stored or transferred to another data structure using the ","ds_priority_read()"," function.","\n  ","NOTE",": The returned string is not a human readable string, but rather a dump of the contents of the data-structure","\n  "," ","\n  ","\n  ","ds_priority_write(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var str;"," ini_open(\"save.ini\");\n    "," str =ds_priority_write(p_queue);"," ini_write_string(\"P_Queues\", \"0\", str);"," ds_priority_clear(p_queue);\n    "," ini_close();\n  ","\n  ","The above code opens an ini file and then writes a string containing the information stored in the DS priority queue indexed in the variable \"p_queue\". The priority queue is then cleared and the ini file closed.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Priority Queues","\n        ","Next: ","ds_priority_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_priority_write"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1866"})