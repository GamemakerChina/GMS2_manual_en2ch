rh._.exports({"0":["ds_map_destroy"],"1":["ds_map_destroy"],"2":["ds_map_destroy"],"3":["\n  ","\n  ","\n  ","DS maps take up space in memory, which is allocated to them when they are created. This means that you also need to free this memory when the DS map is not needed to prevent errors, memory leaks and loss of performance when running your game. This function\n    does just that. Note that destroying a map will de-reference any data structures stored in the map giving a memory leak, so you would need to go through the map and destroy all data structure items manually before destroying it to prevent this. The\n    only time this is not required is when you have flagged any items in the map as a ","DS list"," or as another ","DS map",", in which case these items will be destroyed and their memory cleaned up\n    automatically as well.","\n  ","IMPORTANT!"," When you create a data structure, the index value to identify it is an integer value starting at 0. This means that data structures of different types can have the ","same"," index value, so if in doubt you should be using the\n    ","ds_exists()"," function before accessing them. Also note that indices are re-used, so a destroyed data structure index value may be used by a newly created one afterwards so we recommend\n      always setting the variable that held the DS index to -1 after destroying.","\n  "," ","\n  ","\n  ","ds_map_destroy(id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the map to destroy.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","ds_map_destroy(inventory);"," inventory = -1;","\n  ","The above code will destroy the DS map with the id indexed in the variable \"inventory\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_secure_save","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_destroy"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1839"})