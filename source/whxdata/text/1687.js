rh._.exports({"0":["device_mouse_check_button_released"],"1":["device_mouse_check_button_released"],"2":["device_mouse_check_button_released"],"3":["\n  ","\n  ","\n  ","This function returns true or false depending on whether the device touch that you specify has been released or not. The device argument refers to the device touch number, which can be from 0 to n and note that the maximum number of touches that can\n    be detected will depend very much on the device being used and the OS it runs (most devices will support at least 4 simultaneous touches). This function is only triggered once by the actual releasing action, and the standard constants of ","mb_left","    and ","mb_right"," can be used to check for either button. Note that ","mb_right"," will only have been detected if a double tap touch is detected and held on the second tap before release (this behavior can be disabled using the function\n    ","device_mouse_dbclick_enable()",".","\n  "," ","\n  ","\n  ","device_mouse_check_button_released(device, button);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","device","\n        ","The device (from 0 - ","n",") that is being checked.","\n      ","\n      ","\n        ","button","\n        ","The button of the device that is being checked.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if device_mouse_check_button_released(0, mb_left)"," {\n    "," press=false;\n    "," }\n  ","\n  ","The above code checks to see if the device has been pressed and sets a variable to false if it has.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Device Input","\n        ","Next: ","device_mouse_dbclick_enable","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["device_mouse_check_button_released"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1687"})