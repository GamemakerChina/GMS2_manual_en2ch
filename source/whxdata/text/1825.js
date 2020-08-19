rh._.exports({"0":["ds_map_clear"],"1":["ds_map_clear"],"2":["ds_map_clear"],"3":["\n  ","\n  ","\n  ","This function will clear the (previously created) DS map of all key/value pairs, but it will not delete the DS map itself from memory. For that you should use the function ","ds_map_destroy()",". Note that clearing\n    a map will de-reference any data structures stored in the map giving a memory leak, so you would need to go through it and destroy all data structure items manually before clearing the map to prevent this. The only time this is not required is when\n    you have flagged any items in the map as a ","DS list"," or as another ","DS map",", in which case these items will be destroyed (not cleared!) and their memory cleaned up automatically when the\n    parent map is cleared.","\n  "," ","\n  ","\n  ","ds_map_clear(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the data structure to clear.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if global.new_game","    {\n    ","    ds_map_clear(inventory);\n    ","    }","\n  ","The above function will check a global variable to see if it is true and, if it is, then the DS map indexed in the instance variable \"inventory\" will be cleared of all key/value pairs (but it is ","not"," destroyed).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_copy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_clear"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1825"})