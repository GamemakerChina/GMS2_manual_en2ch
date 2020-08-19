rh._.exports({"0":["point_distance"],"1":["point_distance"],"2":["point_distance"],"3":["\n\n\n\n\n  ","\n  ","\n  ","This function returns the length of a vector formed by the specified components [x1,y1] and [x2,y2]. For example, in the image below if we want to get the distance between the player ship position and the enemy position so that we can calculate if the\n    enemy is close enough to shoot at then we would use this function (the exact code is in the example below the image):","\n  ","\n  "," ","\n  ","\n  ","point_distance(x1, y1, x2, y2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x1","\n        ","The x coordinate of the first component of the vector","\n      ","\n      ","\n        ","y1","\n        ","The y coordinate of the first component of the vector","\n      ","\n      ","\n        ","x2","\n        ","The x coordinate of the second component of the vector","\n      ","\n      ","\n        ","y2","\n        ","The y coordinate of the second component of the vector","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","var ex, ey;"," ex = instance_nearest(x, y, enemy).x;"," ey = instance_nearest(x, y, enemy).y;"," if (point_distance(x, y, ex, ey) < 200)","     {\n    ","     instance_create_layer(x, y, \"Bullets\", obj_Missile)","     }\n  ","\n  ","The above code will get the x and y coordinates of the nearest enemy and then use them to check the distance (length) of the vector formed by them and the player coordinates. If the value is less than 200, the player object will create an instance of\n    \"obj_Missile\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Angles And Distance","\n        ","Next: ","point_distance_3d","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["point_distance"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2035"})