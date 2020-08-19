rh._.exports({"0":["ds_map_add"],"1":["ds_map_add"],"2":["ds_map_add"],"3":["\n  ","\n  ","\n  ","This function should be used to add sets of key/value pairs into the specified ","DS map",". You can check this function to see if it was successful or not (it will return ","true"," on success or ","false"," otherwise),\n    as it may fail if there already exists the same key in the DS map or you specify a non-existent DS map as the ID of the map to add to. The keys and and values you supply can be made up of any combination of data types, so all of the following - and\n    more - are acceptable (although, in practice, you would most commonly use a string for the key):","\n  ","ds_map_add(map, 5, undefined);"," ds_map_add(map, \"level\", 1);"," ds_map_add(map, 89.6, \"hello world\");"," ds_map_add(map, 5, buffer_get_address(buff));","\n  ","You can also add to a map using the ","accessor"," \"","?","\", as shown below:","\n  ","map[? 5] = undefined;"," map[? \"level\"] = 1;"," map[? 89.6] = \"hello world\";"," map[? 5] = buffer_get_address(buff);","\n  ","NOTE",": Unlike other data structures in GameMaker Studio 2 this key will not go to the start (nor the end) of the ","DS map",", but rather it will just go into the ","DS map"," ","somewhere",".","\n  "," ","\n  ","\n  ","ds_map_add(id, key, val);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the map to add to.","\n      ","\n      ","\n        ","key","\n        ","The key of the value to add.","\n      ","\n      ","\n        ","val","\n        ","The value to add to the map.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","inventory = ds_map_create();"," ds_map_add(inventory, \"hp potion\", 1);"," ds_map_add(inventory, \"gold\", 100);","\n  ","This will create a new map, assigning its id to the variable \"inventory\". It then adds two new keys to the map, \"hp potion\" and \"gold\", and sets their initial values as 1 and 100.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_clear","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_add"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1824"})