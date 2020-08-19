rh._.exports({"0":["steam_ugc_request_item_details"],"1":["steam_ugc_request_item_details"],"2":["steam_ugc_request_item_details"],"3":["\n  ","\n  ","\n  ","This function can be used to retrieve information about a given file ID. You give the file ID and supply a maximum age for checking (see the Steam docs for more information), then the function returns a unique async ID value which can be used to check\n    the details correctly in the ","Steam Async event",". This event will have the ","async_load","    DS map which will be populated with the following key/value pairs:","\n  ","\n    ","\"","id","\" - The async ID returned by the function that triggered the event","\n    ","\"","result","\" - The result of the operation (a real value). This will either be the GML constant ","ugc_result_success"," or some other real number. So you should check for this constant to ensure that the call was successful, and if\n      otherwise somthing has not worked correctly. The rest of the possible values returned are shown as the result of the Steam \"EResult\" value and you should see ","steamclientpublic.h"," in the SDK headers for all 89 possible values.","\n    ","\"","event_type","\" - The string \"","ugc_item_details","\"","\n    ","\"","cached_data","\" - Will be ","true"," if the returned details are from the local cache or ","false"," if they are taken from the server","\n    ","\"","published_file_id\"","\" -Holds the unique published file id for the item","\n    ","\"","file_type","\" - The type of file used","\n    ","\"","creator_app_id","\" - The Steam ID of the item creator","\n    ","\"","consumer_app_id","\" - The Steam ID of the item consumer","\n    ","\"","title","\" - The title of the item","\n    ","\"","description","\" - The description of the item","\n    ","\"","steam_id_owner","\" - The Steam ID of the item owner","\n    ","\"","time_created","\" - The time the item was first created","\n    ","\"","time_updated","\" - The last time the item was updated","\n    ","\"","time_added_to_user_list","\" - The time that the item was subscribed to","\n    ","\"","visibility","\" - The visibility of the item (see ","steam_ugc_set_item_visibility()"," for the returned constants)","\n    ","\"","banned","\" - Whether the item has been banned (","true",") or not (","false",")","\n    ","\"","accepted_for_use","\" - Whether the item has been accepted for use (","true",") or not (","false",")","\n    ","\"","tags_truncated","\" - Short version of the tags as an array","\n    ","\"","tags","\" - An array of the tags for the item","\n    ","\"","handle_file","\" - The unique file handle for the item","\n    ","\"","handle_preview_file","\" - The unique handle for the image preview for the item (can be used as an argument with ","steam_ugc_download()"," to download a preview image)","\n    ","\"","filename","\" - The name of the item file","\n    ","\"","file_size","\" - The size of the item file","\n    ","\"","preview_file_size","\" - The size of the preview image","\n    ","\"","url","\" - The full URL for the item","\n    ","\"","votes_up","\" - The number of up-votes received","\n    ","\"","votes_down","\" - The number of down-votes received","\n    ","\"","score","\" - The overall score of the item","\n    ","\"","account_id_owner","\" - The account ID from the Steam ID owner (this can be used in the function ","steam_ugc_create_query_user_ex()",")","\n  ","\n  "," ","\n  ","\n  ","steam_ugc_request_item_details(published_file_id, max_age_seconds);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","published_file_id","\n        ","The unique file ID for the UGC to be checked.","\n      ","\n      ","\n        ","max_age_seconds","\n        ","The \"age\" of the data to check (recommended 30 - 60 seconds).","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Async ID","\n  "," ","\n  ","\n  ","In this example we send off a details request for an item and then parse the resulting ","async_load"," DS map to set some variables. First we send of the request:","\n  ","steam_details = steam_ugc_request_item_details(global.fileID, 60);","\n  ","The above code will request details on the item with the file ID stored in the global variable and will trigger a Steam Async event with the returned information. In this event we can then parse the map and store some of the values in variables which\n    can then be used to display the information to the user:","\n  ","var map_id = async_load[? \"id\"];"," var result = async_load[? \"result\"];"," if (map_id == steam_details) && (result == ugc_result_success)","     {\n    ","     mTitle = async_load[? \"title\"];","     mDesc = async_load[? \"description\"];","     mTags = async_load[? \"tags\"];","     m_hPreviewFile = async_load[? \"handle_preview_file\"];","     m_hOwnerSteamId\n    = async_load[? \"steam_id_owner\"];","     mOwnerAccountId = async_load[? \"account_id_owner\"];","     mPubFileId = async_load[? \"published_file_id\"];","     mScore = async_load[? \"score\"];","     }\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","UGC","\n        ","Next: ","steam_ugc_create_query_user","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["steam_ugc_request_item_details"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Extended Example:"],"id":"2346"})