rh._.exports({"0":["Included Files"],"1":["Included Files"],"2":["included files"],"3":["\n  ","\n  ","\n  ","GameMaker Studio 2 is not just limited to the assets that you create within the program, since you can add files to the project as ","Included Files"," so that they can then be accessed as the game is running. What files you add will depend\n    on what you want to do, but things like default ","*.ini"," files, sprites and background images, or language text files are commonly used as included files.","\n  ","To add these things to your project there is an editor window that can be opened from the Asset Browser ","Extras"," menu ",":","\n  ","Selecting this will open the Included Files Editor:","\n  ","To add a file to your resources you simply use the ","Open In Explorer"," button, which will open a file explorer on the datafiles folder\n    for your project. You can then add directories and files as required and GameMaker Studio 2 will update the indluded files editor with these automatically.","\n  ","Note that all editing (renaming, organisation, etc...) ","should be done from the default file explorer",".","\n  ","Once you have added files to the editor, you can double-click "," on them to open up the ","File Properties",":","\n  ","This window shows the name of the file, its size on disk, and also the platforms that it should be exported to when you compile/test\n    your game. You have buttons to select \"All\" or \"None\", or you can go down the list and check/uncheck the tragets that you want the file to be exported to, as required.","\n  ","For further information on how included files are stored with your game and how they are accessed please see the section of the manual dedicated to the ","File System",".","\n  ","IMPORTANT!"," When including sound files, you should ensure that the files avoid names that clash with streaming sound assets. For example, a sound asset called \"main_music\" and an included file called \"main_music.ogg\"\n    is going to be undefined when the project runs. This is becuase streamed files are also stored outside of the main project bundle, so care must be taken in these situations.","\n  ","It is worth noting that you can include ","DLL"," (on Windows) or ","DyLib"," (on macOS) files as included files and then create your own custom functions to deal with them using ","external_define()",".\n    These can then be used calling the ","external_call()"," function.","\n  ","WARNING!"," Using included files to create extra functionality in this way is incompatible with the ","Extension"," system, in so much as you cannot use use the ","external_*()"," functions\n    with files added in an extension, since extensions already have a method for adding constants and functions.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Game Settings","\n        ","Next: ","Audio Groups","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Included Files"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"140"})