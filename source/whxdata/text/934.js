rh._.exports({"0":["depth"],"1":["depth"],"2":["depth"],"3":["\n  ","\n  ","\n  ","When you create an object you can assign it an initial ","depth"," which defines how the instances of that object will be drawn in the room when the game is being played and this variable can be used to get and to change that depth value while the\n    game is running. You would normally not need to use this variable as you should be setting instances to be added to discreet ","layers",", which in turn are set to a specific depth, but it may be that you want to change the depth\n    of an instance using this value, in which case a \"temporary layer\" will be created specifically for the instance at the given depth. Note that when no instances are on the same depth then this temporary layer will be removed from memory\n    (unlike regular layers which will remain even if they have nothing on them).","\n  ","IMPORTANT!"," When you modify the ","depth"," variable and GameMaker Studio 2 manages the layers, the built in ","layer"," variable will return -1 and not\n    the layer ID, since managed layers cannot be manipulated through code.","\n  ","In GameMaker Studio 2 the lower the depth value for an instance, the \"closer to the camera\" that instance will be drawn, while a higher depth value means that the instance will be drawn \"further away from the camera\", i.e:\n    -1000 is drawn on top of -100, which is drawn on top of 0, which is drawn on top of 100, which is drawn on top of 1000.","\n  ","Note that instances of an object that have the ","same"," depth can be drawn ","above ","or"," below each other","    even when they appear to be placed one on top of the other in the room editor. If you want to guarantee that something is drawn over or under everything else, you should always set the depth (or layer) explicitly. Also note that there is a minimum\n    (-16000) and maximum (+16000) depth value outside of which instances will not be drawn, although they will still exist and process events.","\n  ","NOTE: ","You ","cannot"," set the depth of an instance in its draw event (all other events are fine).","\n  "," ","\n  ","\n  ","depth;","\n  "," ","\n  ","\n  ","Real (single precision floating point value)","\n  "," ","\n  ","\n  ","if y != yprevious","     {\n    ","     depth = -y;","     }\n  ","\n  ","The above code will check to see if the y position has changed and if it has then the depth will also be set to correspond to it.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Variables","\n        ","Next: ","layer","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["depth"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"934"})