rh._.exports({"0":["get_open_filename_ext"],"1":["get_open_filename_ext"],"2":["get_open_filename_ext"],"3":["\n  ","\n  ","\n  ","This function opens a dialogue and asks the player for a filename to open with the given filter. The filter has the form \"","name1|mask1|name2|mask2|...","\", where the mask may contain the different options with a semicolon between them and\n    you can also use a \"*\" to mean any string. For example: \"","bitmaps|*.bmp;*.wmf","\", would ask the user to select the name of a bitmap file from the system, but only those that have the two specified extensions (","bmp"," and\n    ","png","). this function does ","not"," open the file itself! It only returns a string with the full name and path of the file. If the user presses \"","Cancel","\" an empty string \"\" is returned. You may also add in a directory\n    to start the search from, and a caption to be shown at the top of the window instead of the default one.","\n  ","An important thing to note when using this function is that it grants you certain permissions for that file, for the duration of your game. So, once you get the file path from the user, you can access it again and again without having to ask. However,\n    since this function is for reading a file, the permissions granted are ","only for reading"," and saving will not be permitted by the OS. Should you need to read and write to the file, you can get permission using the function ","get_save_filename()",".","\n  ","NOTE",": This function is only valid on the Windows and macOS targets.","\n  "," ","\n  ","\n  ","get_open_filename_ext(filter, fname, directory, caption);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","filter","\n        ","The file type filter and/or name.","\n      ","\n      ","\n        ","fname","\n        ","The suggested filename to use.","\n      ","\n      ","\n        ","directory","\n        ","The directory to start the search from.","\n      ","\n      ","\n        ","caption","\n        ","The caption for the window.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var file;"," file = get_open_filename_ext(\"text file|*.txt\", \"\", working_directory, \"Open a saved level\");"," if file != \"\"","     {\n    ","     file_text_open_read(file);\n    ","     }\n  ","\n  ","The above code will ask the user to select a text file for opening from the ","working_directory"," and then check the returned file name and path, and if it exists will open the file for reading.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File System","\n        ","Next: ","get_save_filename","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["get_open_filename_ext"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2380"})