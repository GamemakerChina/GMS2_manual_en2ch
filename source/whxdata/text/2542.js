rh._.exports({"0":["xboxlive_matchmaking_session_leave"],"1":["xboxlive_matchmaking_session_leave"],"2":["xboxlive_matchmaking_session_leave"],"3":["\n  ","\n  ","\n  ","This function causes the user who created or found the specified session to leave it. You can get the session ID pointer from the ","async_load"," DS map that is\n    returned in the ","Asynchronous Social Event"," when you created or found a session (see ","xboxlive_matchmaking_create()","    for more details).","\n  "," ","\n  ","\n  ","xboxlive_matchmaking_session_leave(session_id);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","session_id","\n        ","The Session ID pointer of the session to leave.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if gamepad_button_check_pressed(0, gp_start)","     {","     xboxlive_matchmaking_session_leave(global.SessionID);","     }","\n  ","The above code checks for a gamepad button press and if one is detected then the user will logged out of the given matchmaking session.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Match Making","\n        ","Next: ","xboxlive_matchmaking_send_invites","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["xboxlive_matchmaking_session_leave"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2542"})