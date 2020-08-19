rh._.exports({"0":["view_set_camera"],"1":["view_set_camera"],"2":["view_set_camera"],"3":["\n  ","\n  ","\n  ","This function will set a camera to a specific view port. You give the view port to set (from 0 to 7), and supply the unique camera ID value (as returned by the ","camera_create()"," functions or when you use ","view_get_camera()",").\n    If you give a value of -1 as the camera ID then you are removing a camera from the view port and note that if that view port is enabled and visible you may get some unpredictable results.","\n  "," ","\n  ","\n  ","view_set_camera(view_port, camera_id)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","view_port","\n        ","The view port to target (0 - 7)","\n      ","\n      ","\n        ","camera_id","\n        ","The unique camera ID value returned when you created the camera","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var cam = camera_create_view(0, 0, 640, 480, 0, obj_Player, 5, 5, -1, -1);"," view_set_camera(0, cam);","\n  ","The above code will create a new camera and then assign it view port[0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Cameras And View Ports","\n        ","Next: ","view_set_visible","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["view_set_camera"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1592"})