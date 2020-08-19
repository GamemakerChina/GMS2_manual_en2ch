rh._.exports({"0":["Compiler Errors"],"1":["Compile Errors"],"2":["compiler errors"],"3":["\n  ","\n  ","\n  ","The second type of error that can be reported for your game is the ","compiler error",". A compiler error happens when your game encounters some type of error that the syntax checker may not have been able to detect - it's very easy to\n    forget to declare a variable or mistakenly type a string as a real, for example - or when an error is related to how you have set up the compile tools from the ","Platform Preferences","    for the target platform. These errors will be caught by GameMaker Studio 2 as the game is being compiled and this information will also be shown in the ","Compiler Error Output",", as shown below:","\n  ","\n  ","NOTE",": These errors don't usually pop up a window and will simply show \"","Build Failed","\" in the compiler output. If a window pops up it's usually a Runner Error, which\n    is explained ","here",".","\n  ","The compiler error messages will all follow the same format:","\n  ","[object] - [event] - [Line Number]: [error string]","\n  ","If the error is found in a script then it will simply be:","\n  ","[script] - [Line Number]: [error string]","\n  ","You can then double-click "," on any of the compiler error entries to open the given asset at the position flagged as giving the error, and then you\n    can use the information contained within the message to pinpoint exactly where in the object or script the error has occurred. However, sometimes these errors can seem a bit cryptic, so below you can find a complete list of all errors and a brief\n    explanation of what they mean:","\n  "," ","\n  ","\n    ","\n      ","\n        ","Error","\n        ","Description","\n      ","\n      ","\n        ","\n          ","Miscellaneous","\n        ","\n      ","\n      ","\n        ","No program to compile","\n        ","A previous compile error has caused the compiler parse tree to not be created and thus the compiler has no program data to compile","\n      ","\n      ","\n        ","Fatal Error while compiling ","[name]"," - bailing details below","\n        ","This message simply means that some error has been discovered but the compiler cannot place what or where (if this happens consistently you may wish to contact ","YoYo Games Support","          and supply the details that the compiler output window shows)","\n      ","\n      ","\n        ","Recursive macro expansion is not supported","\n        ","You have used recursive macros that refer to each other and constantly expand","\n      ","\n      ","\n        ","Unable to find TextureGroup ","[group]","\n        ","This error is usually only found from trying to run a malformed project file (if this happens consistently you may wish to contact ","YoYo Games Support"," and supply the\n          details that the compiler output window shows)","\n      ","\n      ","\n        ","Wrong to convert ","[value]"," to number","\n        ","You have tried to convert the given value, for example a string, into a number","\n      ","\n      ","\n        ","Division by 0","\n        ","You have tried to divide a value by 0","\n      ","\n      ","\n        ","Invalid object id ","[object ID]"," used","\n        ","You have tried to access an object using an ID value that is incorrect","\n      ","\n      ","\n        ","Unclosed comment (","/*",") at end of script","\n        ","You have created a script comment using","\n          ","/* [comment] */"," but have not supplied the closing comment tag","\n      ","\n      ","\n        ","Invalid token","\n        ","You have an invalid character in your game code, which can happen with foreign language characters or Unicode","\n      ","\n      ","\n        ","Number ","[num]"," in incorrect format","\n        ","The given number - shown in the error - is not the correct format for the function or operation being performed, for example you supply an integer when a pointer is required","\n      ","\n      ","\n        ","Unexpected EOF encountered","\n        ","You have reached the end of file unexpectedly while using the File Functions","\n      ","\n      ","\n        ","\n          ","Strings","\n        ","\n      ","\n      ","\n        ","Unable to Not a string","\n        ","You have tried to use \"","!","\" (not) on a string","\n      ","\n      ","\n        ","Unable to Negate a string","\n        ","You have tried to negate a string, for example","\n          ","string = -string","\n      ","\n      ","\n        ","\n          ","Scripts, ","Functions ","and Arguments","\n        ","\n      ","\n      ","\n        ","Wrong number of arguments for function ","[function]","\n        ","You have supplied too many or too few arguments for the given function","\n      ","\n      ","\n        ","Failed to parse action_execute_script() - incorrect number of arguments received","\n        ","The DnD™ action Execute Script has too many or too few arguments for the given script being called","\n      ","\n      ","\n        ","Unknown function ","[function]"," check to see if script is empty","\n        ","A script or function has been called that the compiler does not recognise (this error is usually thrown by empty script asset references since the compiler will strip out these assets on compile)","\n      ","\n      ","\n        ","Function ","[function]"," expects ","n"," arguments, ","a"," provided","\n        ","A function has been given the wrong number of arguments (","n",") when a certain number were expected (","a",")","\n        ","\n      ","\n      ","\n        ","Assignment of an empty value (function does not return anything?)","\n        ","You have tried to assign a return value from a function when that function returns nothing","\n      ","\n      ","\n        ","Unable to find function ","[function]","    ","\n        ","You have called an unknown function","\n      ","\n      ","\n        ","Calling a function that needs an instance and no instance is available","\n        ","The function or script being called is for acting on an instance, but at the time of running no instances exist","\n      ","\n      ","\n        ","Calling a function that needs an other and no other is available","\n        ","You have used the keyword ","other"," outside of the Collision Event or outside of a ","with"," statement","\n      ","\n      ","\n        ","Argument naming error, ","n"," arguments but no reference found to"," a","\n        ","You have given a number of arguments to a script, but fail to reference one of them in the script, for example, your script takes three arguments but you only use arguments ","n ","and ","a","\n      ","\n      ","\n        ","Cannot compare arguments","\n        ","You have tried to compare two different argument types, like a string and a real number","\n      ","\n      ","\n        ","Unknown function or script ","[functions/script]"," ","\n        ","The compiler does not recognise the function or script being called","\n      ","\n      ","\n        ","Cannot use resource name ","[resource] ","as it is not being exported","\n        ","You have tried to access a resource that has not been flagged as part of the project for the platform being compiled to","\n      ","\n      ","\n        ","Cannot use function/script name for a variable, using ","[functions/script]","\n        ","You have tried to use either a function name or a script name as a variable, for example:","\n          ","string = \"Hello World\"","\n      ","\n      ","\n        ","Cannot use an argument outside a script ","\n        ","The built in argument variables can only be used inside a script but you have tried to use them elsewhere","\n      ","\n      ","\n        ","No references to ","argument[num]"," but references ","argument[num]","\n        ","You are using a reference to an argument that does not exist but that could map to another argument","\n      ","\n      ","\n        ","Incorrect number of arguments for accessor","\n        ","You have supplied the wrong number of arguments when using an accessor","\n      ","\n      ","\n        ","Wrong type of arguments for (one of the below):"," /, div, mod, +, -, &&, ||, &, |, ^, <<, >>","\n        ","You have supplied the wrong type of argument for the expression being evaluated","\n      ","\n      ","\n        ","\n          ","Variables","\n        ","\n      ","\n      ","\n        ","Using uninitialized variable ","[var]","\n        ","You have tried to use the named variable before it has been initialised","\n      ","\n      ","\n        ","Variable ","[var]"," is read-only","\n        ","You have tried to change the named variable when it cannot be changed","\n      ","\n      ","\n        ","Unable to find variable named ","[var]","\n        ","The named variable cannot be found in the current compile","\n      ","\n      ","\n        ","Malformed variable reference","\n        ","You have tried to reference a variable in the wrong way","\n      ","\n      ","\n        ","Trying to set a read only variable ","[var]","\n        ","You have tried to set a variable that is read only","\n      ","\n      ","\n        ","Cannot re-declare a built in variable","\n        ","You have tried to declare a local variable using the same name as one of the built in variables","\n      ","\n      ","\n        ","Cannot use resource name for a variable","\n        ","You have use the same name as a resource from the resource tree as a local variable","\n      ","\n      ","\n        ","[Variable]"," is read-only","\n        ","You have tried to use a variable that has been flagged as read only","\n      ","\n      ","\n        ","\n          ","Constants","\n        ","\n      ","\n      ","\n        ","Cannot set a constant [constant] to a value","\n        ","You have tried to set a constant to a different value","\n      ","\n      ","\n        ","Constant is invalid here","\n        ","You have tried to use a constant somewhere that is not valid for the code being run","\n      ","\n      ","\n        ","Cannot assign to [var] - it's a constant","\n        ","You have tried to assign a new value to the named constant","\n      ","\n      ","\n        ","\n          ","Arrays","\n        ","\n      ","\n      ","\n        ","Array index should not be negative","\n        ","You have tried to access, create, or set an array value using a negative array index","\n      ","\n      ","\n        ","\n          ","Malformed...","\n        ","\n      ","\n      ","\n        ","Malformed Conditional operator","\n        ","You have used an erroneous conditional (ternary) operator or if statement, and not the format:","\n          ","[condition] ? [expression1] : [expression2];","\n      ","\n      ","\n        ","If requires a then statement","\n        ","You have written an if statement and expression to evaluate, but not given any then part to run","\n      ","\n      ","\n        ","malformed assignment statement","\n        ","In the code you are using an assignment operator wrong","\n      ","\n      ","\n        ","Malformed"," if / repeat / while / do / for / with / switch / break / continue / exit"," statement\n        ","\n        ","The structure of the given statement is incorrect.","\n      ","\n      ","\n        ","Malformed post inc or dec statement","\n        ","You have tried to use ","[var]++"," or ","[var]--"," in an illegal way","\n      ","\n      ","\n        ","Malformed pre inc or dec statement","\n        ","You have tried to use ","++[var]"," or ","--[var]"," in an illegal way","\n      ","\n      ","\n        ","Malformed global gml_pragma","\n        ","You have created a wrong global string when using ","gml_pragma","\n      ","\n      ","\n        ","Malformed PNGCrush gml_pragma","\n        ","You have created a wrong string command for PNGCrush when using ","gml_pragma","\n      ","\n      ","\n        ","Malformed Texgroup.Scale gml_pragma","\n        ","You have create a wrong global string when using ","gml_pragma","\n      ","\n      ","\n        ","\n          ","Switch / Case","\n        ","\n      ","\n      ","\n        ","Default cannot be used multiple times in a switch","\n        ","In your switch statement you have defined default: more than once","\n      ","\n      ","\n        ","Clause expression type mismatch (clause expressions should all be the same type)","\n        ","In your switch you are checking for two different constant case types, for example a string in one case and an integer in another","\n      ","\n      ","\n        ","Case argument should be a constant","\n        ","You have tried to use a value that does not evaluate to a constant within one of your switch cases","\n      ","\n      ","\n        ","Statement in a switch MUST appear after case or default","\n        ","You have added a statement to a switch outside of either a ","case:"," or ","default:"," call","\n      ","\n      ","\n        ","Duplicate case statement found / original here","\n        ","You have used the same case constant in two different places within a switch (note that the \"original here\" comment will be on another line and can be clicked to show the original case)","\n      ","\n      ","\n        ","\n          ","Expressions","\n        ","\n      ","\n      ","\n        ","No return value from expression (does expression have a return value?)","\n        ","You have tried to assign a return value from an expression to a variable when the expression returns nothing","\n      ","\n      ","\n        ","Expecting expression after the '.'","\n        ","You have used the point \"",".","\" notation erroneously and not added an expression afterwords correctly","\n      ","\n      ","\n        ","Unexpected symbol [symbol] in expression","\n        ","The expression uses a symbol that is not part of the accepted expression symbol set - the symbol in question will be shown","\n      ","\n      ","\n        ","\n          ","Unknown Operators","\n        ","\n      ","\n      ","\n        ","Unknown Pre operator","\n        ","You have tried to use a symbol as a pre-operator when that symbol is not permitted, for example ","**[var]"," or ",">>[var]"," - only ","++"," and ","--","          are acceptable","\n      ","\n      ","\n        ","Unknown Post operator","\n        ","You have tried to use a symbol as a post-operator when that symbol is not permitted, for example ","[var]**"," or ","[var]>>"," - only ","++"," and ","--","          are acceptable","\n      ","\n      ","\n        ","Unknown pragma [gml_pragma string]","\n        ","You have used a pragma string that is unknown to the compiler","\n      ","\n      ","\n        ","Unknown unary operator","\n        ","You have tried to use an unknown symbol as a unary operator","\n      ","\n      ","\n        ","Unknown binary operator","\n        ","You have tried to use an unknown symbol as a binary operator","\n      ","\n      ","\n        ","Unknown operator [operator]","\n        ","You have tried to use an unknown symbol as an operator (the symbol will be shown in the error)","\n      ","\n      ","\n        ","\n          ","Break / Continue","\n        ","\n      ","\n      ","\n        ","Break used without context","\n        ","You have not used break within a switch or a loop or any other permitted structure","\n      ","\n      ","\n        ","Continue used without context","\n        ","You have not used continue within the correct context","\n      ","\n      ","\n        ","continue statement is not allowed at this point","\n        ","You have used continue within a apart of your code where it is not permitted","\n      ","\n      ","\n        ","\n          ","Enums","\n        ","\n      ","\n      ","\n        ","enum num is invalid","\n        ","The enum number is invalid for the enum","\n      ","\n      ","\n        ","malformed enum","\n        ","You have not created the enum correctly","\n      ","\n      ","\n        ","enum [enum] has already been defined","\n        ","You have tried to define an enum using the same name as another previously defined","\n      ","\n      ","\n        ","malformed enum entry","\n        ","The enum has an invalid entry","\n      ","\n      ","\n        ","enum expression must be an integer constant","\n        ","The enum entry does not evaluate as an integer constant","\n      ","\n      ","\n        ","enum reference [key] does not exist in [enum]","\n        ","You have tried to reference an enum entry using a key that has not previously been defined for that enum","\n      ","\n      ","\n        ","\n          ","Expected Symbols / Values","\n        ","\n      ","\n      ","\n        ","Symbol ( expected"," Symbol ) expected"," Symbol , or ) expected"," Symbol { expected"," Symbol } expected"," Symbol , or } expected"," Symbol : expected"," Symbol ; expected"," Symbol [ expected"," symbol ] expected"," Symbol\n          , or ] expected","\n        ","You have not used a required symbol when writing your code","\n      ","\n      ","\n        ","Expected id or string","\n        ","You have used a value that is not either a layer ID or a layer name - as a string - in one of the Layer functions","\n      ","\n      ","\n        ","keyword Until expected","\n        ","You have created a do... until loop but neglected to supply an until expression","\n      ","\n      ","\n        ","Function name expected","\n        ","You have used something other than a function name in your code where a function should go","\n      ","\n      ","\n        ","variable name expected","\n        ","You have supplied a name that is not a variable name where one is expected","\n      ","\n      ","\n        ","Assignment operator expected","\n        ","You have created an assignment which expects an operator but none has been supplied","\n      ","\n      ","\n        ","\n          ","Android Exclusive","\n        ","\n      ","\n      ","\n        ","Android ARM ToolChain directory [dir] does not exist","\n        ","The link given in the Android Preferences for the ARM toolchain is incorrect and does not exist.","\n      ","\n      ","\n        ","Android MIPS ToolChain directory [dir] does not exist","\n        ","The link given in the Android Preferences for the MIPS toolchain is incorrect and does not exist.","\n      ","\n      ","\n        ","Android x86 ToolChain directory [dir] does not exist","\n        ","The link given in the Android Preferences for the x86 toolchain is incorrect and does not exist.","\n      ","\n      ","\n        ","Android NDK directory [dir] does not exist","\n        ","The link given in the Android Preferences for the Android NDK is incorrect and does not exist.","\n      ","\n    ","\n  ","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Error Reporting","\n        ","Next: ","Runner Errors","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["Compile Errors"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"id":"190"})