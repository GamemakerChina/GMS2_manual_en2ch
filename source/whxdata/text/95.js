rh._.exports({"0":["Async Events"],"1":["Objects - Async Events"],"2":["Async Events,asynchronous,image loaded,audio playback,audio recording,cloud,dialog,http,in-app-purchase,networking,push notification,save/load,social,steam,system"],"3":["\n  ","\n  ","\n  ","\n  ","An Asynchronous Event is one that is fired off when GameMaker Studio 2 receives a ","callback"," from some external source, which can be from the web or from the device running your game. Basically,\n    you tell GameMaker Studio 2 to do something - like load an image - and it'll start to do this but continue doing whatever it else it has to do meanwhile its working. Then, when the request has been completed, a callback will be sent to GameMaker\n    Studio 2 and any Asynchronous Events defined for that type of callback will be fired.","\n  ","Please note that the Asynchronous Events are fired for ","all ","instances that have them, much like the keyboard events, so you can - for example - do an ","http_get()"," call in one instance, yet have the ","Asynchronous HTTP Event","    in another to deal with the callback.","\n  ","NOTE",": You should be aware that due to XSS protection in browsers, requests and attempts to load resources from across domains are blocked and may appear to return blank results when using any of the following events.","\n  ","There are various types of events associated with the Asynchronous event category, and they are all explained in the sections below:","\n  ","NOTE",": The variable ","async_load","  which is mentioned\n    in the following sections is ","only valid in these events",", as the DS map that it points to is created at the start of the event, then deleted again at the end, with this variable being reset to a value of -1 at all other times.","\n  ","\n    ","Audio Playback","\n    ","Audio Recording","\n    ","Cloud","\n    ","Dialog","\n    ","HTTP","\n    ","In App Purchase","\n    ","Image Loaded","\n    ","Networking","\n    ","Push Notifications","\n    ","Save / Load","\n    ","Social","\n    ","Steam","\n    ","System","\n  ","\n  "," ","\n  ","It may be that if you are making extensions for different platforms you would like to target one or more of these asynchronous events for callbacks from your extension functions. To that end, you can find a table below that outlines each of the internal\n    event name constants and their corresponding ID value. Note that these event constants are ","only"," for use with extensions!","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Value","\n      ","\n      ","\n        ","ev_web_image_load","\n        ","60","\n      ","\n      ","\n        ","ev_web_sound_load","\n        ","61","\n      ","\n      ","\n        ","ev_web_async","\n        ","62","\n      ","\n      ","\n        ","ev_dialog_async","\n        ","66","\n      ","\n      ","\n        ","ev_web_iap","\n        ","67","\n      ","\n      ","\n        ","ev_web_cloud","\n        ","68","\n      ","\n      ","\n        ","ev_web_networking","\n        ","69","\n      ","\n      ","\n        ","ev_web_steam","\n        ","70","\n      ","\n      ","\n        ","ev_social","\n        ","71","\n      ","\n      ","\n        ","ev_push_notification","\n        ","72","\n      ","\n      ","\n        ","ev_async_save_load","\n        ","73","\n      ","\n      ","\n        ","ev_audio_recording","\n        ","74","\n      ","\n      ","\n        ","ev_audio_playback","\n        ","75","\n      ","\n      ","\n        ","ev_system_event","\n        ","76","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Object Events","\n        ","Next: ","Gesture Events","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["The Async Events"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"95"})