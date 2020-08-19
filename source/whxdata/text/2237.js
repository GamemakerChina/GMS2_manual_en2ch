rh._.exports({"0":["achievement_load_progress"],"1":["achievement_load_progress,achievement_achievement_info"],"2":["achievement_load_progress,achievement_achievement_info"],"3":["\n  ","\n  ","\n  ","This function will send a request to the server for information on all available achievements. It will trigger a callback ","Social Asynchronous Event"," which contains\n    the ","async_load"," map populated with the relevant key/value pairs. The ","id"," key of this ","DS Map"," is used to identify the correct callback (there\n    can be more than one trigger function for any given asynchronous event), and will be paired with the ","constant"," ","achievement_achievement_info"," as well as a number of other key/value pairs for each player. The exact contents of the map\n    are shown below:","\n  ","NOTE: ","This function is for ","iOS"," only.","\n  ","\n    ","\"","id","\" - For this function it should be ","achievement_achievement_info",".","\n    ","\"","numentries","\" - The number of achievements in the list.","\n    ","\"","AchN","\" - The name of the achievement, where \"N\" is an integer value corresponding to its place in the entries list.","\n    ","\"","AchCompN","\" - How complete the achievement \"N\" is as a percentage value from 0 to 100 (a string).","\n  ","\n  "," ","\n  ","\n  ","achievement_load_progress()","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","The following code would request achievement progress when the user is on an iOS device:","\n  ","if os_type == os_ios","     {\n    ","     achievement_load_progress();\n    ","     }\n  ","\n  ","This will send off a request for the information on achievements and generate an asynchronous callback with the special ","async_load"," DS map containing the following data:","\n  ","var ident = ds_map_find_value(async_load, \"id\");"," if ident == achievement_achievement_info","     {\n    ","     var numentries = ds_map_find_value(async_load, \"numentries\");","     for(var i = 0; i < numentries; i++;)","         {\n    ","         ach_id[i] = ds_map_find_value(async_load, \"Ach\" + string(i));","         comp[i] = ds_map_find_value(async_load, \"AchComp\" + string(i));","         }\n    ","     }\n  ","\n  ","The above code checks the returned ","DS Map"," in the ","Social Asynchronous Event"," and if its \"id\" matches the constant being checked, it then loops through the entries in the map for each of the achievements and stores their name\n    and completion percentage.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Leaderboards","\n        ","Next: ","achievement_send_challenge","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["achievement_load_progress"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2237"})