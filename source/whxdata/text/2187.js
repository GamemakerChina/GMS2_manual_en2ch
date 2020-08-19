rh._.exports({"0":["phy_mass"],"1":["phy_mass"],"2":["phy_mass"],"3":["\n  ","\n  ","\n  ","This ","read-only"," variable returns the mass of the instance in ","kilograms",". This value is calculated automatically based on the surface area of the assigned fixtures and their density values, but it can be changed using the function ","physics_mass_properties()",".","\n  "," ","\n  ","\n  ","phy_mass;","\n  "," ","\n  ","\n  ","Real (single precision floating point value, or ","undefined"," if the instance is not physics enabled)","\n  "," ","\n  ","\n  ","if (phy_mass < other.phy_mass)","     {\n    ","     instance_destroy();\n    ","     }\n  ","\n  ","The above code is from the collision event of the instance with another and it compares the mass of each instance and destroys that which has less mass.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Physics Variables","\n        ","Next: ","phy_sleeping","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["phy_mass"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2187"})