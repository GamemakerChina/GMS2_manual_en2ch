rh._.exports({"0":["layer_sequence_get_sequence"],"1":["layer_sequence_get_sequence"],"2":["layer_sequence_get_sequence"],"3":["\n  ","\n  ","\n  ","With this function you supply the sequence element ID - as returned by ","layer_sequence_create()"," or by one of the ","layer element functions","    - and it will return the sequence ","struct",". This function bypasses the need to first get the sequence instance struct and permits you to access the sequence data directly. You can find out more about\n    the format of the sequence struct from the section on ","Sequence Functions",".","\n  "," ","\n  ","\n  ","layer_sequence_get_sequence(sequence_element_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sequence_element_id","\n        ","The unique ID value of the sequence element to target","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","struct","\n  "," ","\n  ","\n  ","var _seq = layer_sequence_create(\"Background\", 0, 0, seq_AnimatedBackground);"," var _struct = layer_sequence_get_sequence(_seq);"," _struct.playbackSpeedType = spritespeed_framespersecond; _struct.playbackSpeed = 30;","\n  ","The above code creates a new sequence element and then retrieves the sequence data struct. This is then used to set the playback speed and type for the sequence.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequence Layers","\n        ","Next: ","layer_sequence_is_paused","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_sequence_get_sequence"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1156"})