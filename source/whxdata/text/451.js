rh._.exports({"0":["Set Particle Size"],"1":["DnD™ Action - Set Particle Size"],"2":["Set Particle Size"],"3":["\n  ","\n  ","\n  ","This action is used to set the particle size, which can be static or set to increment / decrement over time. You supply the unique ID value for the type to set the size of (as returned when you created the type with the action ","Create Particle Type",")\n    and then give a range of initial starting sizes, then the increase amount and finally the \"wiggle\". The size a particle is created at is a scalar value, where 1 is the same size as the base particle image, 0.5 would be half the size of the\n    base image and a value of 2 would be double. If the minimum and maximum sizes are not the same, then initial size for any particle created will be a random value between them.","\n  ","The option to increase a particle size enables you to input a value which will be added on to the base scalar value each game frame of the particle lifetime. So setting this value to, for example, 0.1 will add 0.1 to the scale value each game frame.\n    Note that you can use negative values here too to make the particle image scale down too. Note that the minimum scale ","decrement"," that is accepted is -0.01 and the minimum ","increment"," is 0.01.","\n  ","Finally you can set the \"wiggle\" option. This is a value that will be generated randomly between 0 and the value you give and then added or subtracted to the size each step of the particles lifetime, causing the drawn image to fluctuate in\n    size. Obviously larger values are more pronounced than smaller ones, and this value can even be a negative with the maximum range being between -20 and 20.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type","\n        ","The unique ID value for the particle type to set the size of","\n      ","\n      ","\n        ","Min","\n        ","The minimum scale for the particle type (default 0.1)","\n      ","\n      ","\n        ","Max","\n        ","The maximum scale for the particle type (default 1)","\n      ","\n      ","\n        ","Increment","\n        ","The value to add on to the particle type size every game frame (can be negative, minimum +/-0.01)","\n      ","\n      ","\n        ","Wiggle","\n        ","The maximum value to randomly be added or subtracted from the particles size per step (+/-20).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will create a new particle type and assign its unique\n    ID value to a global variable. It then proceeds to set all the properties for the particle type.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Set Particle Sprite","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Particle Size"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"451"})