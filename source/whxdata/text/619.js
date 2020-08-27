rh._.exports({"0":["sprite_prefetch"],"1":["sprite_prefetch"],"2":["sprite_prefetch"],"3":["\n  ","\n  ","\n  ","This function can be used to prefetch (place into texture memory) a texture page with the given sprite. You supply the sprite index as defined when you created the sprite asset, and the texture page it is on will be loaded into memory. Note that the\n    function will return ","-1"," if prefetch is not supported for the chosen resource or the target platform is HTML5, or it will return ","0"," if all worked correctly.","\n  ","NOTE",": There is a performance hit as the texture is uploaded to texture memory on most devices, so it's recommended that you call ","sprite_prefetch"," on\n    any required graphics at the start of a level to avoid any stalls.","\n  "," ","\n  ","\n  ","sprite_prefetch(ind)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","ind","\n        ","The sprite index to fetch","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Int (-1 or 0)","\n  "," ","\n  ","\n  ","sprite_prefetch(spr_Player_Aura);","\n  ","The above code will place the referenced sprite into texture memory ready for use.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprite Manipulation","\n        ","Next: ","sprite_prefetch_multi","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sprite_prefetch"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"619"})