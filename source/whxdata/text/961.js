rh._.exports({"0":["instance_create_depth"],"1":["instance_create_depth"],"2":["instance_create_depth"],"3":["\n  ","\n  ","\n  ","With this function you can create a new instance of the specified object at any given point within the room and at the depth specified. The depth can be any value, where the lower the depth the \"nearer\" to the camera things will be drawn and\n    the higher the depth the further away, so an instance at depth -200 will be drawn over an instance at depth +300 (for example).","\n  ","Note that this function will actually create a room layer for the instance, since all instances ","must"," be on a layer in the room, but since this is a ","managed"," layer (ie: not one that you have created through code or in the room, but one that\n    GameMaker Studio 2 has created automatically) you cannot access it, and the ","layer"," instance variable will return -1.","\n  ","IMPORTANT!"," There is a minimum and maximum layer depth of -16000 to 16000. Anything placed on a depth outside that range ","will not be drawn"," although all events will still run as normal.","\n  ","This function returns the ","id"," of the new instance which can then be stored in a variable or used to access that instance. Note that this function will also call the ","Create Event","    of the instance being created ","before"," continuing with the code or actions for the event that called the function.","\n  "," ","\n  ","\n  ","instance_create_depth(x, y, depth, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position the object will be created at","\n      ","\n      ","\n        ","y","\n        ","The y position the object will be created at","\n      ","\n      ","\n        ","depth","\n        ","The depth to assign the created instance to","\n      ","\n      ","\n        ","obj","\n        ","The object index of the object to create an instance of","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (instance ID value)","\n  "," ","\n  ","\n  ","var inst = instance_create_depth(x, y, -10000, obj_Bullet);"," with (inst)","     {\n    ","     speed = other.shoot_speed;","     direction = other.image_angle;","     }\n  ","\n  ","The above code creates a new instance of the object \"obj_Bullet\" and stores the instance id in a variable. This variable is then used to assign ","speed"," and ","direction"," to the new instance.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","instance_destroy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_create_depth"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"961"})