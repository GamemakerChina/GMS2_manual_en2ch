rh._.exports({"0":["audio_destroy_stream"],"1":["audio_destroy_stream"],"2":["audio_destroy_stream"],"3":["\n  ","\n  ","\n  ","If you have previously created an audio stream from a file using the function ","audio_create_stream()"," and no longer need that sound, you can call this function to delete it from\n    memory. Any further calls to the sound index after it has been destroyed will give an error. It should be noted that this will free up the stream but on the target platform this may not show up in a memory manager. This is because GameMaker Studio 2 pools\n    memory resources to prevent memory allocation overhead, and so the memory will remain allocated until required for something else or re-used for a new stream.","\n  ","NOTE",": This functionality is not available for the HTML5 target platform.","\n  "," ","\n  ","\n  ","audio_destroy_stream(filename);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","filename","\n        ","The file to stream the audio from.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","NA","\n  "," ","\n  ","\n  ","audio_destroy_stream(snd);","\n  ","The above code removes the sound indexed in the variable \"snd\" from memory.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Audio","\n        ","Next: ","audio_sound_set_track_position","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["audio_destroy_stream"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"704"})