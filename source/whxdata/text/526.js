rh._.exports({"0":["array_create"],"1":["array_create"],"2":["array_create"],"3":["\n  ","\n  ","\n  ","With this function you can create a 1D array of a given size. You tell the function the length of the array to create, and it will return the \"handle\" for the array which you can then assign to a variable. Arrays created in this way will have\n    each entry initialised to 0 unless you specify an (optional) initialisation value. If you do supply the extra value for initialising the array, then all indices within the new array will be set to that instead of 0, but note that the function will\n    have a greater performance overhead in this case.","\n  "," ","\n  ","\n  ","array_create(size, [value]);","\n  \n    ","\n      ","\n        ","\n          ","Argument","\n          ","Description","\n        ","\n        ","\n          ","size","\n          ","The size of the array to create.","\n        ","\n        ","\n          ","value","\n          ","The value to use to initialise all array indices (optional).","\n        ","\n      ","\n    ","\n  \n  "," ","\n  ","\n  ","Array Reference","\n  "," ","\n  ","\n  ","instance_array = array_create(100, noone);","\n  ","The above code will create a new array of 100 entries, each one set to the keyword ","noone",", and then assign it to the variable \"instance_array\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Variable Functions","\n        ","Next: ","array_copy","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["array_create"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"526"})