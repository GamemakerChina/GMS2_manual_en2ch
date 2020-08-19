rh._.exports({"0":["xboxlive_matchmaking_join_invite"],"1":["xboxlive_matchmaking_join_invite"],"2":["xboxlive_matchmaking_join_invite"],"3":["\n  ","\n  ","\n  ","This function can be called to process a join invitation once you have successfully called ","xboxlive_matchmaking_start()",". You supply the local UserID and the the invitation values (ID and host ID)\n    which were returned when the invitation was received, along with the name of the Session Template that you created (a string). It will then join the user to the session they've been invited to, and you will receive Social Asynchronous Events as\n    if you had called ","xboxlive_matchmaking_find()",".","\n  "," ","\n  ","\n  ","xboxlive_matchmaking_join_invite(user_who_received_invite, invitation_id, invitation_host, sda_template_name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","user_who_received_invite","\n        ","The local user ID pointer.","\n      ","\n      ","\n        ","invitation_id","\n        ","The invitation ID.","\n      ","\n      ","\n        ","invitation_host","\n        ","The invitation host ID.","\n      ","\n      ","\n        ","sda_template_name","\n        ","The session template name.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var userID = xboxlive_user_for_pad(global.PadIndex);"," xboxlive_matchmaking_join_invite(userID, global.InviteID, global.InviteHost, global.SessionTemplate);","\n  ","The above gets the user ID for the given gamepad and then attaempt to join the session that they have been invited to.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Match Making","\n        ","Next: ","xboxlive_matchmaking_start","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_matchmaking_join_invite"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2545"})