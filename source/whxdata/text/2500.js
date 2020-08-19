rh._.exports({"0":["xboxlive_user_is_remote"],"1":["xboxlive_user_is_remote"],"2":["xboxlive_user_is_remote"],"3":["\n  ","\n  ","\n  ","This function will check the given user ID and return ","true"," if the player is a remote player, or ","false"," otherwise.","\n  "," ","\n  ","\n  ","xboxlive_user_is_remote(user_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_id","\n        ","The ID pointer of the user to check.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","global.PlayerNum = 0;"," global.Player_ID = array_create();"," for(var i = 0; i < xboxlive_get_user_count(); ++i;)","     {\n    ","     var _uid = xboxlive_get_user(i);","     if xboxlive_user_is_active(_uid)","         {\n    ","         if !xboxlive_user_is_remote(_uid)","             {\n    ","             global.Remote_Player_ID[global.PlayerNum++] = _uid;","             }\n    ","         }\n    ","     }\n  ","\n  ","The above code loops through the user accounts and then checks to see if any of them are active. If they are, their user ID is added into a global array, only if they are not remote users.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Users And Accounts","\n        ","Next: ","xboxlive_user_id_for_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_user_is_remote"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2500"})