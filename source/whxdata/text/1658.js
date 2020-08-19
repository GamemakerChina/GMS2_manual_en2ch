rh._.exports({"0":["keyboard_check"],"1":["keyboard_check"],"2":["keyboard_check"],"3":["\n\n\n\n  ","\n  ","\n  ","With this function you can check to see if a key is held down or not. Unlike the ","keyboard_check_pressed()"," or ","keyboard_check_released()"," functions which\n    are only triggered once when the key is pressed or released, this function is triggered every step that the key is held down for. The function will take a keycode value as returned by the function ","ord()","    (only ","capital"," letters from A-Z or numbers from 0-9), or any of the ","vk_*"," constants listed on the main ","Keyboard Input"," page.","\n  "," ","\n  ","\n  ","keyboard_check(key);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","key","\n        ","The key to check the down state of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if keyboard_check(vk_left)","    {\n    ","    x -= 5;","    }\n  ","\n  ","The above code will check to see if the arrow key is being pressed and move the instance 5 pixels left every step that it returns true.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Keyboard Input","\n        ","Next: ","keyboard_check_pressed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["keyboard_check"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:","\n  "],"id":"1658"})