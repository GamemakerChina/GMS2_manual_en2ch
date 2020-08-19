rh._.exports({"0":["irandom_range"],"1":["irandom_range"],"2":["irandom_range"],"3":["\n\n\n\n  ","\n  ","\n  ","This function is similar to ","random_range()"," only with integer values as the input. You supply the low value for the range as well as the high value, and the function will return a random integer value within (and\n    including) the given range. For example, ","irandom_range(10, 35)"," will return an integer between 10 and 35 ","inclusive",".","\n  ","As with the ","irandom()"," function, real numbers can be used, in which case they will be rounded down to the nearest integer EG: irandom_range(6.2,9.9) will give a value between 6 and 9.","\n  ","NOTE:"," This function will return the same value every time the game is run afresh due to the fact that GameMaker: Studio generates the same initial random seed every time to make debugging code a far easier task. To avoid this behaviour use\n    ","randomise()"," at the start of your game.","\n  "," ","\n  ","\n  ","irandom_range(n1, n2);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","n1","\n        ","The low end of the range from which the random number will be selected.","\n      ","\n      ","\n        ","n2","\n        ","The high end of the range from which the random number will be selected.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Integer","\n  "," ","\n  ","\n  ","score += irandom_range(500, 600);","\n  ","This will add an integer value anywhere between 500 and 600 (inclusive) to the total score.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Number Functions","\n        ","Next: ","random_set_seed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["irandom_range"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1993"})