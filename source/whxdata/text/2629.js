rh._.exports({"0":["weak_ref_create"],"1":["weak_ref_create"],"2":["weak_ref_create,weak references"],"3":["\n  ","\n  ","\n  ","With this function you can create a ","weak reference"," to a struct which can then be used to check if the struct is still \"alive\" (referenced) or not in the game. You supply the\n    reference to the struct you want to track, and the function will return another struct which is a weak reference to that struct. Note that you can check whether a reference is \"strong\" or \"weak\" by using the function ","instanceof()",",\n    as a strong reference will return either \"","struct","\" or the name of the constructor function that created the struct, or \"","weakref","\" if it's a weak reference. Also note that\n    the weak reference struct will have a variable \"","ref","\" which can be accessed to get the string reference to the struct in question, unless it has been garabage collected, in which case it will return ","undefined",".","\n  "," ","\n  ","\n  ","weak_ref_create(struct_to_track);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","struct_to_track","\n        ","The struct that you want to create a weak reference for","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Struct","\n  "," ","\n  ","\n  ","inventory_ref = weak_ref_create(inventory);","\n  ","The above code creates a weak reference to a struct and stores it in an instance variable for later use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Garbage Collection","\n        ","Next: ","weak_ref_alive","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["weak_ref_create"],"5":["© Copyright YoYo Games Ltd. 2021 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2629"})