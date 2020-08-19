rh._.exports({"0":["ds_map_find_previous"],"1":["ds_map_find_previous"],"2":["ds_map_find_previous"],"3":["\n  ","\n  ","\n  ","This function returns the previous key stored in the DS map ","before"," the one specified in the function. This can be useful if your have to iterate through the DS map looking for something, but should be avoided if possible as it can be slow. If\n    no such key exists then the function will return ","<undefined>",". You should always check this using the ","is_undefined()"," function.","\n  "," ","\n  ","\n  ","ds_map_find_previous(id, key);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","id","\n        ","The id of the map to use.","\n      ","\n      ","\n        ","key","\n        ","The key to find the previous one to.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real, string or undefined","\n  "," ","\n  ","\n  ","var size = ds_map_size(inventory) - 1;"," var key = ds_map_find_last(inventory);"," for (var i = size; i > 0; i--;)","     {\n    ","     if (key != \"gold\")","         {","         key = ds_map_find_previous(inventory, key);","         }","     else break;","     }\n  ","\n  ","The above code creates some temporary variables and then gets the ds_map size and finds the last key as stored by the computer in the map. It then uses a ","for"," loop to iterate back through the ds_map looking for the key value \"gold\".\n    If it finds it, it breaks out the loop.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","DS Maps","\n        ","Next: ","ds_map_find_value","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_map_find_previous"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1834"})