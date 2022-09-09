/*
SOURCE: https://youtu.be/lI1ae4REbFM

WHAT IS JAVASCRIPT?
    JavaScript is of the key programming languages of the Web. While HTML defines the content of the Web page and CSS specifies the layout of the Web page, JavaScript programs the behavior of the Web page.

WHERE CAN JAVASCRIPT FILE BE PLACED?
    JavaScript is the default scripting language in HTML.
    There are two ways to place JavaScript code, or script,:
        1. Within the HTML page:
        Script can be specified between <script> tags, which are placed either at the end of <head> or at the end of <body>.
        2. In an external file:
        There are many advantages of having script in a separate file.
        To implement the external script, in the src attribute of the <script> tag of the HTML page, place the reference/path of the external script file.
        JavaScript files have the file extension .js
    SIDE NOTE:
                Several <script> tags can be used to add several script files to one HTML page.

WHAT IS A JAVASCRIPT PROGRAM?
    A computer program is a list of instructions to be executed by the computer.
    In a programming language, these instructions are called statements.
    A JavaScript program is a list of programming statements.
    JavaScript statements:
        -are executed one by one, in the same order as they are written, by the Web browser in HTML.
        -are composed of: values, operators, expressions, keywords/reserved words, comments,...
        -can be grouped together in a code block.
    A code block is used to define statements to be executed together within a braces {} pair.

WHAT IS JAVASCRIPT SYNTAX?
    In a programming language, the set of rules of how programs in that language are constructed is its syntax.
    JavaScript syntax defines two types of values:
        1. Literals:
        They are fixed values.
        2. Variables:
        They are variable values, which means the values are not yet known.

WHAT IS A JAVASCRIPT VARIABLE?
    A JavaScript expression is a combination of variables, operators, and values, that computes to a value. The computation is called an evaluation.
    In a programming language, variables are containers for storing data values.
    I. Keywords:
        Keywords are used to specify actions to be performed, for example, to declare a variable.
        There are four ways to declare a variable:
            1. var:
            Keyword "var" is used typically in older browser.
            Variables defined with "var" can be redeclared and reassigned.
            Variables can even be initialized before declared with "var".
            Keyword "var" doesn't provide a block scope.
            2. let:
            Keyword "let" is used typically to declare a variable whose value might change.
            Variables defined with "let" can't be redeclared but can be reassigned.
            Keyword "let" provides a block scope.
            3. const:
            Keyword "const" is used in a general rule unless value of the variable might change.
            Keyword "const" doesn't define a constant value but defines a constant reference to a value, as for an array, an object, a function, a RegExp.
            Variables defined with "const" must be initialized when declared.
            Variables defined with "const" can't be redeclared and reassigned.
            Keyword "const" provides a block scope.
            4. no keyword:
            If a variable is declared without a keyword, it is called undeclared variable.
    II. Identifiers:
        Identifiers are used to name variables and functions.
        General rule for JavaScript identifiers:
            -can contain letters, digits, underscores (_), dollar signs ($).
            -must not begin with a digit.
            -are case sensitive.
            -must not use reserved words.
    III. Operators:
        An operation consists of operand(s) and operator(s).
        1. Arithmetic Operators:
        Arithmetic operators (addition+ substraction- multiplication* division/ modulus% increment++ decrement-- exponentiation**) are used to compute values.
        SIDE NOTE:
                    The exponentiation operation x**y produces the same result as the method Math.pow(x,y).
                    The operator precedence in JavaScript arithmetic is the same as in school mathematics.
        Full list: https://www.w3schools.com/js/js_arithmetic.asp
        2. String Operator:
        Concatenation operator (+) is used to concatenate strings.
        If the operation is performed between a number and a string, it will return a string.
        SIDE NOTE:
                    The computer evaluates expressions from left to right until it returns the final string.
        3. Comparison and Logical Operators:
        Comparison operators (== === != !== > >= < <=) are used to compare values.
        Full list: https://www.w3schools.com/js/js_comparisons.asp
        4. Type Operators:
        TypeOf operator (typeof) is used to return the type of a variable or an expression.
        Full list: https://www.w3schools.com/js/js_type_conversion.asp
        5. Bitwise Operators:
        Full list: https://www.w3schools.com/js/js_bitwise.asp
        6. Assignment Operators:
        Assignment operator (= += -= *= /= %= **=) is used to assign a value to a variable.
        Full list: https://www.w3schools.com/js/js_assignment.asp
    IV. Values:
        A value can be assigned to a variable either when or after the variable is declared. 
        If the variable is declared without a value, both of its value and data type will be "undefined".
    V. Data Types:
        JavaScript data types are dynamic.
        The same variable can hold different data types.
        There are different data types: numbers, strings, booleans, arrays, objects,...           
    SIDE NOTE:
                The "this" keyword: https://www.w3schools.com/js/js_this.asp 

WHAT IS A JAVASCRIPT FUNCTION?
    In a programming langguage, a function is a block of code designed to perform a particular task and compute a return value.
    To declare a function:
        function functionName(parameter1, parameter2, parameter3) {
            task;
        }
    The parentheses () may or may not include a comma-separated parameter list.
    All variables declared in the function definition including the parameters will behave as local variables.
    The parentheses () works as an operator which specifies the result of the function (to be returned). Without the parentheses (), the call will return the function definition.
    When the function is called/invoked, the task will be executed, and the result will be returned to the caller.
    SIDE NOTE:
                An argument is the value declared with the function when the function is called/invoked.
                A parameter is the value defined in the function definition when the function is declared.

WHAT ARE JAVASCRIPT NUMBERS?
    Number is a primitive data type.
    Numbers are stored as double precision floating point numbers written with or without decimals and in 64 bits, where the fraction is 52 bits (from 0 to 51), the exponent is 11 bits (from 52 to 62), and the sign is 1 bit (63).
    I. Scientific Notation, or Exponential Notation,:
        Extra large or extra small numbers can be written in special notation.
        EX:
            123e4 = 1230000
            123e-4 = 0.0123
    II. Number Precision (before round up):
        Integers can store up to 15 digits of precision.
        Decimals can store up to 17 places of precision.
        Floating point arithmetic isn't always accurate.
    III. Numberic Bases:
        By default, JavaScript interprets numbers as base 10 decimals.
        A number constant will be interpreted as a hexadecimal if it is preceded by Ox.
        A number might be interpreted as an octal if it is written with a leading zero.
        There are different numeric bases:
            base 36: hexatrigesimal
            base 32: duotrigesimal
            base 16: hexadecimal
            base 12: duodecimal
            base 8: octal
            base 2: binary
        To convert a number (base 10 decimal) to another base:
            let numberName2 = numberName1.toString(base);
    IV. Reserved words:
        NaN: is Not a Number, typeof NaN is number.
        Infinity, or -Infinity,: is returned when a calculated number is beyond the largest possible number, typeof Infinity is number.
    V. Properties:
        Number properties belongs to the Number object wrapper called Number.
        1. to return the largest possible number:
            let numberName = Number.MAX_VALUE;
        2. to return the smallest possible number:
            let numberName = Number.MIN_VALUE;
        3. to represent Infinity, or -Infinity, which is returned on overflow,:
            let numberName = Number.POSITIVE_INFINITY;
            let numberName = Number.NEGATIVE_INFINITY;
        5. to specify an illegal number:
            let numberName = Number.NaN;
    VI. Methods:
        1. to return a number as a string:
            let stringName = numberName.toString();
        2. to convert a number to its exponential notation:
            let numberName = numberName.toExponential(decimal),
            The number might be rounded if neccessary.
            The "decimal" parameter specifies the number of characters behind the decimal point. It is optional and can't be negative.
        3. to round a number:
            a. let numberName = numberName.toFixed(decimal);
            The "decimal" parameter specifies the number of characters behind the decimal point. It is optional and can't be negative.
            b. let numberName = numberName.toPrecision(digit);
            The "digit" parameter specifies the number of digits, or the length of the number. It is optional and can't be zero or negative.
    VII. JavaScript Global Methods:
        Global methods can be used on all data types.
        There are three most relevant methods that work with numbers and strings:
        1. to convert another data type to a number:
            let numberName = Number(value);
            The "value" parameter can be, for example,:
                true -> 1
                false -> 0
                string number -> number
            If the "value" parameter can't be converted to a number, it will return NaN.
        2. to parse a string to a number:
            a. let numberName = parseInt("text");
            This returns an integer.
            Spaces are allowed, and only the first number is returned.
            If the "text" parameter can't be converted to a number, it will return NaN.
            b. let numberName = parseFloat("text");
            This returns a float.
            Spaces are allowed, and only the first number is returned.
            If the "text" parameter can't be converted to a number, it will return NaN.
    Full list of number properties and methods: https://www.w3schools.com/jsref/jsref_obj_number.asp
    SIDE NOTE:
                In some programming languages, primitive values can't have properties or methods because they are not objects. On the other hand, JavaScript treats primitive values as objects when they are executed using properties or methods.
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT IS A JAVASCRIPT STRING?
    String is a primitive data type.
    Strings are text values containing zero or more characters written within single (' ') or double (" ") quotes.
    I. Template Literals, or String Template, or Back-Tics Syntax:
        Template literals use back-ticks (` `) instead of single quotes (' ') or double quotes (" ") to define a string.
            - allows to use either single quotes (' ') or double quotes (" ") or both inside a string
            - allows multiline strings
            - allows string interpolation
        String interpolation is a way to interpolate variables, expressions, or HTML templates into strings.
            - variable substitution: ${variableName}
            - expression substitution: ${expression}
    II. Escape Character:
        The backslash (\) escape character is used to avoid misunderstanding of special characters in a string.
            \character
            EX: 
                \' to insert a single quote
                \" to insert a double quote
                \\ to insert a backslash
    III. Index:
        In JavaScript, string indexes are zero-based, which means they start with O, then 1, then 2,...
    IV. Properties:
        To return the length of a string:
            let numberName = stringName.length;
    V. Methods:
        Strings are immutable, which means they can't be affected, changed or replaced.
        //methods return a number
        1. to return the index of a value in a string:
            a. let numberName = stringName.indexOf("text", position);
            This returns the index of the first occurrence.
            If the "text" parameter is not found, it will return -1.
            The "position" parameter is optional.
            If the "position" parameter is positive, the search starts from the specified position to the end of the string.
            If the "position" parameter is negative, the search starts from the specified position to the beginning of the string.
            b. let numberName = stringName.lastIndexOf("text", position);
            This returns the index of the last occurrence.
            If the "text" parameter is not found, it will return -1.
            The "position" parameter is optional.
            The "position" parameter can't be negative, and the search starts from the specified position to the beginning of the string.
            c. let numberName = stringName.search("text");
            This returns the index of the first occurrence.
            If the "text" parameter is not found, it will return -1.
            SIDE NOTE:
                        The difference between indexOf("text") and search("text") are:
                            indexOf("text") can't take regular expressions and flags.
                            search("text") can take only one parameter.
        //methods return a string
        2. to extract a part of the string:
            a. let stringName2 = stringName1.slice(start, end);
            If the "start" and "end" parameters are positive, the extraction counts from the beginning of the string, and the "end" position is not included.
            If the "start" and "end" parameters are negative, the extraction counts from the end of the string, and the "start" position is not included.
            If only one parameter is specified, the extraction counts from the specified position to the rest of the string. If the parameter is negative, the specified position is not included.
            b. let stringName2 = stringName1.substring(start, end);
            If the "start" and "end" parameters are positive, the extraction counts from the beginning of the string, and the "end" position is not included.
            If only one parameter is specified, the extraction counts from the specified position to the rest of the string.
            If the parameter is negative, the position is specified as 0.
            c. let stringName2 = stringName1.substr(start, length);
            If the "start" parameter is positive, the extraction counts from the beginning of the string.
            If the "start" parameter is negative, the extraction counts from the end of the string.
            If only one parameter is specified, the extraction counts from the specified position to the rest of the string. If the parameter is negative, the specified position is not included.
            The "length" parameter can't be zero or negative.
        3. to extract a character at a specified position of a string:
            a. let charName = stringName.charAt(position);
            The "position" parameter can't be negative.
            SIDE NOTE:
                        Property Access: stringName[position]
                        In some cases, stringName.charAt(position) and stringName[position] might return the same result, but there might be some differences/issues.
            b. let codeName = stringName.charCodeAt(position);
            This returns the unicode (UTF-16 code - an integer from 0 to 65535) of the character.
            The "position" parameter can't be negative.
        4. to replace a value in a string with another value:
            let stringName2 = stringName1.replace("text1", "text2");
        5. to add one or more values to a string:
            let stringName2 = stringName1.concat(value1, value2);
        6. to convert a string to an uppercase or a lowercase:
            let stringName2 = stringName1.toUpperCase();
            let stringName2 = stringName1.toLowerCase();
        7. to remove whitespaces on the sides of a string:
            a. let stringName2 = stringName1.trim();
            This removes on both sides of a string.
            b. let stringName2 = stringName1.trimStart();
            This removes at the beginning of a string.
            c. let stringName2 = stringName1.trimEnd();
            This removes at the end of a string.
        8. to pad another string to a string:
            a. let stringName2 = stringName1.padStart(length, "text");
            This pads at the beginning of a string.
            The "length" parameter can't be zero or negative.
            b. let stringName2 = stringName1.padEnd(length, "text");
            This pads at the end of a string.
            The "length" parameter can't be zero or negative.
        //methods return a boolean
        9. to check whether a string contains/starts with/ends with a value and return a boolean value:
            a. stringName.includes("text", position);
            The "position" parameter is optional and can't be negative.
            If the "position" parameter is omitted, it will check the first occurrence.
            If the "position" parameter is specified, the check starts from the specified position to the end of the string.
            b. stringName.startsWith("text", position);
            The "position" parameter is optional and can't be negative.
            If the "position" parameter is specified, the check starts from the specified position.
            c. stringName.endsWith("text", length);
            The "length" parameter is optional and can't be zero or negative.
            If the "length" parameter is specified, it will check within the specified length counting from the beginning of the string.
        //methods return an array
        10. to search a string for a match:
            let stringName = "text1";
            const arrayName = stringName.match("text2");
            All the matches will be returned as an array.
            If no match is found, it will return "null".
        11. to convert a string to an array:
            let stringName = "text";
            const arrayName = stringName.split("separator");
            If the "separator" parameter is omitted, it will assign the whole string to the item at index[0] of the array.
            If the "separator" parameter is "", it will return an array of every single characters in the string.
            The separator can be whitespaces (" "), commas (","), pipes ("|"),..., then it will return an array of substrings separated by the specified separator.
    VI. JavaScript Global Methods:
        Global methods can be used on all data types.
        There are three most relevant methods that work with numbers and strings:
        1. to covert another data type to a number:
            let numberName = Number(value);
            The "value" parameter can be, for example,:
                true -> 1
                false -> 0
                string number -> number
            If the "value" parameter can't be converted to a number, it will return NaN.
        2. to parse a string to a number:
            a. let numberName = parseInt("text");
            This returns an integer.
            Spaces are allowed, and only the first number is returned.
            If the "text" parameter can't be converted to a number, it will return NaN.
            b. let numberName = parseFloat("text");
            This returns a float.
            Spaces are allowed, and only the first number is returned.
            If the "text" parameter can't be converted to a number, it will return NaN.
    VII. Regular Expressions
        Regular expressions are strings written without quotes.
        Some string methods accept flags:
            "/g" is used for global match
            "/i" is used for insensitive case
        https://www.w3schools.com/js/js_regexp.asp
    Full list of string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp
    SIDE NOTE:
                In some programming languages, primitive values can't have properties or methods because they are not objects. On the other hand, JavaScript treats primitive values as objects when they are executed using properties or methods.
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT IS A JAVASCRIPT ARRAY?
    Array is a non-primitive data type.
    Arrays are a special type of objects.
    Arrays are stored as a list of values which can be of any types of data, numbers, strings, arrays, objects, functions,... They can hold more than one value under one variable, and  the values can be accessed by referring to the associated index numbers.
    To declare an array:
        const arrayName = [item0, item1, item2];
    or:
        const arrayName = [];
        arrayName[0] = value0;
        arrayName[1] = value1;
        arrayName[2] = value2;
    I. Index:
        In some programming languages, arrays with named indexes are called associative arrays, or hashes.
        In JavaScript, array indexes are numbered and zero-based, which means they start with O, then 1, then 2,...
    II. Properties:
        1. to return the length of an array, which is the number of array elements,:
            let numberName = arrayName.length;
        2. to access the whole array:
            arrayName
        3. to access an array element:
            arrayName[index]
        4. to change the value of an array element:
            arrayName[index] = newValue;
        5. to append an element to an array:
            arrayName[arrayName.length] = newValue;
            Items at indexes that aren't assigned with any value will be assigned with "undefined".
        6. to delete an array element:
            delete arrayName[index];
            Instead of completely removing the array element like arrayName.pop() or arrayName.shift(), this leaves an "undefined" hole at the specified index.
    III. Methods:
        //methods return a number
        1. to find the index of an array element:
            a. let numberName = arrayName.indexOf(elementValue, start);
            This returns the index of the first occurrence.
            If the element is not found, it will return -1.
            The "start" parameter is optional.
            If the "start" parameter is positive, the search starts from the specified position, counted from the beginning of the array, to the end of the array.
            If the "start" parameter is negative, the search starts from the specified position, counted from the end of the array, to the end of the array.
            b. let numberName = arrayName.lastIndexOf(elementValue, start);
            This returns the index of the last occurrence.
            If the element is not found, it will return -1.
            The "start" parameter is optional.
            If the "start" parameter is positive, the search starts from the specified position, counted from the beginning of the array, to the end of the array.
            If the "start" parameter is negative, the search starts from the specified position, counted from the end of the array, to the beginning of the array.
        //methods return a string
        2. to convert an array to a string:
            a. let stringName = arrayName.toString();
            This returns a string of array values separated by commas.
            Because toString() is of default methods of an Array object, using either arrayName or arrayName.toString() will return the same result.
            b. let stringName = arrayName.join("separator");
            The "separator" parameter is optional.
            If the "separator" parameter is omitted, it will behave like arrayName.toString().
            If the "separator" parameter is specified, it will return a string of array values separated by specified separator.
            The separator can be whitespaces (" "), commas (","), pipes ("|"),...
        //methods return a boolean
        3. to check whether an element is present in an array:
            let variableName = arrayName.includes(elementValue);
        //methods return an array or an array-related value
        4. to add/remove an element to/from an array:
            4.1 pushing and popping:
                a. let numberName = arrayName.push(value);
                This pushes a new element into the end of the array, and returns the new length of the array.
                b. let variableName = arrayName.pop();
                This pops the last element out of the array, and returns the element that is popped out.
            4.2 unshifting and shifting:
                a. let numberName = arrayName.unshift(value);
                This pushes a new element into the beginning of the array, and returns the new length of the array.
                The old indexes have to shift according to the added element.
                b. let variableName = arrayName.shift();
                This pops the first element out of the array, and returns the element that is shifted out.
                The old indexes have to shift according to the removed element.
            4.3 splicing:
                const arrayName2 = arrayName1.splice(whereToAdd, howManyRemoved, value1, value2);
                This can be used to either add or remove one or more elements, and returns an array of removed elements.
                The "whereToAdd" parameter specifies the index where new elements should be added. It can't be negative.
                The "howManyRemoved" parameter specifies how many elements should be removed. It can't be negative.
                The "value" parameters are optional. If the "value" parameters are omitted, no element is added. If the "value" parameters are specified, more than one element can be added.
        5. to extract a part of an array:
            const arrayName2 = arrayName1.slice(start, end);
            If the "start" and "end" parameters are positive, the extraction counts from the beginning of the array, and the "end" position is not included.
            If the "start" and "end" parameters are negative, the extraction counts from the end of the array, and the "end" position is not included.
            If only one parameter is specified, the extraction counts from the specified position to the rest of the array.
        6. to merge, or concatenate, another array to an array:
            const arrayName2 = arrayName1.concat(value1, value2);
            This can concatenate more than one array to an array.
            This doesn't affect the existing arrays and always returns a new array.
            SIDE NOTE:
                        This method can concatenate other data types like numbers, strings,... to the array.
        7. to sort an array:
            7.1 string sort:
                a. in ascending order:
                arrayName.sort()
                This sorts the array alphabetically.
                b. in descending order:
                arrayName.reverse()
                This reverses the array.
                combining
                    arrayName.sort(); 
                    arrayName.reverse();
                or
                    arrayName.sort().reverse();
                This sorts the array reverrse-alphabetically.
            7.2 numeric sort:
                a. alphabetically:
                arrayName.sort() 
                b. numerically:
                A compare function is used to define an alternative numeric sort order.
                    b.1 in ascending order:
                    arrayName.sort(
                        function(a, b) {
                            return a - b;
                        }
                    )
                    If it returns negative, "a" < "b", so "a" is sorted before "b".
                    If it returns zero, "a" = "b", so no changes are made.
                    If it returns positive, "a" > "b", so "b" is sorted before "a".
                    b.2 in descending order:
                    arrayName.sort(
                        function(a, b) {
                            return b - a;
                        }
                    )
                    If it returns negative, "a" > "b", so "a" is sorted before "b".
                    If it returns zero, "a" = "b", so no changes are made.
                    If it returns positive, "a" < "b", so "b" is sorted before "a".
                c. randomly:
                    arrayName.sort(
                        function() {
                            return 0.5 - Math.random();
                        }
                    )
                A better way is to use the Fisher Yates method:
                    const arrayName = [item0, item1, item2];
                    for (let i = arrayName.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * i);
                        let k = points[i];
                        points[i] = points[j];
                        points[j] = k;
                    }
            7.3 object sort:
                const arrayName = [
                    {stringName:"stringValue", numberName:numberValue},
                    {stringName:"stringValue", numberName:numberValue},
                    {stringName:"stringValue", numberName:numberValue}
                ];
                a. in ascending order:
                    a.1 comparing properties with string values:
                    arrayName.sort(
                        function(a, b) {
                            let x = a.stringName.toLowerCase();
                            let y = b.stringName.toLowerCase();
                            if (x < y) {
                                return -1;
                            }
                            if (x > y) {
                                return 1;
                            }
                            return 0;
                        }
                    )
                    a.2 comparing properties with number values:
                    arrayName.sort(
                        function(a, b) {
                            return a.numberName - b.numberName;
                        }
                    )
                b. in descending order:
                    b.1 comparing properties with string values:
                    arrayName.sort(
                        function(a, b) {
                            let x = a.stringName.toLowerCase();
                            let y = b.stringName.toLowerCase();
                            if (x > y) {
                                return -1;
                            }
                            if (x < y) {
                                return 1;
                            }
                            return 0;
                        }
                    )
                    b.2 comparing properties with number values:
                    arrayName.sort(
                        function(a, b) {
                            return b.numberName - a.numberName;
                        }
                    )
            7.4 to find the lowest/highest value in an array:
                a. sorting in ascending order:
                let lowestValue = arrayName[0];
                let highestValue = arrayName[arrayName.length-1];
                b. sorting in descending order:
                let highestValue = arrayName[0];
                let lowestValue = arrayName[arrayName.length-1];
                c. using Math object:
                    This only works with number values.
                    c.1 to find the lowest:
                    const arrayName = [item0, item1, item2];
                    let lowestValue = Math.min(item0, item1, item2);
                    This can find the lowest value in the list, but can't accept array parameter.
                    let lowestValue = Math.min.apply(null, arrayName);
                    This can find the lowest value in the array, but can only accept array parameter.
                    c.2 to find the highest:
                    const arrayName = [item0, item1, item2];
                    let highestValue = Math.max(item0, item1, item2);
                    This can find the highest value in the list, but can't accept array parameter.
                    let highestValue = Math.max.apply(null, arrayName);
                    This can find the highest value in the array, but can only accept array parameter.
        //array iteration
        8. to loop through an array:
            const arrayName = [item0, item1, item2];
            let text = "<ul>";
            for (let i = 0; i < arrayName.length; i++) {
                text += "<li>" + arrayName[i] + "</li>";
            }
            text += "</ul>";
        9. to operate a function on every array element:
            A callback function is a function called in an array iteration to perform a task on every array element. 
            function functionName(total, value, index, array) {
                task;
            }
            It can take up to four parameters "total", "value", "index", and/or "array" depending on the functionality.
                -"total": is the total/the initial value/the previously returned value
                -"value": is the item's value
                -"index": is the item's index
                -"array": is the array itself
            The parameter names are "reserved" for this purpose.
            a. arrayName.forEach(functionName);
            function functionName(value, index, array) {
                task;
            }
            This method itself doesn't return any value.
            b. const arrayName2 = arrayName1.map(functionName);
            function functionName(value, index, array) {
                task;
                return result;
            }
            This method returns a new array of values returned from the task execution.
            The "value" parameter is required.
            c. const arrayName2 = arrayName1.filter(functionName);
            function functionName(value, index, array) {
                task;
                return result;
            }
            This method returns a new array of values returned from only passing some sort of conditions.
            d. let variableName = arrayName.every(functionName);
            function functionName(value, index, array) {
                task;
                return result;
            }
            This method returns a boolean value of whether all of the array elements pass some sort of conditions.
            e. let variableName = arrayName.some(functionName);
            function functionName(value, index, array) {
                task;
                return result;
            }
            This method returns a boolean value of whether some (at least 1) of the array elements pass some sort of conditions.
            f. let variableName = arrayName.find(functionName);
            function functionName(value, index, array) {
                task;
                return result;
            }
            This method returns the value of the first array element that passes some sort of conditions.
            g. let variableName = arrayName.findIndex(functionName);
            function functionName(value, index, array) {
                task;
                return result;
            }
            This method returns the index of the first array element that passes some sort of conditions.
            h. 
                h.1 to operate from left to right:
                let variableName = arrayName.reduce(functionName, initialValue);
                h.2 to operate from right to left:
                let variableName = arrayName.reduceRight(functionName, initialValue);
            function functionName(total, value, index, array) {
                task;
                return result;
            }
            This method reduces the array to produce a single value, but doesn't affect the original array.
            The "initialValue" parameter is optional. If it is omitted, the initial value of the "total" parameter is 0. If it is specified, the initial value of the "total" parameter is the specified value.
        //special array methods
        10. to return an array from any object that is either iterable or with a length property:
            const arrayName = Array.from(value);
        11. to return an Array Iterator Object containing all the array indexes:
            const arrayName = [item0, item1, item2];
            const variableName = arrayName.keys();
            let text = "";
            for (let x of variableName) {
                text += x + "<br>";
            }
        12. to return an Array Iterator Object containing all the array index/value pairs:
            const arrayName = [item0, item1, item2];
            const variableName = arrayName.entries();
            let text = "";
            for (let x of variableName) {
                text += x + "<br>";
            }
    SIDE NOTE:
                While arrays use numbers, or numbered indexes, to access their elements, objects use names, or named indexes, to access their memebers. Therefore, although typeof array is object, it is still best described as array.
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT IS A JAVASCRIPT OBJECT?
    Object is a non-primitive data type.
    An object may have properties, which are attributes representing the characteristic of the object, and methods, which are functions representing the behavior/action of the object. Many objects can have the same properties and methods, but the property values might differ, and the methods might perform differently.
    To declare an object:
        const objectName = {name0:value0, name1:value1, name2:value2};
    I. Properties:
        To define an object property:
            propertyName:propertyValue
        To access an object method:
            1. objectName.propertyName
            2. objectName["propertyName"]
    II. Methods:
        To define an object method:
            methodName:function() {
                task;
            }
        To access an object method:
            objectName.methodName()
    SIDE NOTE:
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT ARE JAVASCRIPT EVENTS?
    Events are things that happen to the elements of the Web page.
    EX:
        An HTML Web page has finished loading.
        An HTML button was clicked.
        An HTML input field was changed.
    When JavaScript is used in the Web page, it can react on those events.
    When an event is detected, JavaScript will execute the code.
    HTML allows event handler attributes which are assigned with JavaScript code to be added to its elements.
        <starting-tag event-attribute="JavaScript-code"> content </closing-tag>
    Some HTML event handler attributes are:
        onchange
        onclick
        onmouseover
        onmouseout
        onkeydown
        onload
    JavaScript event handlers: https://www.w3schools.com/jsref/dom_obj_event.asp

WHAT ARE JAVASCRIPT TYPES OF SCOPE?
    1. Global Scope
    2. Function Scope
    3. Block Scope:
    Variables which are defined with a block scope when declared within a code block can only be accessed from inside the code block and will be independent from outside the code block.

HOW CAN JAVASCRIPT DISPLAY DATA?
    JavaScript can display data in four different ways:
        1. document.getElementId("HTML-element-id")
        document.getElementId("HTML-element-id"): is a method to access the HTML element via the id attribute which defines the HTML element.
        innerHTML: is a property that can be used with this method to define the HTML content.
        HTML-attribute: is a property that can be used with this method to change HTML attribute values.
        style.CSS-property: is a property that can be used with this method to change HTML element style with CSS property.
        2. document.write(content)
        This method should be used for testing only. If it is used after the HTML page is loaded, it will overwrite/delete all existing HTML content.
        3. window.alert(content)
        The content will be shown in an alert box of the Web browser.
        The window object has a globel scope. All variables, properties, and methods belong to the window object by default. Therefore, specifying the "window" keyword is optional.
        4. console.log(content)
        The content will be shown only in the console.
        This method is used for debugging.
        5. window.print()
        JavaScript doesn't have any object or methods to get access to output devices like HTML does.
        This method is the only exception that JavaScript can access the output device, which prints the content of the current window.
*/

console.log("Hello World");