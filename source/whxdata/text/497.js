rh._.exports({"0":["repeat"],"1":["repeat"],"2":["if,else,then,?,ternary,conditional"],"3":["\n  ","\n  ","\n  ","The GameMaker Language has a number of ways that you can perform ","loops",", ie: have a statement or statements iterate over itself a certain number of times. The simplest of these is the ","repeat"," statement, which has the form:","\n  ","repeat (<expression>)","     {","     <statement>;","     <statement>;","     ...","     }","\n  ","With ","repeat"," the given ","statement"," is repeated the number of times indicated by the rounded value of the ","expression",". For\n    example, the following creates five balls at random positions:","\n  ","repeat (5)","     {\n    ","     instance_create_layer(random(400), random(400), \"Instances\", obj_ball);","     }\n  ","\n  ","This can be very useful to avoid typing out the same code multiple times, or for using arrays, or for counting through a number of operations etc... You are not limited to using a single statement either, and can repeat multiple statements by enclosing\n    them within curly brackets ","{}",". For example:","\n  ","var _x = 32;"," repeat (global.p_lives)","     {","     draw_sprite(spr_heart, 0, _x, 32);","     _x += sprite_get_width(spr_heart);","     }","\n  ","The above example repeats the statements in the curly brackets for however many ","iteration","s"," the \"lives\" global variable has, and each iteration draws\n    the heart sprite at the ","_x"," position, then moves the position along a bit based on the heart sprite width.","\n  ","When should you use a ","repeat"," loop?"," Anytime that you want to repeat over one or more statements a fixed number of times without any specific need to maintain a count of the iterations.","\n  ","It is worth noting that you can use the special ","break"," and ","continue"," statements within a\n    ","repeat"," loop too. Using ","break"," will immediately exit the loop and move on to any code that is in the event or function after the loop should have finished, eg:","\n  ","var i = 0;"," var temp = 0;"," repeat (10)","     {","     temp += array[i];","     if (temp > max_total)","         {","         break;","         }","     else","         {","         i += 1;","         }","     }","\n  ","The above code loops through 10 ","array"," values and adds them to a local variable. If the total of the local variable is greater than the given value for ","max_total",", then the loop is terminated using\n    break, otherwise the loop will continue. ","\n  ","An example of using ","continue"," in a ","repeat"," loop would be:","\n  ","repeat(10)","     {   ","     var _x = random(room_width);","     var _y = random(room_height);","     if (instance_position(_x, y, obj_Enemy)","         {\n    ","         continue;\n    ","         }\n    ","     instance_create_layer(_x, _y, \"Instances\", obj_Enemy);","     }","\n  ","This code will repeat 10 times, generating a random room position then checking if an instance of the object ","obj_Enemy"," exists at that position. If it does, the current loop iteration is terminated using ","continue","    and a new iteration is started, and if it doesn't then an instance of the object ","obj_Enemy"," is created at the random position.","\n  ","For more examples of loop functions please see the sections on ","while",", ","do... until",", and ","for",".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Language Features","\n        ","Next: ","while","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["repeat"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"497"})