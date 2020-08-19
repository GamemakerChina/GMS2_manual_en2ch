rh._.exports({"0":["network_send_raw"],"1":["network_send_raw"],"2":["network_send_raw"],"3":["\n  ","\n  ","\n  ","With this function you can send a \"raw\" data packet through the network. The function takes the ","socket id"," to connect through and then you must supply the ","buffer id"," which contains the data to be sent (for more information on buffers\n    see ","Reference - Buffers",") and finally the size (in bytes) of the data packet. The data sent is not formatted by GameMaker Studio 2 in any way and the receiving devices will get the data as a stream which\n    means you will have to handle it yourself. The function will return the number of bytes of data sent, or a number less than 0 if the send has failed.","\n  "," ","\n  ","\n  ","network_send_raw(socket, buffer, size);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","socket","\n        ","The id of the socket to use.","\n      ","\n      ","\n        ","buffer","\n        ","The id of the buffer to get the data from.","\n      ","\n      ","\n        ","size","\n        ","The size (in bytes) of the data.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real","\n  "," ","\n  ","\n  ","buff = buffer_load(\"player_save.dat\");"," network_send_raw(sock, buff, buffer_get_size(buff));","\n  ","The above information loads a previously saved buffer data into memory and returns the buffer id to be stored in the variable \"buff\". This complete buffer is then send as a raw data packet over the network using the socket identified by the\n    variable \"sock\".","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Networking","\n        ","Next: ","network_send_udp","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["network_send_raw"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2252"})