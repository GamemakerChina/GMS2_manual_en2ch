rh._.exports({"0":["physics_joint_pulley_create"],"1":["physics_joint_pulley_create"],"2":["physics_joint_pulley_create"],"3":["\n  ","\n  ","\n  ","The pulley joint is used to connect two instances within the physics world in such a way that moving one will directly influence the movement of the other. These joints are first anchored in the world space at two points, each one connected to an instance\n    at its center of mass. This can be changed by setting the local anchor x/y coordinates relative to the origin of the instance, meaning that the actual connection from the instance to the physics world anchor point can be offset somewhere other than\n    its origin. The following image illustrates this:","\n  ","If you look at inst2 you can see that its local anchor point has been offset 20 pixels to the \"left\"\n    of its origin (Remember! The world anchor points are defined using the room coordinates, while the local anchor points are defined relative to the origin of the instance). You can also specify a ratio for the pulley joint, which tells one side or\n    the other to move faster, with a value below 1 making the first instance move faster (E.G. 0.5 will make it move twice as fast) and a value above 1 making the second instance move faster (E.G. 2 will make it move twice as fast).","\n  ","As with all the joints, if you set the \"col\" value to ","true"," then the two instances can interact and collide with each other but ","only"," if they have collision events, however if it is set to ","false",", they will not collide\n    no matter what.","\n  "," ","\n  ","\n  ","physics_joint_pulley_create(inst1, inst2, w_anchor1_x, w_anchor1_y, w_anchor2_x, w_anchor2_y, l_anchor1_x, l_anchor1_y, l_anchor2_x, l_anchor2_y, ratio, col)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","inst1","\n        ","The first instance to connect with the joint","\n      ","\n      ","\n        ","inst2","\n        ","The second instance to connect with the joint","\n      ","\n      ","\n        ","w_anchor1_x","\n        ","The x coordinate where the first part of joint is anchored, within the game world","\n      ","\n      ","\n        ","w_anchor1_y","\n        ","The y coordinate where the first part of the joint is anchored, within the game world","\n      ","\n      ","\n        ","w_anchor2_x","\n        ","The x coordinate where the second part of the joint is anchored, within the game world","\n      ","\n      ","\n        ","w_anchor2_y","\n        ","The y coordinate where the second part of the joint is anchored, within the game world","\n      ","\n      ","\n        ","l_anchor1_x","\n        ","The local x coordinate where joint 1 is anchored to the first instance","\n      ","\n      ","\n        ","l_anchor1_y","\n        ","The local y coordinate where joint 1 is anchored to the first instance","\n      ","\n      ","\n        ","l_anchor2_x","\n        ","The local x coordinate where joint 2 is anchored to the second instance","\n      ","\n      ","\n        ","l_anchor2_y","\n        ","The local y coordinate where joint 2 is anchored to the second instance","\n      ","\n      ","\n        ","ratio","\n        ","Set the velocity ratio between two instances","\n      ","\n      ","\n        ","col","\n        ","Whether the two instances can collide (true) or not (false)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer (index of the joint)","\n  "," ","\n  ","\n  ","var t_fix, inst1, inst2;"," t_fix = physics_fixture_create();"," physics_fixture_set_circle_shape(t_fix, 20);"," inst1 = instance_create_layer(150, room_height - 90, \"Instances\", obj_Block);"," inst2 = instance_create_layer(300, room_height\n    - 90, \"Instances\", obj_block);"," physics_fixture_bind(t_fix, inst1);"," physics_fixture_bind(t_fix, inst2);"," physics_joint_pulley_create(inst1, inst2, 150, room_height - 140, 300, room_height - 140, 0, 0, 0, 0, 2, 0);"," physics_fixture_delete(t_fix);\n  ","\n  ","The above code creates and defines a new fixture, creates two instances of \"obj_Block\", and then binds this fixture two them. It then goes on to define a pulley joint between these instance, with no offset for the joints, a ratio of 2:1 (meaning\n    that inst2 will move faster). No collisions occur between the two instances in the pulley.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_gear_create","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_joint_pulley_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2111"})