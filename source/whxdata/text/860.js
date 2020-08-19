rh._.exports({"0":["The Sequence Object Struct"],"1":["Sequence Object Struct"],"2":["The Sequence Object Struct,seqplay_oneshot,seqplay_loop,seqplay_pingpong,spritespeed_framespersecond,spritespeed_framespergameframe,name,loopmode,playbackSpeed,playbackSpeedType,length,volume,xorigin,yorigin,messageEventKeyframes,momentKeyframes,tracks"],"3":["\n  ","\n  ","\n  ","A sequence object is the name given to the struct retrieved from the sequence asset as defined in the asset browser for your game. This ","struct"," will have the following properties that can be changed:","\n  ","\n    ","name",": This is the name of the sequence as a string and you can get or set this value as required. Note that sequences created using the function ","sequence_create()"," will not have a name and this\n      will simply be an empty string \"\".","\n    ","loopmode",": This is the playback mode of the sequence object and can be get or set. It will return (or can be set to) the following constants:","\n  ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Value","\n      ","\n      ","\n        ","seqplay_oneshot","\n        ","The sequence will play once then stop when finished.","\n        ","0","\n      ","\n      ","\n        ","seqplay_loop","\n        ","The sequence will loop, with the playhead going back to the start when it reaches the end of the playback region.","\n        ","1","\n      ","\n      ","\n        ","seqplay_pingpong","\n        ","The sequence will loop, with the playhead reversing direction when it reaches the end of the playback region.","\n        ","2","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","playbackSpeed",": This specifies the playback speed of the sequence, which is interpreted as either frames-per-second or frames-per-game-frame depending on the ","playbackSpeedType"," (see below). You can get or set this value.","\n    ","playbackSpeedType",": This specifies how the ","playbackSpeed"," should be interpreted and you can get or set this value. You can use one of the following constants to set the value (or one of these constants will be returned if checking\n      the property):","\n  ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Value","\n      ","\n      ","\n        ","spritespeed_framespersecond","\n        ","Specifies that ","playbackSpeed"," should be interpreted as frames-per-second","\n        ","0","\n      ","\n      ","\n        ","spritespeed_framespergameframe","\n        ","Specifies that ","playbackSpeed"," should be interpreted as frames-per-game-frame.","\n        ","1","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n    ","length",": The length of the sequence in frames. You can get or set this value, but note that making a sequence shorter may cause issues if a sequence instance referencing this sequence has its playhead set to past the new length.","\n    ","volume",": This is a scalar value from 0 to 1 that is used to scale the volume of all audio tracks in the sequence. You can get or set this value and it will modify the global audio output for all tracks - for example, if you have an audio track\n      with a volume of 0.8 and then set the sequence ","volume"," property to 0.5, the audio track will have a final volume of 0.4.","\n    ","xorigin",": This is the origin of the sequence along the X axis. You can get or set this value.","\n    ","yorigin",": This is the origin of the sequence along the Y axis. You can get or set this value.","\n    ","messageEventKeyframes",": This allows access to the message event keyframes for the sequence. You can get or set these message events, and when getting this property an array of keyframe structs is returned, and for setting the property you\n      should supply an array of keyframe structs. For more information, please see the page on ","Sequence Events and Moments",".","\n    ","momentKeyframes",": This allows access to the moment event keyframes for the sequence. You can get or set these moment events, and when getting this property an array of keyframe structs is returned, and for setting the property you should supply\n      an array of keyframe structs. For more information, please see the page on ","Sequence Events and Moments",".","\n    ","tracks",": This allows access to the list of ","asset tracks"," on the top level of the sequence. You can get or set this property, and when getting this property an array of track structs is returned, and for setting the property you should\n      supply an array of track structs. For more information, please see the section on ","Track Structs",".","\n  ","\n  ","Note that if you want to access the properties of a sequence that has been created in the asset browser, you must first call the function ","sequence_get()"," on the asset index to retrieve the sequence object struct.\n    Also note that any changes made to this sequence struct will mean that all further instances of this sequence asset will also have these changes, and they will be maintained as long as the game is running, even if you call the ","game_restart()","    function.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sequences","\n        ","Next: ","The Sequence Instance Struct","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Sequence Object Struct"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"860"})