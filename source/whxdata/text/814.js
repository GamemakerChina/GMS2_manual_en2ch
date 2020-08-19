rh._.exports({"0":["path_rescale"],"1":["path_rescale"],"2":["path_rescale"],"3":["\n  ","\n  ","\n  ","This function can be used to re-scale the given path along both (or either) the vertical and horizontal axis, basically moving each of the path points to a new position corresponding to this scale around the centre of the path. ","This function changes the actual path asset",",\n    and so will permanently affect how the path is used by all instances in the game from the moment the function is used until the end of the game. If this is not what you require, then you should use a function like ","path_duplicate()","    to create a copy of the path first, then call this function on the duplicated asset (don't forget to call ","path_delete()"," on the asset when it is no longer required).","\n  "," ","\n  ","\n  ","path_rescale(index, xscale, yscale);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The index of the path to scale.","\n      ","\n      ","\n        ","xscale","\n        ","What to multiply the current horizontal scale by. Default scale is 1.","\n      ","\n      ","\n        ","yscale","\n        ","What to multiply the current vertical scale by. Default scale is 1.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","path_rescale(pth_AI, 3, 3);","\n  ","This would re-scale the given path to three times its original size.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Path Manipulation","\n        ","Next: ","path_set_closed","\n        "," ","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["path_rescale"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"814"})