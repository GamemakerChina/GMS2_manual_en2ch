rh._.exports({"0":["object_set_visible"],"1":["object_set_visible"],"2":["object_set_visible"],"3":["\n  ","\n  ","\n  ","With this function you can flag a specific object as being visible or not (for more information on the \"visible\" flag see the section on the ","Object Editor","). This means that all instances\n    of this object that are created ","after visible has been changed"," will be created with this new state, while instances that are already in the room may not be affected.","\n  ","Please note that this is not an instance function! You can set the visible flag of individual instances using the ","visible"," variable and so have ten instances all flagged as visible even\n    though the object in question has the flag set to false in the IDE, and even if you change the visible flag of the object to true using this function, all instances that currently in the room will remain as they were, and only instances created after\n    calling the function will start with visible flagged as true.","\n  "," ","\n  ","\n  ","object_set_visible( index, vis );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the object to change.","\n      ","\n      ","\n        ","vis","\n        ","The new visibility of the object (true=visible, false=invisible).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if !object_get_visible(obj_Block)","     {","     object_set_visible(obj_Block, true);","     }","\n  ","The above code checks the visible flag of the object \"obj_Block\" and if it is false then it is changed to be flagged as true.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Objects","\n        ","Next: ","object_index","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["object_set_visible"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"927"})