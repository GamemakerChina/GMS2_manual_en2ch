rh._.exports({"0":["variable_struct_get"],"1":["variable_struct_get"],"2":["variable_struct_get"],"3":["\n  ","\n  ","\n  ","With this function you can get the value from a given named variable within a struct. You supply the struct reference as well as the name of the variable to get the value of ","as a string"," (see example code below). The\n    function will return the value held by the variable or ","undefined"," if the named variable does not exist.","\n  ","IMPORTANT!"," If the variable you are getting does not exist then the function will return the keyword ","undefined"," and you may get errors that will stop the game from functioning, so if in doubt use\n    the function ","variable_struct_exists()"," first.","\n  "," ","\n  ","\n  ","variable_instance_get(struct_id, name);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","struct","\n        ","The struct reference to use","\n      ","\n      ","\n        ","name","\n        ","The name of the variable to get (as a string)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Value (any data type) or ","undefined","\n  "," ","\n  ","\n  ","if variable_struct_exists(mystruct, \"shields\")","     {\n    ","     var ss = variable_struct_get(mystruct, \"shields\");","     }\n    "," else\n    ","     }\n    ","     var ss = -1;","     }\n  ","\n  ","The above code will check to see if a variable exists in the given struct and if it does then the value it holds is retrieved and stored in a local variable. If it does not exist, the local variable is set to -1.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","variable_struct_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["variable_struct_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"522"})