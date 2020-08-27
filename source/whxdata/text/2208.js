rh._.exports({"0":["get_integer_async"],"1":["get_integer_async"],"2":["get_integer_async"],"3":["\n  ","\n  ","\n  ","This function opens a window and displays message as well as a space for the user to input a value (which will contain the supplied default value to start with). This is an asynchronous function, and as such GameMaker Studio 2 does ","not"," block\n    the device it is being run on while waiting for answer, but rather keeps on running events as normal. Once the user has typed out their string and pressed the \"Okay\" button, an asynchronous ","Dialog","    event is triggered which, for the duration of that event ","only",", will have a DS map stored in the variable ","async_load",".","\n  ","This map will contain the three keys, \"","id","\", \"","status","\", and \"","value","\". \"","id","\" is the value that was returned by the function when called, the \"status\" will be either ","true","    for the \"Okay\" button being pressed, or ","false"," if the message was canceled (where applicable as not all target platforms permit messages to be canceled). Finally \"","value","\" will return the integer that the user input\n    as a string (an empty string \"\" will be returned if no input was given).","\n  "," ","\n  ","\n  ","get_integer_async(string, default);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","String","\n        ","The message to show in the dialog.","\n      ","\n      ","\n        ","default","\n        ","The default value.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","The ","left mouse press event"," (for example) of the object that is showing the message would have the following code:","\n  ","msg = get_integer_async(\"How old are you?\", 0);","\n  ","The above will show a message requesting that the user input a string and press \"Okay\". The function id is stored in the variable \"msg\" and will be used in the asynchronous Dialogs event as shown below:","\n  ","var i_d = ds_map_find_value(async_load, \"id\");"," if i_d == msg","     {\n    ","     if ds_map_find_value(async_load, \"status\")","         {\n    ","         global.Age = ds_map_find_value(async_load, \"value\");","         }\n    ","     }\n  ","\n  ","The above code checks the \"","id","\" key of the returned ","DS Map"," against the value stored in the variable \"msg\". If they are the same, it then checks to see if \"Okay\" was pressed (rather than the window being\n    closed/cancelled) and if it returns ","true"," it then sets a global variable from the integer returned.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Dialog","\n        ","Next: ","show_message_async","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["get_integer_async"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2208"})