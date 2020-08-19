rh._.exports({"0":["xboxlive_gamedisplayname_for_user"],"1":["xboxlive_gamedisplayname_for_user"],"2":["xboxlive_gamedisplayname_for_user"],"3":["\n  ","\n  ","\n  ","With this function you can retrieve the display name - as a string - from the user ID pointer given. Note that if the user is local then the returned value is simply a string of the their display name, but if it is a remote user then the string will\n    be their gamertag which can then be used, for example, for muting/unmuting in voice chat.","\n  "," ","\n  ","\n  ","xboxlive_gamedisplayname_for_user(user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The ID pointer of the user to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","for(var i = 0; i < xboxlive_get_user_count(); ++i;)","     {\n    ","     user_id[i] = xboxlive_get_user(i);","     user_name[i] = xboxlive_gamedisplayname_for_user(user_id[i]);","     }\n  ","\n  ","The above code gets the user ID pointer for each available user account and then stores the pointer along with the display name in two arrays.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_user_for_pad","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_gamedisplayname_for_user"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2504"})