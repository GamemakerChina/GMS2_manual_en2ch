rh._.exports({"0":["xboxlive_get_stats_for_user"],"1":["xboxlive_get_stats_for_user"],"2":["xboxlive_get_stats_for_user"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve data about specific stats from the Xbox Live servers. You supply the user ID as returned by the function ","xboxlive_get_user()",", then your games Service\n    Configuration ID (as shown on the XDP console), and finally the stats required. You can request up to a maximum of 14 stats, but this does not guarantee that you will get 14 stat results, as there is a limit to the total length of the request and\n    therefore the maximum stat count depends on the length of the names of the stats themselves.","\n  ","The function will return 0 if the stat request was sent or -1 if there was an error, and the callback will trigger a ","System Asynchronous Event",". This event will have\n    the special DS map ","async_load"," which should then be parsed for the following key:","\n  ","\n    ","\"","event_type","\" - should hold the string \"","stat_result","\" if the event was triggered by this function","\n  ","\n  ","If the event type relates to this function, then there will also be the following additional key:","\n  ","\n    ","\"","user","\" - holds the user ID for the requested stats.","\n  ","\n  ","There may also be an extra set of key value pairs, where the key is the stat name requested, and the value the value for that stat on the server. Note that if a stat has never been created for this user (because they haven't fired the events that\n    set it), no value may be returned for that stat (","ds_map_exists()"," can be used to check for the stats in the ","async_load"," map).","\n  ","If the request fails due to the request length being to large, there should be a message in the console output stating the error code:","\n  ","xboxlive_get_stats_for_user - exception occurred getting results - 0x80190190","\n  ","When this happens, the async event DS map should have a \"succeeded\" key with a value of \"0\", and in this case you should attempt to retrieve fewer stats in a single call.","\n  "," ","\n  ","\n  ","xboxlive_get_stats_for_user(user_id, serviceconfig_id, statname1, …);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID pointer.","\n      ","\n      ","\n        ","serviceconfig_id","\n        ","The service config file ID","\n      ","\n      ","\n        ","statname1 (2, 3, etc...)","\n        ","The stat names to retrieve the information for.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var _uid = xboxlive_get_user(0);"," var _configid = \"00000000-0000-0000-0000-000000000000\";"," xboxlive_get_stats_for_user(xbuser, _configid, \"GameProgress\", \"CurrentMode\");","\n  ","The above code gets the user ID and then uses that to request information about specific stats for that user.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_read_player_leaderboard","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_get_stats_for_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2532"})