rh._.exports({"0":["solid"],"1":["solid"],"2":["solid"],"3":["\n  ","\n  ","\n  ","An instance can be flagged as ","solid"," through the object properties in the ","Object Editor",", or by changing the value of this built-in variable. If ","solid"," is set to ","true"," then,\n    when a collision is detected, the colliding instance is returned automatically to the position it was at in the step previous to the collision (and then any code or actions are run in the collision event). If it is set to ","false",", all positioning\n    must be dealt with through the collision event.","\n  "," ","\n  ","\n  ","solid;","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if other.solid = true","     {\n    ","     x = xprevious;","     y = yprevious;","     }\n  ","\n  ","The above code will check the solid flag of the \"other\" instance in a collision and if it is set to ","true"," move that instance back to its previous position.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instance Variables","\n        ","Next: ","persistent","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["solid"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"932"})