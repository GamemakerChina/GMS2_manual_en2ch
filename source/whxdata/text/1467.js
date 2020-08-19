rh._.exports({"0":["Particle Systems"],"2":["Particle Systems"],"3":["\n  ","\n  ","\n  ","Before you can create particles you need to create a particle system. This is a \"container\" where you place your particles and emitters (if you need them) ready for use, and you can put as many or as few particles into any one system as you\n    think necessary, and you can have as many systems as you think necessary too. However, it is always better to keep this number as small as possible due to the fact that each system, emitter and particle takes up memory and having too many of them\n    may slow your game down or cause problems. For example, if you need some effects to appear above instances, and other effects to appear beneath instances, you would create two systems and set their depths to get the desired effect, with all particles\n    that are added to each system being drawn at the depth you specify.","\n  ","Since a particle system is a dynamically created resource, you must create it and store the returned index in a variable to reference the system in all further function calls, and it is very important that you also destroy the system when it is no longer\n    needed or else you will have a memory leak that will slow down and eventually crash your game. It is also worth noting that particle systems will live on forever after they are created, even if the index is no longer stored. So even if you change\n    room or restart the game, the systems and the particles will remain, and be visible, in all further rooms so you better make sure you destroy them once you no longer need them.","\n  ","The basic functions for setting up a particle system are listed below:","\n  "," ","\n  ","\n    ","part_system_exists","\n    ","part_system_create","\n    ","part_system_create_layer","\n    ","part_system_get_layer","\n    ","part_system_layer","\n    ","part_system_depth","\n    ","part_system_position","\n    ","part_system_clear","\n    ","part_system_destroy","\n    ","part_particles_clear","\n    ","part_particles_count","\n  ","\n  "," ","\n  ","Once particles are added to a particle system and then burst or streamed into the room, they are normally automatically updated each step and drawn based on the parameters that you have used to define them. However it can sometimes be necessary to control\n    when and how the system is updated as well as how the system should be drawn, and for that GameMaker Studio 2 provides the following functions:","\n  "," ","\n  ","\n    ","part_system_automatic_update","\n    ","part_system_automatic_draw","\n    ","part_system_update","\n    ","part_system_drawit","\n    ","part_system_draw_order","\n  ","\n  "," ","\n  ","You can use ","particle emitters"," to burst or stream particles from an area, but in many cases these are not necessary and it is actually better to just create the particles\n    directly using the following functions:","\n  "," ","\n  ","\n    ","part_particles_create","\n    ","part_particles_create_colour","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particles","\n        ","Next: ","Particle Types","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Particle Systems"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"1467"})