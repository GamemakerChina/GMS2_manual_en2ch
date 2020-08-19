rh._.exports({"0":["matrix_build_lookat"],"1":["matrix_build_lookat"],"2":["matrix_build_lookat"],"3":["\n\n\n\n\n  ","\n  ","\n  ","This function builds a \"look-at\" (view) matrix based on the specified parameters listed below. Since this function modifies the view matrix and not the projection matrix, you should first initialize the projection matrix using the other matrix\n    function ","matrix_build_projection_perspective()",", then use this function to move the view camera around within the projection.","\n  ","To set the view you first need to define the position you look ","from",", which is indicated by the parameters (xfrom, yfrom, zfrom). Next you must specify the direction you look ","at"," and this is done by giving a second point to look towards\n    with the arguments (xto, yto, zto). Finally, you can still rotate the camera around the line from the viewpoint to the looking point, and to specify this we must give an \"up\" vector - the direction that is upwards in the camera. This is\n    given by the last three arguments (xup, yup, zup).","\n  "," ","\n  ","\n  ","matrix_build_lookat(xfrom, yfrom, zfrom, xto, yto, zto, xup, yup, zup);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","xfrom","\n        ","The x coordinate of the position to look from.","\n      ","\n      ","\n        ","yfrom","\n        ","The y coordinate of the position to look from.","\n      ","\n      ","\n        ","zfrom","\n        ","The z coordinate of the position to look from.","\n      ","\n      ","\n        ","xto","\n        ","The x coordinate of the position to look to.","\n      ","\n      ","\n        ","yto","\n        ","The y coordinate of the position to look to.","\n      ","\n      ","\n        ","zto","\n        ","The z coordinate of the position to look to.","\n      ","\n      ","\n        ","xup","\n        ","The x coordinate of the \"up\" vector.","\n      ","\n      ","\n        ","yup","\n        ","The y coordinate of the \"up\" vector.","\n      ","\n      ","\n        ","zup","\n        ","The z coordinate of the \"up\" vector.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Matrix index","\n  "," ","\n  ","\n  ","viewmat = matrix_build_lookat(640, 240, -10, 640, 240, 0, 0, 1, 0);"," projmat = matrix_build_projection_ortho(640, 480, 1.0, 32000.0);"," camera_set_view_mat(view_camera[0], viewmat);"," camera_set_proj_mat(view_camera[0], projmat);","\n  ","The above code creates a new look-at matrix and orthographic matrix, stores their IDs in local variables and then uses them to set the view and projection matrices for the camera assigned to view port[0].","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Matrix Functions","\n        ","Next: ","matrix_build_projection_ortho","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["matrix_build_lookat"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2052"})