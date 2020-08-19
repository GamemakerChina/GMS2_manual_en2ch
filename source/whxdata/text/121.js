rh._.exports({"0":["Scripts"],"1":["Script Editor"],"2":["scripts"],"3":["\n  ","\n  ","\n  ","This section deals with the ","script editor"," (also called the ","text editor",") which is where you type in all the code that\n    your game will require to run. This editor is used for creating custom script assets, as well as for coding ","object events",", for adding ","room creation code",",\n    and for many other things, and as such, this section simply details how the script editor works, and ","not"," how to create script assets nor how to use Drag and Drop™ to make scripts. For that please see the following sections: ","\n  ","\n    ","GML Scripts","\n    ","DnD™ Scripts","\n  ","\n  ","The script editor is where you write your GameMaker Language code, which is the built-in programming language that GameMaker Studio 2 uses (see the ","GML Reference"," section for more details).\n    Once you become more familiar with GameMaker Studio 2 and want to use it to its fullest extent, it is advisable to start learning to use this language, as it greatly expands your possibilities when creating games.","\n  ","A script asset can be named by right-clicking "," on it in the ","Asset Browser"," and selecting ","Rename",",\n    but note that the script name must conform to the scripting rules for functions, so they can only be alpha-numeric, must start with a letter, and the only symbol they can contain is the \"_\" under-bar symbol. The script editor in other places\n    cannot be renamed and will have a name specific to what is being edited, like an object event for example.","\n  ","When you open the script editor window it will have the following options and layout:","\n  ","Script / Event Tab","Script / Event Tab","\n  ","\n    ","The script editor opens in a window with tabs across the top to let you have multiple scripts or events in one window (although this behaviour can be changed from the ","Preferences","      to give a new window to each script or event). You can click "," on a tab and then drag it to change the tab order, or - if you prefer - you can pull\n      it out of the current window and place it on the workspace to create a new window for that script (or add it to a different window), and you can also maximise the script editor to create a new workspace too. If you drag a script tab out of the\n      ","IDE"," window, then a new IDE will be spawned to hold this script resource, and it can be used as you would the Main window.","\n    ","Note that if you are editing code from an ","object event ","in the script editor and you have maximised the script editor or have it on a separate window or workspace, then the right-click "," editor menu will have some extra options:","\n    ","\n    ","\n      ","Restore to workspace",": This will take the script editor out of a maximised/workspace state and re-chain it to the object in the workspace.","\n      ","Go to Object",": This will take you to the workspace that the object with the code is on and focus on the object.","\n      ","Add /Open Event",": This permits you to add a new event to the object the current script belongs to, and will open a new code tab in the Script Editor for the added event. If the event selected already has code in it, then this will\n        be opened in a new tab.","\n    ","\n    ","For information on the rest of the right-click "," menu options, see the section on ","Editing",", below.","\n    "," ","\n  ","\n  ","Gutter","Gutter","\n  ","\n    ","The ","Gutter ","is used to show the line numbers for your code and also to convey some specific pieces of information about the state of the code. Most importantly, if you make a ","typo","      or construct the code incorrectly, then the GameMaker Studio 2 ","IDE"," will inform you of the issue by flagging the line of code with a red exclamation mark "," showing a ","syntax"," error. You can then mouse over the symbol to get a brief description of what the issue is:","\n    ","You can find more information on Syntax errors (and general errors when testing or compiling your code) from the following section:","\n    ","\n      ","Error Reporting","\n    ","\n    ","The gutter will also mark any line of the script that has had a ","breakpoint ","added. A breakpoint is simply a place in the script where you want the ","debugger"," to pause the execution of your\n      game when it is reached. You can toggle a breakpoint from any line of any script or object event by pressing \"","f9","\" or using the right-click "," menu. When you add a breakpoint, it will show up like this in the gutter:","\n    ","Finally, the gutter will also show any bookmarked items too. To bookmark a line of code simply hold down "," / "," + "," + ","Number"," (from 0 to 9), and this will permit you to skip back to this line of code from anywhere in the IDE simply by using "," / "," + ","Number"," (from 0 to 9). To delete the bookmark, simply perform the same action as you used to add it\n      on the line of code again. When a bookmark has been added, it will show like this:","\n    ","\n    "," ","\n  ","\n  ","Search / Replace","Search / Replace","\n  ","\n    ","While working in the script editor, you can press "," / "," + \"","F","\" to open up the Search box or "," / "," + \"","H","\" to open up Search and Replace:","\n    ","Here you can perform a ","local ","search for the keyword you input and once you have entered your search term, you can then use\n      the arrows at the top right of the search window to skip from one found term to the next in the script. You can change how the search operation is carried out by toggling the following buttons:","\n    ","\n      ","\n        ","\n          ","\n          ","When you toggle this, the search function will only highlight those strings that match the whole input string. For example, with it off a search for \"","random","\" will show up all words that contain this string - like ","irandom()",",\n            or ","randomise()"," - while toggling it to on would only show the function ","random()",".","\n        ","\n        ","\n          ","\n          ","When this option is toggled, you are telling GameMaker Studio 2 to check not only the contents of the search string, but the case too. For example, if you have a sprite called \"","spr_Dog","\" and do a search for\n            \" ","dog","\" with this toggle ","off",", then the sprite string will be highlighted, however if the toggle is ","on ","then it won't since \"","Dog","\" is no longer considered the same as \"","dog","\".","\n        ","\n      ","\n    ","\n    ","If you have opened the search window using "," / "," + \"","F","\", then the replace functionality will not be visible, so you need to click the Replace button "," to open\n      it. Once open, you can then enter a string that will be used to replace any given search string, using the following buttons to perform the action:","\n    ","\n      ","\n        ","\n          ","\n          ","Clicking this will replace the next search string found in the script with the given replace string. Note that the \"next\" term is considered the next one after the current cursor position, and you can skip to different ones using arrow\n            buttons at the top right of the search window.","\n        ","\n        ","\n          ","\n          ","Clicking this will replace ","all ","examples of the search string within the script using the given replace string.","\n        ","\n      ","\n    ","\n    ","Note that if you want to do a ","global ","search (ie: search the whole project rather than the current script or event), then you can press "," / "," + "," + \"F\".","\n    "," ","\n    "," ","\n  ","\n  ","Main Code Editor","Main Code Editor","\n  ","\n    ","The main code editor is where you'll write all your code to create the script asset or fill an object event. The actual edition of your code is covered in the section on ","Editing"," further down this page.","\n    "," ","\n  ","\n  ","Information","Information","\n  ","\n    ","The information bar at the bottom of the IDE shows you the current line number you are on and the position along the line. It is also where you can see the code helper, which is a line of text that shows the function you are currently editing along\n      with the arguments it requires. As you fill in the function in the editor, the arguments will highlight to show you which one you are currently editing. If you have used the ","JSDoc Script Comments"," within\n      a script asset then the information you have supplied will also show here.","\n  ","\n  "," ","\n  ","You can get further information about using the script and code editors from the following pages:","\n  ","\n    ","Editing Code","\n    ","JSDoc Comments","\n    ","Code Snippets","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","The Asset Editors","\n        ","Next: ","Sequences","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Script Editor"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"121"})