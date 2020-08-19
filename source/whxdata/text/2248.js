rh._.exports({"0":["network_set_config"],"1":["network_set_config,network_config_connect_timeout,network_config_use_non_blocking_socket,network_config_enable_reliable_udp,network_config_disable_reliable_udp"],"2":["network_set_config,network_config_connect_timeout,network_config_use_non_blocking_socket,network_config_enable_reliable_udp,network_config_disable_reliable_udp"],"3":["\n  ","\n  ","\n  ","With this function you can set different network configurations.","\n  ","NOTE",": This function will not work when used in a project running on the HTML5 target.","\n  ","These configurations are given as ","constants"," and the setting will depend on the constant that you have chosen. The table below lists the available constants and their settings:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Constant","\n        ","Description","\n        ","Setting","\n      ","\n      ","\n        ","network_config_connect_timeout","\n        ","Set a connection timeout value","\n        ","A value in milliseconds","\n      ","\n      ","\n        ","network_config_use_non_blocking_socket","\n        ","Tell GameMaker Studio 2 not to block on connect.","\n        ","0 = block, 1 = don't block","\n      ","\n      ","\n        ","network_config_enable_reliable_udp","\n        ","Enables the \"reliable UDP\" protocol for an existing UDP socket","\n        ","The socket ID to target","\n      ","\n      ","\n        ","network_config_disable_reliable_udp","\n        ","Disables the \"reliable UDP\" protocol for an existing UDP socked.","\n        ","The socket ID to target","\n      ","\n    ","\n  ","\n  ","\n    "," The first option (","network_config_connect_timeout",") simply sets the timeout for connecting to a server but doesn't change connection behaviour apart from the time you have to wait. It is recommended that you don't set this too\n    low and keep it at about 1000 for a LAN only game or 4000 or so for internet, or the game may fail to connect randomly. If you wish to set a timeout value for sending/receiving packets then use the function ","network_set_timeout()",".","\n  ","The second option (","network_config_use_non_blocking_socket",") means that the network connect functions will all return a ","socket_id"," instantly, ","but you can't send or receive on that socket until you've received an async network event",".\n    The event triggered will have the \"type\" key set to ","network_type_non_blocking_connect"," (you can find further details from the page on the ","Networking Asynchronous Event",").\n    This is a ","global"," setting as GameMaker Studio 2 does not support a mixture of blocking and non-blocking in one application.","\n  ","The third and fourth options (","network_config_enable_reliable_udp",", ","network_config_disable_reliable_udp",") are for enabling or disabling the GameMaker Studio 2 reliable UDP protocol and as such, should ","only be used with UDP connections",".\n    What \"reliable\" in this case this means is that, when enabled on ","both"," ends of a connection, GameMaker Studio 2 will attempt to check your packets have arrived correctly and re-send any that don't arrive (note, we do not\n    guarantee in your packets will arrive in order of transmission). When using a reliable socket type, there will be a 12-byte header added to all udp packets which contains information needed by GameMaker Studio 2 to check the packet for errors\n    and re-send missing packets. The following points are worth noting when using this option:","\n  ","\n    ","The protocol should be enabled/disabled on both sides before sending your data, and any data sent or received before the option has been enabled/disabled will not be affected.","\n    ","You can enable or disable the protocol for any given socket ID multiple times, as long as this is properly managed on both the server side and client side","\n    ","It is possible to have two separate UDP sockets, one with reliable UDP enabled for one with reliable UDP disabled for the other.","\n  ","\n  "," ","\n  ","\n  ","network_set_config(config_value, setting);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","config_value","\n        ","The config value constant to set (listed below).","\n      ","\n      ","\n        ","setting","\n        ","The setting of the config value.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","String","\n  "," ","\n  ","\n  ","network_set_config(network_config_connect_timeout, 1000);"," network_set_config(network_config_use_non_blocking_socket, 1);","\n  ","The above code will set the timeout for the network connection to 1000ms and tell GameMaker Studio 2 not to block on connect.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Networking","\n        ","Next: ","network_set_timeout","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["network_set_config"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2248"})