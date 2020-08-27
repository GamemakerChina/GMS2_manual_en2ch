rh._.exports({"0":["Dialog"],"2":["Dialog,Dialogue"],"3":["\n  ","\n  ","\n  ","Most modern computers and mobile devices do not like it when a game is stopped while a dialog window is shown. They tend to interpret this as game runner having stopped, and may consider it an error and close the app prematurely. To prevent this GameMaker\n    Studio 2 has ","asynchronous"," dialog functions that permit you to request certain forms of user feedback or input, but without blocking the game runner at any time, meaning that - when called - the game will run as normal in the background\n    while the user responds to the shown dialog window. Once the user has responded, a ","Dialog Asynchronous Event"," will be called so that you can deal with the results.","\n  ","NOTE",": This means that if it is possible for the player to lose the game, get killed, etc... while this dialog is being shown, then you should take steps to create a pause system, otherwise it'll be an unpleasant user experience. ","\n  ","Below is a list of all the available asynchronous dialog functions:","\n  "," ","\n  ","\n    ","get_login_async","\n    ","get_string_async","\n    ","get_integer_async","\n    ","show_message_async","\n    ","show_question_async","\n    ","shop_leave_rating","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Asynchronous Functions","\n        ","Next: ","Cloud Saving","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Dialog"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"2206"})