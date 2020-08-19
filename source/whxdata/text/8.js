rh._.exports({"0":["Compiling"],"1":["Compiling"],"2":["compiling"],"3":["\n  ","\n  ","\n  ","Compiling"," your game can mean one of two things: compiling it for testing, or compiling it to create an "," ","executable package"," or\n    a specific target platform. Compiling your game for testing can be done by simply pressing the Play button  "," at the top of the IDE, which will launch the game for testing\n    using the specified target. You can also run the game in ","Debug Mode"," by testing using the Debug button ",". This will run the game, but also open up the\n    ","Debug Window",", where you can monitor how your game performs and see any issues (see the section on ","Debugging"," for more information).","\n  ","By default GameMaker Studio 2 will run and debug using the built in ","Virtual Machine (VM)",", which is more or less the same as running on the desktop OS being used. However GameMaker\n    Studio 2 is a ","cross platform engine"," and you can test, debug and compile executable packages of your projects on a number of different target platforms (the exact platforms available will depend on the details of your licence). To\n    change the current target platform you can click "," on the Targets button "," to open the ","Targets Window",", which will look something like this (exact details will vary based on your licence type):","\n  ","\n  ","At the top, beside the Targets button, you have the current settings which tells you the platform and the specific settings actually being used, and then the rest of the window is taken up with the details and options for all the available targets which\n    you can select to use instead. Each section of this window is explained below:","\n  ","Worker","Worker","\n  ","\n    ","The first column of the Target Manager is dedicated to the "," ","Remote Workers"," that you have available. To begin with, you will only have a single \"Local\" machine\n      listed here, which is the machine that GameMaker Studio 2 is installed on, but you can also configure a Remote Worker to use. When a Remote Worker has been configured, you will then be able to select it from the list here, and have it build your\n      projects rather than use the host machine where GameMaker Studio 2 is installed.","\n    ","For more information on how to set up and use Remote Workers, please see the section below:","\n    ","\n      ","Remote Workers","\n    ","\n    "," ","\n  ","\n  ","Platforms","Platforms","\n  ","\n    ","This section lists all the available target platforms. The contents of this list will vary depending on the licence that you have, but will always have at least the \"Test\" target. To select a target, simply click "," on it. This will then update the rest of the options windows to show different details depending on the platform selected.","\n    "," ","\n  ","\n  ","Output","Output","\n  ","\n    ","Each target platform can have one or more output formats, the main ones being:","\n    ","\n      ","VM",": The VM (Virtual Machine) target uses a generic ","runner ","for each platform and then interprets the code for your game. In general this option is used for testing due to its faster build times, but it does not offer the\n        same performance boost that using the YYC option (if available) offers. You can use this to compile executable packages for smaller games or games where performance is not ever going to be an issue.","\n      ","YYC",": The YYC (YoYo Compiler) takes the normal GameMaker Studio 2 output and compiles it into native code for the target platform, \"stripping out\" unneeded functions and performing a host of other optimisation techniques\n        to create a smaller and performance enhanced executable package. This can increase your games performance by at least two or three times, especially on logic-heavy games, and is ideal for those larger or CPU intensive projects. Compile times may\n        take longer and you should always clear the compiler cache before building any final complete asset package for a target platform. Note that the YYC target may require extra tools to be installed for the platform selected, otherwise it will not\n        work - you can find further information about this from the ","YoYo Games Help Center"," as well as on the individual ","target Preferences"," pages\n        detailed in this manual.","\n      ","JavaScript",": The JavaScript target will only be available for a few targets, like the HTML5 target, and sets the game to be compiled to pure JavaScript.","\n    ","\n    "," ","\n    ","\n    ","\n  ","\n  ","Device","Device","\n  ","\n    ","Certain platforms (like iOS or Android) permit you to associate one or more devices with GameMaker Studio 2 so that games can selectively compile to them. Initially, the device list will be empty and you need to click "," on the Pencil icon ","  to open the ","Device Editor",":","\n    ","Here you can add new devices as well as have GameMaker Studio 2 test for a connection to any device(s) that may be connected. The exact contents\n      of this window will depend on the platform specifics (see the section on the ","Device Manager"," for exact details for any given platform). Once a device has been found or added,\n      it will then be shown in this window, like in this example image for Android:","\n    ","The exact procedure and requirements for setting up devices and troubleshooting issues can be found in the appropriate section of the ","GameMaker Studio 2 Knowledge Base",".","\n    "," ","\n  ","\n  ","Config","Config","\n  ","\n    ","As explained in the section on ","Configurations",", you can store certain details for compiling your game as ","Configs",". This section of the Targets window permits you to have GameMaker Studio\n      2 automatically select a specific configuration for a specific target platform.","\n  ","\n  "," ","\n  ","There are also a number or preferences that can be set to modify and customise the compile workflow, explained on the following page:","\n  ","\n    ","Compiling Preferences","\n  ","\n  "," ","\n  "," ","\n  ","\n  ","Compiling your game project to any target platform will require that you have set up the correct "," ","build tools"," (see ","here",")\n    and also filled in the appropriate ","Platform Preferences",". Once you have done that you can simply click the Create Executable button  "," in the IDE to start the compiler build or select ","Create Executable"," from the ","Build Menu",". Either option will open a file explorer window where you can give the final name that\n    you wish to use for your game executable before clicking ","Save ","to start the compile and build process. Once you have done this, the necessary files will be generated so that you can distribute it as you wish.","\n  ","IMPORTANT!"," If you have the free "," 30 Day Trial Licence",", then compiling a final executable will not be available, and you will be required to upgrade to one of the paid licences to compile your game for distribution.","\n  ","NOTE",": Before doing a final build of your project for release, you should ","always clear the Asset Compiler ","Cache"," (using the \"broom\" icon "," at the top of the IDE). GameMaker Studio 2 will cache many of your game files to keep compilation speed to a minimum.","\n  ","Each target option saves to a platform specific format, listed below:","\n  ","\n    ","Windows ","- Compiling for the general Windows OS will first request that you choose between creating an ","Installer ","or a ","Zip ","package, where the installer will be a single executable that will install your game, and the\n      Zip file will be a single ","*.zip"," format compressed file with all your game files stored within (the files will need extracted for the game to run). ","If you check the box marked ","Remember Packaging Option"," then GameMaker Studio 2 will remember the choice for all future compiles (this can be reset or changed from the ","Windows Preferences",").\n      You can find out more from the ","YoYo Games Help Center",".","\n    ","Ubuntu (Linux)"," - Ubuntu (Linux) apps can be compiled as ","*.zip"," files. You can find out more from the ","YoYo Games Help Center",".","\n    ","HTML5 ","- If you have chosen to build HTML5, then an ","index.html"," file (this is the default name, but you can give your own name too in the Platform Preferences) along with a folder containing your game files\n      will be created and saved to the specified location. For your game to work you will need both of these to be uploaded to a ","server",". The ","index.html"," can also be customised\n      to show your game with a different background colour, or at a different position etc... but a knowledge of HTML is necessary for this, and you can also specify your own custom index file when you build the package (see the ","HTML5 Game Options",").\n      You can find out more from the ","YoYo Games Help Center",".","\n    ","Android ","- For Android devices, you can choose to build an ","*.apk"," or an ","*.aab"," (Android App Bundle) file from the window that is shown for saving the game:","\n      ","\n      ","The type of file you choose will depend on the store that you wish to target, with the ","*.aab","      file being required for Google Play, while the ","*.apk"," file can be used on other stores. You can find out more from the ","YoYo Games Help Center",".","\n    ","iOS ","- Compiling to iOS will create an ","xarchive"," file which is then used in Xtools to create the final iOS package. Note that ","to compile for iOS you will require an Apple Mac computer running OSX or higher as well as the relevant certificates and permissions",".\n      You can find out more from the ","YoYo Games Help Center",".","\n    ","macOS ","- The macOS target will build either an ","*.app"," file or a ","*.pkg"," file, depending on whether you want to later upload it to the Mac App Store or not. As with iOS ","you will require an Apple Mac computer running OSX or higher as well as the relevant certificates and permissions",".\n      You can find out more from the ","YoYo Games Help Center",".","\n    ","Windows UWP"," - For Windows UWP, GameMaker Studio 2 will create an ","*.appx"," package which can then be uploaded to the Windows Store. When you click the Create Executable button you will be prompted to tell\n      GameMaker Studio 2 which type of package you would like to create (can be either for ARM, x64 or x86 ","architectures","), and you should choose that which targets the devices your game\n      will be supported on: ","\n      ","\n      ","If you check the box marked ","Package For Store Upload",", then the final package created will be an ","*.appxupload","      file, which is what Microsoft specifies should be used for submitting apps to their store, as explained in this article ","here",". Also note that you can set the default\n      Packaging Option from the ","UWP Preferences",") so that GameMaker Studio 2 remembers the choice for all future compiles (meaning this options window will not be\n      shown). You can find out more about setting up and compiling to UWP platform from the ","YoYo Games Help Center",".","\n  ","\n  ","Once you have created your executable asset package you can then give the file to other people or place it on your website to download, or upload these files to the different hosting services for individual distribution or even to online stores (like\n    Google Play, iTunes or the MS Store) for general distribution and retail.","\n  ","Note that you are free to distribute the games you create with GameMaker Studio 2 in any way you like, including selling them. Of course, this assumes that the sprites, images, and sounds you used to make it can be distributed or sold as well and that\n    you have the legal rights to all assets, and it also assumes that the game complies with the ","YoYo Games EULA for GameMaker Studio 2",".","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Introduction To GameMaker Studio 2","\n        ","Next: ","Debugging","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Compiling","Creating A Final Executable Package"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"8"})