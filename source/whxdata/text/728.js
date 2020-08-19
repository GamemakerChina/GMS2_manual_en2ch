rh._.exports({"0":["audio_emitter_gain"],"1":["audio_emitter_gain"],"2":["audio_emitter_gain"],"3":["\n  ","\n  ","\n  ","This function sets the maximum gain (volume) for the sound. The perceived volume for a sound can change depending on the ","fall-off value"," and the position it has relative to the ","listener",",\n    but by setting the gain with this function, the full volume will never exceed the specified gain value. The image below illustrates how gain affects the volume of the emitter when fall-off is greater than 0:","\n  ","This function will change the volume of the sound while it is being played as well all subsequent sounds played\n    through the given emitter. Note that on some platforms you can have a gain of greater than 1, although a value of 1 is considered \"full volume\" and anything greater may introduce audio clipping or distortion.","\n  ","NOTE: ","the final volume will also be influenced by the global audio gain that has been set by the function ","audio_master_gain()",".","\n  "," ","\n  ","\n  ","audio_emitter_gain(emitter, gain);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","emitter","\n        ","The index of the emitter to change.","\n      ","\n      ","\n        ","gain","\n        ","The maximum gain (default 1).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if up","    {\n    ","    gain += 0.05;","    if gain >= 1 up = false;","    }\n    "," else\n    ","    {\n    ","    gain += 0.05;","    if gain <= 0 up = true;","    }\n    "," audio_emitter_gain(s_emit, gain);","\n  ","The above code sets the variable \"gain\" to different values and then uses that same variable to set the gain of the emitter indexed in the variable \"s_emit\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio Emitters","\n        ","Next: ","audio_emitter_pitch","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_emitter_gain"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"728"})