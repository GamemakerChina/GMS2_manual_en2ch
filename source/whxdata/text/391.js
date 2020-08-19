rh._.exports({"0":["Write To Ini File"],"1":["DnD™ Action - Write To Ini File"],"2":["Write To Ini File"],"3":["\n  ","\n  ","\n  ","With this action you can write a numeric value or a string to an Ini file. You must previously have opened the Ini file for reading/writing using the action ","Open Ini File",", and then with this action you give the type of\n    data to write (either a real number or a string enclosed in \"\"), as well as the section header, the key within that section and the value for the key. To help visualise the structure of an Ini file, see this image:","\n  ","As you can see, Ini files are split into sections - where each section has its own header name - and\n    then each section is subsequently split into various key/value pairs (much like a ","Map Data Structure","). Note that you can create Ini files yourself using any text processing software (like Notepad on\n    Windows) and then include them as an ","Included File"," to read from and write to in your game.","\n  ","IMPORTANT!"," Trying to read data from an Ini file that has not been opened previously using the ","Open Ini File"," action will cause a serious error and crash your game.","\n  ","IMPORTANT!"," This only writes the data to memory and to finally write the data to the file on disk, you ","must call ","Close Ini File",", otherwise the data will not be saved.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type","\n        ","The type of data to write, either a ","string"," (enclosed in quotes \"\"), or a ","real number","\n      ","\n      ","\n        ","Section","\n        ","The section of the Ini file to write to (as a string)","\n      ","\n      ","\n        ","Key","\n        ","The key within the section to write to (as a string)","\n      ","\n      ","\n        ","Value","\n        ","The value to write, either a string or a real number based on the \"type\" argument (above)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will open an ini then write data to three different keys under\n    the same section header (one string and two real numbers) before closing the ini file again (thus writing the data to disk).","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Actions","\n        ","Next: ","Read Ini File","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Write To Ini File"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"391"})