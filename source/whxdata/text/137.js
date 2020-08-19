rh._.exports({"0":["Sprites"],"1":["Sprite Editor"],"2":["sprites,sprite editor"],"3":["\n  ","\n  ","\n  ","The ","Sprite Editor"," is where you set the general properties for ","sprites"," that\n    you make. You can open this window by creating a new sprite (right-click "," on the ","Asset Browser"," and select \"Create\n    Sprite\"), by double-clicking "," on an existing sprite or by right-clicking "," an existing sprite and selecting \"","Properties","\".","\n  ","The parts that make up the Sprite Editor are as follows:","\n  "," ","\n  ","Sprite Name","Sprite Name","\n  ","\n    ","Here you can name the sprite. The sprite name is what will be used throughout your game project to identify the sprite as a resource and can only be alpha-numeric and may only use the underbar \"_\" symbol. While you can use numbers in the\n      sprites name, the name cannot start with a number as that would make it an invalid resource name when using GML or DnD™.","\n    "," ","\n  ","\n  ","Image Properties","Image Properties","\n  ","\n    ","In this section you can set the image size by clicking the ","Sprite Size"," button ",". This will open the following window:","\n    ","Here you can see a preview of the sprite before and after applying the chosen transforms, and the section below is\n      for setting the new sprite properties and is split into two parts:","\n    ","\n      ","Scale Image",": With this option you can resize the sprite draw canvas and any images contained on the sprite will be stretched and scaled to fit the new size. You can choose to scale and maintain the aspect ratio of the base image,\n        and you can also choose whether to scale in Pixels or in Percentage. Depending on the type of image you are working with you may also want to enable linear interpolation or not (in general, linear interpolation will \"smooth\" pixels over\n        an area and so is best left off for pixel art).","\n      ","Resize Canvas",": This option will resize the draw canvas to the new size without scaling the contents. You can set the \"anchor\" point for the resize using the directional arrows then set the size value. There is an option\n        to maintain aspect ratio when resizing the canvas and at the bottom you can choose to set the resize values in either pixels or as a percentage.","\n    ","\n    ","When you are happy with the new size, you can click ","Apply ","to apply the changes and close the Resize properties window. Note that when applying a change in scale or size to a sprite, you can choose to have the change applied to the origin\n      of the sprite too, by checking the ","Apply to Origin ","checkbox beside the ","Apply ","button. When checked - if the origin is not one of the default settings and is not locked in the sprite - then its position will be scaled to\n      match the change to the size of the sprite. When un-checked, no scaling will be applied to the origin. If the origin is not a custom value or is locked, then it will be grayed out and unavailable. You can set this option for all sprites from the\n      ","Sprite Editor Preferences",".","\n    ","NOTE: This option is only available for ","bitmap"," sprites and will be greyed out for SWF or skeleton animation sprites.","\n    ","In this section you can also either open the ","Image Editor"," to draw your sprite, or you can click on the \"","Import","\" button to import a previously created sprite. Sprites can be imported from most common\n      bitmap formats ( ","PNG",", ","JPG",", ","GIF",", etc...) but GameMaker Studio 2 also supports vector sprites (","SWF",") and skeletal animation sprites (\n      ","Spine","). For more information on these formats, please see the section on ","Non-Bitmap Sprites",". Note that when importing bitmap sprites you can select multiple image files\n        in the file explorer and each one will be added to the same sprite as separate sub-images (frames).","\n    "," ","\n  ","\n  ","Texture Settings","Texture Settings","\n  ","\n    ","This section of the sprite properties window deals with how GameMaker Studio 2 stores the images that make up your sprite on ","texture page","s"," for use with\n      devices and browsers. For desktop platforms this may not be too important, but when you start to develop for mobile or web the proper management of your image assets (textures) becomes very important as poorly managed textures can have detrimental\n      effect on your game, causing performance issues.","\n    ","The ","Tile Horizontally"," and ","Tile Vertically"," check boxes are, by default, not normally checked as most times you do not want to tile sprites. However, in certain circumstances you may wish them to tile, meaning that\n      you should check these options, especially if you are going to be scaling the view or room as scaling can introduce artefacts into the graphics of a game if the texture page is not generated properly.","\n    ","If your sprite is going to be used as a texture map in a 3D game, then you should check the ","Separate Texture Page"," box and the sprite will be given a texture page all of its own (note that each sub-image will also get its own texture\n      page, so if your sprite has 10 images you will generate 10 texture pages). This will increase the texture memory needs of your game and so great care must be taken when using this option. Also note that in general if your sprite is using this option\n      for 3D, then the textures should be a power of 2 (ie: 128x128, 256x256, 512x512 etc...).","\n    ","The next option is to enable ","Pre-Multiplied Alpha"," for the sprite images. When enabled, this will pre-multiply the alpha of all sub-images of the sprite. This is normally only necessary drawing sprites to surfaces, or for some specific\n      special effects. For normal sprite use you should not see any noticeable difference between the normal sprite and the pre-multiplied one.","\n    ","We also have an"," Edge Filtering"," option. This option is specifically for when you have ","linear interpolation"," enabled for your game and you are seeing \"halos\"\n      of colour around your sprites. This is caused by the hardware interpolating from multiple source ","texel","s"," on the texture page all at once, and can be particularly\n      obvious when you scale games up in resolution. Enabling this will filter the edge pixels to take on the colour of the nearest full alpha sprite pixel and so blend the interpolated pixels without the halo that was present previously.","\n    ","Finally, you can chose the ","texture group"," that you wish the sprite resource to belong to. Basically, a texture group (previously defined in the ","Texture Group Manager",") is something that you\n      can set up so that all the image resources that you need for specific rooms or levels of your game can be stored together. So, for example, you can have all your level 1 images in one texture group, all your level 2 images in another etc... and\n      GameMaker Studio 2 will try to place all those grouped resources on the same texture page to reduce texture page swapping while your game is running on the chosen target platform.","\n    ","NOTE",": This may not always be necessary and the performance increase from this method will depend on whether the target device is CPU bound or GPU bound.","\n    ","You can find out more about texture pages ","here",".","\n    ","Texture groups are only relevant to ","bitmap"," images, and non-bitmap sprites will not be assigned to texture groups and some of the above options will not be available\n      for them. Some non-bitmap sprites will already have their own unique texture page (skeleton animation sprites) while others just don't require textures as they are comprised of ","vector","      ","s"," (SWF sprites). For more information please see the following section:","\n    ","\n      ","Non-Bitmap Sprites","\n    ","\n    "," ","\n  ","\n  ","Collision Mask","Collision Mask","\n  ","\n    ","All sprites have a ","collision mask"," which corresponds to the area of the sprite that will be used to detect collisions when the sprite is assigned to an instance. You can first set the ","Mode ","for the collision mask, which\n      can be one of the following:","\n    ","\n      ","Automatic",": GameMaker Studio 2 will calculate the collision mask automatically based on the sprite alpha values (this will depend on the Tolerance setting explained below).","\n      ","Full Image",": The mask will be calculated with it's bounds being the same as the left, right, top and bottom bounds of the sprite.","\n      ","Manual",": Selecting this means that you wish to set the bounds of the collision mask using the input values for left, right, top and bottom.","\n    ","\n    ","Apart from the collision mask Mode, there are also various ","types ","of collision mask which you can choose from the drop down menu:","\n    ","\n      ","Rectangle",": A simple rectangular collision mask. This is the fastest to resolve when used in your project.","\n      ","Rotated Rectangle",": This is a simple rectangular collision mask which will rotate along with the ","image_angle"," value of the instance with the sprite assigned. This is slower to resolve than the regular rectangular\n        collision mask, but faster than a precise collision mask.","\n      ","Ellipse",": Creates an elliptical collision mask. This is slower to resolve than the rectangular mask.","\n      ","Diamond",": Creates a \"diamond\" collision mask. This is slower to resolve and generates more CPU overhead than both the rectangular and ellipitical masks.","\n      ","Precise",": This creates a precise collision mask based on the outline of the sprite. If the sprite has multiple sub-images, then this will be a ","composite ","of the edges of ","all ","the sub-images placed over each other.\n        Note that the precise mask will be clipped to the ","bounding box"," if the Mode is set to Manual and you change the default values. This is very slow and generates a lot of CPU overhead.","\n      ","Precise (per frame)",": This creates a precise collision mask on a per-frame basis (ie: the mask will change to conform to the outline of each different frame). Note that the precise mask will be clipped to the ","bounding box"," if the Mode is set to Manual and you change the default values. This is by far the slowest type of collision mask to resolve and should be avoided except in very, very specific and infrequent\n        cases.","\n    ","\n    ","The following image illustrates the different mask options:","\n    ","The collision checking options are very important ones for your game, as they will directly influence how your objects interact and how your game runs, with\n      the wrong settings even having a negative impact on the over all performance. Why is that? Well, whenever two instances meet, and both instances have a valid mask, a collision event is generated by checking the overlap of the bounding box ","and ","the\n      mask, which can either be precise or not, and adapted to the image index or not. Below is an image to illustrate this:","\n    ","\n    ","Beneath the collision mask setting, you have the ","alpha tolerance ","slider, which indicates the tolerance for creating the mask with respect to the transparency of the sprites pixels - with a higher tolerance pixels that are partially\n      transparent are left outside the mask, while with a lower tolerance the mask will take into account those pixels. This influences both the bounding box (when not set to manual) and the mask for precise collision checking.","\n    ","Finally you can set the ","Bounding Box"," limits for the mask. The bounding box is the name given to the rectangular area that the sprite mask fits in. Only pixels inside this bounding box are used for the mask and will be involved in\n      collision checking, and by default this is automatically computed, taking the alpha tolerance into account. If you have \"precise (per frame)\" checked then this will be separate for each sub-image too. When setting it yourself, you can\n      input the values in the boxes for left, right top and bottom, or you can click "," in the sprite preview window and drag to \"draw\" it over\n      the sprite. Note that when \"drawing\" the bounding box, the mask is automatically generated to fit within the end values, and the bounding box can \"clip\" the mask.","\n    ","It is worth noting that if you go to the Preview window, you can adjust the collision mask using the \"handles\" found in each corner. Clicking and dragging these will adjust the collision mask just the same as inputing values for the bounding\n      box would.","\n    "," ","\n  ","\n  ","Frame Speed","Frame Speed","\n  ","\n    ","In this section you can set the ","speed ","at which the animation frames should be played back from the input box on the left. The frame speed setting can either be based on \"","Frames per second","\", or \"","Frames per game frame","\",\n      where a setting of 30 \"Frames per second\" will show 30 frames of the animation in one second, while a setting of 30 \"Frames per game frame\" will try to show all 30 frames in a single game step, so \"Frames per game frame\"\n      values are usually set to 1 or lower (eg: a frames per game frame speed of 0.5 will show a new frame every two game steps).","\n    ","It's important to note that the Frame Speed settings will not only affect the playback of the animation in the preview window, but ","will also govern how the sprite is animated in your games",". The speed you set here will show the\n      sprite preview as it will run in the game with an image speed multiplier of 1, but this can be set in code using the ","image_speed"," variable\n      meaning the sprite can run faster or slower depending on what is programmed. So, for example, if you set the sprite to use 10 \"frames per second\" and then set the ","image_speed"," to 0.5, the game will draw the sprite\n      at half speed - 5 frames per second. Conversely, if we set the ","image_speed"," for the same sprite to 2, in the game it will be drawn animated twice as fast - 20 frames per second. Note that the frame speed can also be set\n      in the ","Image Editor",".","\n    "," ","\n  ","\n  ","Sprite Origin","Sprite Origin","\n  ","\n    ","The top bar of the sprite editor contains the ","sprite origin"," properties. This is the point on the sprite that corresponds to its position within the room, ie: when you create an instance at a particular x/y position, the origin of\n      the sprite is placed there.","\n    ","By default the origin is the ","top left ","corner of the sprite but it is often more convenient to use the ","middle centre"," or you may wish to have some other position used (like for a platform game character you might want ","bottom centre","),\n      so you can click "," on the origin drop-down menu and select one of the default values. You can also set the origin manually by clicking "," in the sprite preview image which will move the origin marker cross to the point you clicked, or by inputting different values for x and y in the corresponding boxes. Note that you can even set an origin outside the area of sprite by using negative\n      numbers (for left and up) or positive numbers larger than the sprite width and height (for right and down), which can be very useful when dealing with objects that need to draw composite sprites.","\n    "," ","\n  ","\n  ","Zoom Controls","Zoom Controls","\n  ","\n    ","To the top right of the Preview window you have the ","zoom controls",". These buttons control the current preview sprite zoom level. You can zoom in or out and clicking the "," button will reset the preview to be 1:1 with the sprite being edited. You can also click the Window Fit button "," to make the entire sprite preview fit within\n      the current editor window (this will zoom in/out as appropriate to make it fit). Note that you can zoom in and out using the "," / "," and the Mouse Wheel ",", and pressing "," / "," + "," will set the preview\n      to be 1:1 with the actua sprite size.","\n    "," ","\n  ","\n  ","Preview","Preview","\n  ","\n    ","The sprite ","preview ","window shows the sprite as it will look in the game, and can be zoomed in or out by using the mouse wheel ",", and panned around using the\n      middle mouse button "," and draggging, or alternatively use the combination "," + "," and dragging. You can use the Frame controls (explained below) to change how the preview image is displayed too.","\n    ","This window will also show a \"cross\" that marks the ","origin"," of the sprite (see the Sprite Origin section above for more details), and it can also show the ","collision mask"," if that option is being edited (see\n      the Collision Mask section, above).","\n    "," ","\n  ","\n  ","Frame Controls","Frame Controls","\n  ","\n    ","The ","frame controls"," are for playing back in the preview window the animation of the frames, with the play button "," starting/stopping the animation\n      and the Loop button "," used to set whether the sprite loops "," (goes back to frame 1 when the last frame is reached) or ping-pongs "," (goes backwards through the frames when the last frame is reached).","\n    ","Note that the loop/ping-pong option ","will affect how the sprite is displayed in the game",", so setting these options in the sprite will change the way it is shown when the game is compiled and run. However, this is not true for loop-points\n      that can be set in the ","Frame View ","(see below for more information) - these are purely visible in the sprite editor and designed to help you test out your animations, but will have no effect on how the sprite animation is displayed\n      in your games.","\n    ","An additional part of the Frame Controls is the ","current frame"," display and input. The box shows the total number of frames of the sprite animation as well as the current frame being shown. You can change the current frame at any time\n      by clicking on the input box and typing in the frame number you want to view.","\n    ","IMPORTANT!"," Frames are shown numbered from 1 to ","maxframe number",", however in your game code, frames will be numbered from 0 to ","maxframe number - 1",".","\n  ","\n  ","Frames","Frames","\n  ","\n    ","This part of the sprite editor shows each of the different ","frames ","that make up a single sprite set along a sequence timeline. You can click "," on any frame and drag it left or right to change the order in which they will be animated, and you can also double click "," on any frame to launch\n      the ","Image Editor"," and edit them. You can cut, copy and paste frames using the standard keyboard shortcuts or by using the right-mouse button "," menu options, and you can also select multiple frames to operate on using "," / "," + ",".","\n    ","The right mouse button menu has the following options:","\n    ","\n    ","\n      ","Add Frame"," - Add a new frame to the animation at the end.","\n      ","Insert Frame"," - Insert a new frame in the animation after the currently selected frame.","\n      ","Cut ","/ ","Copy ","/ ","Paste ","- Cut, copy and paste one or more frames.","\n      ","Delete Selected Frames"," - Delete the currently selected frame or frames.","\n      ","Copy To Start"," - Copy the selected frame to the start of the animation.","\n      ","Copy To Finish"," - Copy the selected frame to the end of the animation.","\n      ","Stretch Asset Key"," - Stretch the selected frame to fill in any empty frames. To use this, add some empty frames after the frame you want to stretch, then use the \"Delete asset key\" options on these empty frames to remove\n        the frame contents but not actually remove the frame. Finally, select this option and the frame will be stretched to fill the empty frames.","\n      ","Delete Asset Key"," - This can be used to remove an image from a frame without actually removing the frame itself.","\n    ","\n    ","Apart from the option given above to stretch a frame, you can also position the mouse on the edge of a frame and then when the cursor changes to a double arrow, simply click "," and drag to resize the frame so it takes more time:","\n    ","A stretched frame will take more time to be shown, just as if you'd duplicated the same frame multiple times.","\n    ","Finally, you can click and drag the start and end points for the animation loop in the frame view, so that you can see how selected parts of the animation behave when looped. This is done by clicking "," on the red \"loop markers\" and then dragging them to the position you want:","\n    ","Note that the loop points are ","purely a visual aid"," when working with the animation and will not have any influence on\n      how the animation is shown in the game.","\n    "," ","\n    "," ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Asset Editors","\n        ","Next: ","Tile Sets","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Sprite Editor"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"137"})