rh._.exports({"0":["Instance Keywords"],"1":["Instance Keywords,noone,self,other,all"],"2":["self,all,noone,other,instance keywords"],"3":["\n  ","\n  ","\n  ","To make certain things easier in GameMaker Studio 2, you can use one of several ","instance keywords"," in your code (whether GML or Drag and Drop™). These keywords are used primarily to identify instances under different situations and each one is\n    explained in the text below. Note that all keywords are represented by a ","negative integer value"," internally, so care must be taken when assigning or checking variable values against or with these keywords, as you may get unexpected\n    results later as GameMaker Studio 2 interprets the value you have used as something else. You should also note that using the values instead of the keywords in your code is ","not at all recommended"," and could cause issues later on.","\n  "," ","\n  ","self","self","\n  ","\n    ","\n      ","\n        ","\n          ","Keyword","\n          ","Description","\n          ","value","\n        ","\n        ","\n          ","self","\n          ","The instance which is executing the current block of code.","\n          ","   -1","\n        ","\n      ","\n    ","\n    "," ","\n    ","self"," can be used to identify the calling instance of the current block of code, as it always references the unique ID for the instance currently in scope. For example:","\n    ","var val = 100;"," with (instance_create_layer(x, y, \"Instances\", obj_Fire))","     {\n      ","     self.val = val;","     }\n    ","\n    ","In this example you can see that we have a ","local"," variable called ","val"," and we want it to set the ","instance"," variable with the same name in the newly created object instance. To identify the instance variable correctly and tell GameMaker\n      Studio 2 to set it in the instance calling the code block, we use the ","self"," keyword. In most cases you can also use the ","id"," built-in ","instance variable instead of ","self",", but ","self"," offers certain benefits.\n      To start with, it is faster for the compiler to retrieve the instance ID value using ","self"," rather than ","id",", as the ","id"," value goes through the instance lookup table. Secondly, for those people making extensions, it is very\n      useful to ensure the correct scoping of variables, since it is possible that a project which uses an extension may have a global scope variable or something with the same name as a variable in the extension.","\n    ","It is also worth noting that ","self"," can also be used within ","structs"," - under very specific circumstances - to reference member variables for the struct.","\n    "," ","\n  ","\n  ","other","other","\n  ","\n    ","\n      ","\n        ","\n          ","Keyword","\n          ","Description","\n          ","value","\n        ","\n        ","\n          ","other","\n          ","The other instance involved in a collision event, or the other instance from a ","with"," function.","\n          ","   -2","\n        ","\n      ","\n    ","\n    "," ","\n    ","The special ","keyword"," ","other"," has two different ways that it can be used to reference a specific instance: when used in a ","with"," function (explained ","here",") or when used in a ","collision event",",\n      which is what this section is going to explain.","\n    ","A collision event can only happen between two instances. You ","can"," have multiple collisions between multiple instances, but they are all resolved by GameMaker Studio 2 on a 1-on-1 basis, with the instance that has the collision event and the\n      \"other\" instance that is involved. Imagine you have a player object, multiple enemy objects and multiple bullet objects that the enemy can fire at you. You can assign each enemy a single bullet instance but with a different damage variable\n      randomly assigned to it when created, for example:","\n    ","var nnn;"," nnn = instance_create_layer(x, y, \"Bullets\", obj_Bullet);"," nnn.damage = 5 + irandom(5);"," nnn.speed = 8;"," nnn.direction = point_direction(x, y, obj_Player.x, obj_Player.y);","\n    ","You can see how we set its variables using the \"point method\" outlined in the section on ","Addressing Variables In Other Instances",". This will give the bullet objects a different damage\n      value. But what about the player object? How will it detect the damage that it has to take? By using ","other"," in the collision event:","\n    ","hp -= other.damage;"," if hp <= 0 instance_destroy();","\n    ","The above code will deduct the amount stored in the ","other"," instance in the collisions \"damage\" variable from the player \"hp\" variable, then it will check to see if the \"hp\" is lower than or equal to 0. If it is\n      then it will destroy the player object. Please note that ","other"," used in this way ","only works in the collision event"," and that the other instance must have the variable being checked or else an error will be thrown. However you can assign\n      values to variables, or even create new ones, using ","other"," in the collision event too, like this:","\n    ","//add ten to the other instance \"mana\" variable"," other.mana += 10;"," //set the other instance variable \"hit\" to true, creating it if the variable doesn't already exist"," other.hit = true;","\n    ","It is also worth noting that ","other"," can also be used within ","structs"," - under very specific circumstances - to reference member variables for the struct. ","\n    "," ","\n  ","\n  ","all","all","\n  ","\n    ","\n      ","\n        ","\n          ","Keyword","\n          ","Description","\n          ","value","\n        ","\n        ","\n          ","all","\n          ","All instances currently active in the room.","\n          ","   -3","\n        ","\n      ","\n    ","\n    "," ","\n    ","This keyword is used to tell GameMaker Studio 2 that a function is to be applied, or to check, all active instances within a room (deactivated instances will not be checked or accessed). You ","cannot"," use ","all"," to access or set variables\n      in other instances using the point method (see ","here","), but you ","can ","use it when calling ","with()",", for example:","\n    ","with (all)","     {\n      ","     speed = 0;","     }\n    ","\n    ","The above code will set the speed of all instances in the room to 0. You can also use ","all"," within functions to target or check all instances in the room for example:","\n    ","//Check a point for any active instance in the room"," inst = instance_position(mouse_x, mouse_y, all);         ","\n      "," //Check all instances for a collision along a line"," if collision_line(x, y, mouse_x, mouse_y, all, false, true) {}","\n      "," //Add all instances in the room into a motion planning grid"," mp_grid_add_instances(grid, all, false);","\n    ","all"," is a very useful keyword and can be used in numerous situations within your code and actions, often cutting down on the amount of code you need to write to achieve a desired effect.","\n    "," ","\n  ","\n  ","noone","noone","\n  ","\n    ","\n      ","\n        ","\n          ","Keyword","\n          ","Description","\n          ","value","\n        ","\n        ","\n          ","noone","\n          ","No instance at all.","\n          ","   -4","\n        ","\n      ","\n    ","\n    "," ","\n    ","It may seem odd, but many times while programming your games will you find the need to check if there are no instances found at a location, or in a collision etc... In those cases you would use this keyword to check for nothing, something like this:","\n    ","if instance_nearest(x, y, obj_enemy) != noone","     {\n      ","     //do something as there is an enemy instance near","     }\n    ","\n    ","In this example, the function ","instance_nearest()"," will return either ","noone"," or the unique ID of the nearest found instance. Basically, any time that you need to check for an instance, you can expect to get either ","noone"," or\n      a unique instance ID returned.","\n    "," ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","GML Overview","\n        ","Next: ","Addressing Variables In Other Instances","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Instance Keywords"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"483"})