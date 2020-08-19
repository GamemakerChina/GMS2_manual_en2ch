rh._.exports({"0":["physics_fixture_set_chain_shape"],"1":["physics_fixture_set_chain_shape"],"2":["physics_fixture_set_chain_shape"],"3":["\n  ","\n  ","\n  ","This function defines a \"chain\" fixture shape. A chain fixture is comprised of a number of points, which are then connected together using edge shapes to join them. The function itself takes the index (ID) of the fixture and can tell the fixture\n    to loop or not. Setting this to ","true"," will connect the last point to the first point with an edge, while setting it to ","false"," will not. Note that this function on prepares the fixture to accept the points required to make the chain,\n    and these should be added after calling this function using ","physics_fixture_add_point()",", much as you would when building a polygon fixture.","\n  ","When creating a chain fixture, you must give it at least two points but you are not limited in the number of subsequent points that you can add to make up the finished fixture.","\n  "," ","\n  ","\n  ","physics_fixture_set_chain_shape(fixture, loop)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","fixture","\n        ","The index of the fixture","\n      ","\n      ","\n        ","loop","\n        ","Whether to close the chain (","true",") or not (","false",").","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var xx = -100;"," var yy = room_height / 2;"," var fix = physics_fixture_create(); physics_fixture_set_chain_shape(fix, false);"," for (var i = 0; i < 10; i++;)","     {\n    ","     physics_fixture_add_point(fix, xx, yy);","     xx += 50 + random(150);","     yy = (room_height / 2) - 250 + irandom(500);","     }\n    "," physics_fixture_bind(fix, id);","\n  ","The above code will create a line of \"edge\" fixtures with a variety of heights over the length of the room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Fixtures","\n        ","Next: ","physics_fixture_set_polygon_shape","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["physics_fixture_set_chain_shape"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2089"})