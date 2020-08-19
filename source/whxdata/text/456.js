rh._.exports({"0":["Set Particle Life"],"1":["DnD™ Action - Set Particle Life"],"2":["Set Particle Life"],"3":["\n  ","\n  ","\n  ","This action will set the lifespan of the given particle type. You first specify the particle type ID value (which is the value returned when you created the particle using the ","Create Particle Type"," action) and then\n    you can set the minimum and maximum lifespan of the particle in game frames. For example, if your game has a frames per second of 60, then setting both the lifespan values here to 60 will mean that the particles will last 1 second on screen before\n    disappearing. If you use two different values then each particle spawned will have a random lifespan set within the given minimum and maximum. Note that all values should be positive integers.","\n  ","IMPORTANT!"," Setting very long lifespans and then emitting hundreds of particles, can cause issues on less powerful machines and on mobile devices. Take care when setting particle lifespan to maximise the visual effect but minimise the performance\n    cost, and only use very long lifespan particles sparingly.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type ID","\n        ","The ID value for the global type to set the lifespan of","\n      ","\n      ","\n        ","Min Life","\n        ","The minimum lifespan for a particle (in game frames)","\n      ","\n      ","\n        ","Max Life","\n        ","The maximum lifespan for a particle (in game frames)","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will create a new particle type and assign its unique\n    ID value to a global variable. It then proceeds to set all the properties for the particle type.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Set Particle Speed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Particle Life"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"456"})