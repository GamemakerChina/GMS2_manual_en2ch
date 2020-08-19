rh._.exports({"0":["phy_bullet"],"1":["phy_bullet"],"2":["phy_bullet"],"3":["\n  ","\n  ","\n  ","This variable defines whether or not the instance is extremely fast moving (for example a bullet). The default value is ","false"," but if set to ","true"," this tells GameMaker Studio 2 that the instance will be moving at such high speeds\n    that it will require more expensive collision detection to ensure it doesn't pass through other instances undetected","\n  "," ","\n  ","\n  ","phy_bullet;","\n  "," ","\n  ","\n  ","Boolean (or ","undefined"," if the instance is not physics enabled)","\n  "," ","\n  ","\n  ","with (instance_create_layer(x, y, \"Bullets\", obj_Shoot))","     {\n    ","     phy_bullet = true;","     physics_apply_local_impulse(0, 10, 0, 200);","     }\n  ","\n  ","The above code creates a new instance and then defines it as being a \"bullet\" in the physics world before giving it a massive impulse along the y axis.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics Variables","\n        ","Next: ","phy_speed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["phy_bullet"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2180"})