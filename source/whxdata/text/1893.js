rh._.exports({"0":["ds_set_precision"],"1":["ds_set_precision"],"2":["ds_set_precision"],"3":["\n  ","\n  ","\n  ","When comparing values, for example when searching in a map or sorting a list, GameMaker Studio 2 must decide when two values are equal. For strings and integer values this is clear but for real numbers, due to floating\n    point round-off errors, seemingly equal numbers can easily become unequal. For example, it's possible that ","(5 / 3) * 3"," will ","not"," be equal to 5! To help avoid this, a precision value\n    is used on all real number functions, and when the ","difference between two numbers is smaller"," than this precision they are considered equal. The default a precision of 0.0000001 is used for all data structure functions\n    unless changed by this function.","\n  ","NOTE",": This precision is used in all data structures but not in other comparisons in GML!","\n  "," ","\n  ","\n  ","ds_set_precision(prec);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","prec","\n        ","The precision value (default 0.0000001)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Returns:N/A","\n  "," ","\n  ","\n  ","ds_set_precision(0.0001);","\n  ","The above code will change the default precision setting for all data structure functions.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Data Structures","\n        ","Next: ds_exists","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["ds_set_precision"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1893"})