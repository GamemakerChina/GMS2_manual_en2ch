rh._.exports({"0":["instance_count"],"1":["instance_count"],"2":["instance_count"],"3":["\n  ","\n  ","\n  ","With this ","read only"," variable you can get a count of all active instances that are in the room. This will include the instance running the code, but does ","not"," include those instances that have been deactivated using the ","instance deactivate","    functions. Note that this variable will only give you the number of instances at the ","start"," of the step, so any changes to the instances in the room made after the step has started will not be taken into consideration.","\n  "," ","\n  ","\n  ","instance_count;","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","if (instance_count < 100)","     {\n    ","     var dif = 100 - instance_count;","     while (--dif > 0)","         {\n    ","         instance_create_layer(random(room_width), random(room_height), \"Effects\", obj_Star);","         }\n    ","     }\n  ","\n  ","The above code will create multiple instances of the object \"obj_Star\" until the total instance count reaches 100.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","alarm_get","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["instance_count"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"975"})