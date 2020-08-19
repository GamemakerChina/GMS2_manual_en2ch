rh._.exports({"0":["steam_upload_score"],"1":["steam_upload_score"],"2":["steam_upload_score"],"3":["\n  ","\n  ","\n  ","This function will send a score to the given leaderboard. The score to be uploaded is a real number, and the leaderboard name is a string that was defined when you created the leaderboard using the function ","steam_create_leaderboard()",".\n    If the function fails, it will return a value of -1, while a successful post will return a unique ID for the upload and trigger an asynchronous ","Steam Event",". This\n    event will create a ","DS Map"," in the built in variable ","async_load"," with the following key/value pairs:","\n  ","\n    ","\"","event_type","\" - This key will hold the value \"","leaderboard_upload","\" when triggered by this function","\n    ","\"","lb_name","\" - This key holds the name of the leaderboard which was posted to","\n    ","\"","success","\" - Will be 1 if the post succeeded, 0 failed","\n    ","\"","updated","\" - Will be 1 if the leaderboard score was actually updated (ie: the new score was better) or 0 otherwise","\n    ","\"","post_id","\" - This key should match the ID value returned by the upload call","\n    ","\"","score","\" - This key holds the score which was posted","\n  ","\n  "," ","\n  ","\n  ","steam_upload_score(lb_name, score);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","lb_name","\n        ","The name of the leaderboard that you are uploading the scores to (a string).","\n      ","\n      ","\n        ","score","\n        ","The score to upload (a real number).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","In this example, we first upload a score and then parse the ","async_load"," map returned if successful. The code below shows a typical example for uploading:","\n  ","if (hp <= 0)","     {\n    ","     upload_ID = steam_upload_score(\"Game Scores\", score);","     if (!upload_ID)","         {\n    ","         alarm[0] = room_speed;","         }\n    ","     }\n  ","\n  ","Note that we have set an alarm if the call fails. This would be used to try the upload again at a later time and you can add extra code there to retry the upload or to save the score to a text file should it continue to fail, etc... We now add the following\n    into the ","Steam async event"," for the instance controlling the scores:","\n  ","var type = ds_map_find_value(async_load, \"event_type\");"," if (type == \"leaderboard_upload\")","     {\n    ","     var lb_ID = ds_map_find_value(async_load, \"post_id\");","     if lb_ID == upload_ID","         {\n    ","         var lb_name = ds_map_find_value(async_load, \"lb_name\");","         var lb_done = ds_map_find_value(async_load, \"success\");","         var lb_score = ds_map_find_value(async_load, \"score\");","         var\n    lb_updated = ds_map_find_value(async_load, \"updated\");","         show_debug_message(\"leaderboard post id:\" + string(lb_ID) + \" to lb:\" + string(lb_name) + \" with score:\" + string(lb_score) + \" updated=\"\n    + string(lb_updated));","         if (lb_done)","             {\n    ","             show_debug_message(\"- Succeeded\");","             }\n    ","         else\n    ","             {\n    ","             show_debug_message(\"- Failed\");","             }\n    ","         }\n    ","     }\n  ","\n  ","in the example we are simply outputting the return values to the compiler window as debug messages, but you can use this event to deal with the information in any way you choose.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Leaderboards","\n        ","Next: ","steam_upload_score_buffer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_upload_score"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2295"})