rh._.exports({"0":["physics_joint_get_value"],"1":["physics_joint_get_value"],"2":["physics_joint_get_value"],"3":["\n  ","\n  ","\n  ","By using a series of predefined constants, you can ask GameMaker Studio 2 to tell you a number of things about the state of any given joint. This is very useful as it gives you the ability to delete joints or change an instances behaviour depending\n    on whatever your needs are at the time. There are a number of constants that can be used in this function and they can be found here: ","Physics Joint Constants",", but be aware that complex calculations are done\n    when you call these, so they should be used with care and only when necessary and note that ","many are unique to a specific type of joint",".","\n  ","If the property does not exist (if, for example, you check a pulley joint for prismatic translation) then 0 will be the return value.","\n  "," ","\n  ","\n  ","physics_joint_get_value(joint, value)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","joint","\n        ","The index of the joint that you wish to test","\n      ","\n      ","\n        ","value","\n        ","The constant for the joint property that you wish to test","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if shipJoint","     {\n    ","     var reactionForceX = physics_joint_get_value(shipJoint, phy_joint_reaction_force_x);","     var reactionForceY = physics_joint_get_value(shipJoint, phy_joint_reaction_force_y);","     var reactionForce = point_distance(0, 0, reactionForceX,\n    reactionForceY);","     if reactionForce > 2","         {\n    ","         physics_joint_delete(shipJoint);\n    ","         shipJoint = -1;","         }\n    ","     }\n  ","\n  ","The above code checks to see if the variable \"shipJoint\" holds a joint index and if it does, it then calculates the force being applied to that joint using the two constants. Finally, if the total force is greater than 2, the joint is deleted.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Joints","\n        ","Next: ","physics_joint_set_value","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_joint_get_value"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2119"})