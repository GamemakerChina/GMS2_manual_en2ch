rh._.exports({"0":["xboxlive_stats_set_stat_string"],"1":["xboxlive_stats_set_stat_string"],"2":["xboxlive_stats_set_stat_string"],"3":["\n  ","\n  ","\n  ","This function can be used to set a stat to a string for the given user ID. You supply the user ID as returned by (for example) the function ","xboxlive_get_user()",", then the stat string\n    to set (","if the stat string does not already exist then a new stat will be created and set to the given value",") and then the string to set the stat to. Note that the stat name must be alphanumeric only, with no symbols or spaces, but the string\n    value you are setting can have spaces and special characters.","\n  ","When setting the stat string, any previous string will be overridden, therefore it is up to you to determine if the stat string should be updated or not by comparing to the current stat string with the new one before setting it.","\n  ","The function will will return -1 if there was an error or the user ID is invalid, or any other value if the function was successfully called.","\n  "," ","\n  ","\n  ","xboxlive_stats_set_stat_string(user_id, stat, value);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The user ID pointer to set the stat for","\n      ","\n      ","\n        ","stat","\n        ","The statistic to set (a string)","\n      ","\n      ","\n        ","value","\n        ","The value to set the stat to (a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","xboxlive_stats_set_stat_string(p_user_id, \"LevelName\", global.LevelName);","\n  ","The above code sets the stat \"LevelName\" to the string stored in the given global variable. ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Stats And Leaderboards","\n        ","Next: ","xboxlive_stats_delete_stat","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_stats_set_stat_string"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2525"})