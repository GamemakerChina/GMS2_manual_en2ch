rh._.exports({"0":["sha1_string_unicode"],"1":["sha1_string_unicode"],"2":["sha1_string_unicode"],"3":["\n  ","\n  ","\n  ","In cryptography, SHA-1 is a cryptographic hash function designed by the United States ","National Security Agency"," and is employed in several widely used applications and protocols like the popular ","Git"," where it is used to check for file changes.\n    This function will take an input unicode string and returns a 160 bit message digest in ASCII format, for example:","\n  ","sha1 input string = \"The quick brown fox jumps over the lazy dog\""," sha1 output hash = \"2fd4e1c6 7a2d28fc ed849ee1 bb76e739 1b93eb12\"","\n  ","In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example).","\n  ","NOTE",": There are two formats for the sha1 encoding, UTF-8 and unicode. Both are provided to facilitate communication with different server setups, but the most common to use is unicode.","\n  "," ","\n  ","\n  ","sha1_string_unicode(string)","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","string","\n        ","The string to hash.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","var hash, str;"," str = base64_encode(game_data);"," hash = sha1_string_unicode(str);"," http_get(\"http://www.MacSweeneyGames.com/CatchTheHaggis/gamedata?hash=\" + hash); http_get(\"http://www.MacSweeneyGames.com/CatchTheHaggis/gamedata?data=\"\n    + str);","\n  ","The above code will base64 encode a string and then generate a sha1 hash. Finally, both the hash and the encoded string are sent to a server.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","File Encoding","\n        ","Next: ","sha1_file","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["sha1_string_unicode"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2434"})