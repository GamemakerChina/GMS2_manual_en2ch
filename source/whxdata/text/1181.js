rh._.exports({"0":["move_towards_point"],"1":["move_towards_point"],"2":["move_towards_point"],"3":["\n  ","\n  ","\n  ","This function simply tells the instance running the code to move towards a set point at a set speed. Bear in mind that it is up to you to tell it what to do once it gets there, as it won't just stop by itself. This means that you can get a \"vibrating\"\n    instance as it moves (for example) 3 pixels forward, overshoots the x/y target position by 2, then moves 3 pixels back again, overshooting the target point by one and so on... There are a number of ways that this can be avoided, for example using\n    ","distance_to_point()"," to see how far from the specified location the instance is before moving.","\n  ","NOTE",": this function sets the speed of the instance, so even if you stop using this code, the instance will keep moving in the previous direction, so it is necessary to set the instance ","speed","    to 0 if you wish it to stop. See the code example below.","\n  "," ","\n  ","\n  ","move_towards_point( x, y, sp );","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","x","\n        ","The x position of the point to move towards.","\n      ","\n      ","\n        ","y","\n        ","The y position of the point to move towards.","\n      ","\n      ","\n        ","sp","\n        ","The speed to move at in pixels per second.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if point_distance(x, y, target.x, target.y) > 5","     {\n    ","     move_towards_point(target.x, target.y, 5);","     }\n    "," else speed = 0;","\n  ","The above code will move the instance towards the position of the instance indexed in the variable \"target\" at a speed of 5 pixels per step. Once it reaches that position the speed is set to 0.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Movement","\n        ","Next: ","move_bounce_all","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["move_towards_point"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1181"})