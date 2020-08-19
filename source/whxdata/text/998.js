rh._.exports({"0":["room_instance_add"],"1":["room_instance_add"],"2":["room_instance_add"],"3":["\n  ","\n  ","\n  ","With this function you can add an instance into any room other than the current one and at any position within that room. The function returns the unique ","id"," of the instance which can then\n    be used in further function calls to set properties etc... of that instance, but ","only once the game has entered the specified room",". If you wish to create an instance in the current room you should be using the function ","instance_create_layer()",". Note\n    that calling this function on a room asset created in the Asset Browser ","will permanently add the instance to the room",", and even calling ","game_restart()"," will not return the room to it's original state\n    (only ending the game and opening it again will start with the room in its original state again).","\n  "," ","\n  ","\n  ","room_instance_add(index, x, y, obj);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the room to add an object instance to.","\n      ","\n      ","\n        ","x","\n        ","The x position of the new instance.","\n      ","\n      ","\n        ","y","\n        ","The y position of the new instance.","\n      ","\n      ","\n        ","obj","\n        ","The object to add an instance of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Instance ID","\n  "," ","\n  ","\n  ","global.rm = room_add();"," room_assign(rm_Base, global.rm);"," room_instance_add(global.rm, 100, 100, obj_Player);","\n  ","The above code will add a new room to the game and then copy the contents of the room indexed as \"rm_Base\" into it. It will then add an instance of the object \"obj_player\" at the position 100,100 of this new room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Rooms","\n        ","Next: ","room_instance_clear","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["room_instance_add"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"998"})