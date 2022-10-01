/*
SOURCE: https://youtu.be/lI1ae4REbFM

WHAT IS JAVASCRIPT?
    JavaScript is of the key programming languages of the Web. While HTML defines the content of the Web page and CSS specifies the layout of the Web page, JavaScript programs the behavior of the Web page.

WHERE CAN JAVASCRIPT FILE BE PLACED?
    JavaScript is the default scripting language in HTML.
    There are two ways to place JavaScript code, or script,:
        1. Within the HTML page:
            Script can be specified between <script> tags, that are placed either at the end of <head> or at the end of <body>.
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
    The set of rules of how programs in that language are constructed is its syntax.
    JavaScript syntax defines two types of values:
        1. Literals:
            They are fixed values.
        2. Variables:
            They are variable values.

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
            Full reference: https://www.w3schools.com/js/js_arithmetic.asp
        2. String Operator:
            Concatenation operator (+) is used to concatenate strings.
            If the operation is performed between a number and a string, it will return a string.
            SIDE NOTE:
                        The computer evaluates expressions from left to right until it returns the final string.
        3. Comparison, Logical, and Conditional Operators:
            Comparison and logical operators are used to test for true or false so as to take action depending on the results.
            Comparison operators (== === != !== > >= < <=) are used in conditional statements to determine equality or difference between values.
            Logical operators (&& || !) are used to determine the logic between values.
            Conditional operator, or Ternary operator, is used to assign a value to a variable based on some conditions.
                let variableName = (condition) ? value1 : value2;
            Full reference: https://www.w3schools.com/js/js_comparisons.asp
        4. Type Operator:
            TypeOf operator (typeof) is used to return the data type of a variable or an expression.
                typeof a number returns number
                typeof a string returns string
                typeof a boolean returns boolean
                typeof an array returns object
                typeof an object returns object
                typeof a function returns function
                typeof a null returns object
                typeof an undefined returns undefined
                typeof a NaN returns number
            Full reference: https://www.w3schools.com/js/js_type_conversion.asp
        5. Bitwise Operators:
            Full reference: https://www.w3schools.com/js/js_bitwise.asp
        6. Assignment Operators:
            Assignment operator (= += -= *= /= %= **=) is used to assign a value to a variable.
            Full reference: https://www.w3schools.com/js/js_assignment.asp
        7. Unary Operator:
            Unary operator (+) is used to convert another date type to a number.
    IV. Values:
        A value can be assigned to a variable either when or after the variable is declared. 
        If the variable is declared without a value, both of its value and data type will be "undefined".
    V. Data Types:
        JavaScript data types are dynamic because the same variable can hold different data types.
        There are five data types that can contain values:
            number
            string
            boolean
            object
            function
        There are two data types that can't contain values:
            null
            undefined
        There are six types of object:
            Object
            Date
            Number
            String
            Boolean
            Array
        There are four primitive data type:
            number
            string
            boolean
            undefined
        There are two complex data types:
            function
            object

WHAT IS A JAVASCRIPT FUNCTION?
    In a programming langguage, a function is a code block designed to perform a particular task and compute a return value.
    To declare a function:
        function functionName(parameter1, parameter2, parameter3) {
            action to be executed;
        }
    The parentheses () may or may not include a comma-separated parameter list.
    All variables declared in the function definition including the parameters will behave as local variables.
    The parentheses () works as an operator that specifies the result of the function (to be returned). Without the parentheses (), the call will return the function definition.
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
            123456789 = 1.23456789e+8
            0.00123456789 = 1.23456789e-3
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
        3. to represent Infinity, or -Infinity, that is returned on overflow,:
            let numberName = Number.POSITIVE_INFINITY;
            let numberName = Number.NEGATIVE_INFINITY;
        5. to specify an illegal number:
            let numberName = Number.NaN;
    VI. Methods:
        1. to return a number as a string:
            let stringName = numberName.toString();
        2. to return a number as a number:
                let numberName2 = numberName1.valueOf();
            Ultimately, this can convert a Number object to a primitive number.
        3. to return a number in scientific notation, or exponential notation,:
            let stringName = numberName.toExponential(decimal),
            The number might be rounded if neccessary.
            The "decimal" parameter specifies the number of characters behind the decimal point. It is optional and can't be negative. If the "decimal" parameter is omitted, the number won't be rounded.
        4. to round a number:
            a. let stringName = numberName.toFixed(decimal);
                The "decimal" parameter specifies the number of characters behind the decimal point. It is optional and can't be negative. If the "decimal" parameter is omitted, it will be specified as 0, that means the number is rounded as a whole number.
            b. let stringName = numberName.toPrecision(digit);
                The "digit" parameter specifies the number of digits, or the length of the number. It is optional and can't be zero or negative. If the "digit" parameter is omitted, the number remains unchanged.
    VII. JavaScript Global Methods (that returns numbers):
        1. to convert another data type to a number:
            let numberName = Number(value);
            The "value" parameter can be, for example,:
                numeric string -> number
                empty string"" -> 0
                true -> 1
                false -> 0
            If the "value" parameter can't be converted to a number, it will return NaN.
            SIDE NOTE:
                        There is a similarity between Number() method and unary operator.
                            Number() method:
                                let numberName = Number(value);
                            Unary operator:
                                let numberName = + value;
        2. to parse a string to a number:
            a. let numberName = parseInt("text");
                This returns an integer.
                Spaces are allowed, and only the first number is returned.
                If the "text" parameter can't be converted to a number, it will return NaN.
            b. let numberName = parseFloat("text");
                This returns a float.
                Spaces are allowed, and only the first number is returned.
                If the "text" parameter can't be converted to a number, it will return NaN.
    Full list of number reference: https://www.w3schools.com/jsref/jsref_obj_number.asp
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
            variable substitution: ${variableName}
            expression substitution: ${expression}
    II. Escape Character:
        The backslash (\) escape character is used to avoid misunderstanding of special characters in a string.
            \character
            EX: 
                \' to insert a single quote
                \" to insert a double quote
                \\ to insert a backslash
    III. Regular Expressions
        A regular expression is a sequence of characters, like strings written without quotes, that forms a search pattern that can be used for text search and text replacement operations.
            /pattern/
        1. Properties:
            a. Modifiers:
                This can be used to perform case-insensitive matching, global match, or multiline matching,...
                    /pattern/modifier   
                /pattern/i: for case-insensitive matching
                /pattern/g: for global match
                /pattern/m: for multiline matching
            b. Brackets:
                This can be used to find a range of characters.
                    /[character]/modifier
                /[xyz]/g: to find all characters specified in the brackets
                /[x-y]/g: to find all digits specified from x to y
                /(x|y)/g: to find all the alternatives separated with the pipe
            c. Metacharacters:
                This specifies characters with a special meaning.
                    /\metacharacter/modifier
                /\d/g: to find all the digits
                /\s/g: to find all whitespaces
                /\bword/i: to find the index of the character before the specified word
                /word\b/i: to find the index of the specified word
                /\uxxxx/g: to find all the Unicode characters specified by the hexadecimal number "xxxx"
            d. Quantifiers:
                This defines quantities.
                    /quantifier/modifier
                Full reference: https://www.w3schools.com/js/js_regexp.asp
        2. Methods:
            a. regular expression as an argument:
                a.1 stringName.search(regular expression);
                a.2 stringName.replace(regular expression);
                a.3 stringName.match(regular expression);
            b. regular expression as an object:
                The RegExp object is a regular expression object with predefined properties and methods.
                b.1 to check if there is any match of a specified pattern in a string:
                    const variableName = /pattern/;
                    let booleanName = variableName.test("text");
                b.2 to return the match of a specified pattern in a string:
                        const variableName = /pattern/;
                        const objectname = variableName.exec("text");
                    If no match is found, it will return an empty object (null).
        Full reference: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    IV. Index:
        In JavaScript, string indexes are zero-based, that means they start with O, then 1, then 2,...
    V. Properties:
        to return the length of a string:
            let numberName = stringName.length;
    VI. Methods:
        Strings are immutable, that means they can't be affected, changed or replaced.
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
    VII. JavaScript Global Methods (that returns strings):
        to convert anpther data type to a string:
            let stringName = String(value);
        The "value" parameter can be, for example,:
                number -> numeric string
                true -> "true"
                false -> "false"
    Full list of string reference: https://www.w3schools.com/jsref/jsref_obj_string.asp
    SIDE NOTE:
                In some programming languages, primitive values can't have properties or methods because they are not objects. On the other hand, JavaScript treats primitive values as objects when they are executed using properties or methods.
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT ARE JAVASCRIPT BOOLEANS?
    Boolean is a primitive data type.
    A boolean represents one of two values: true or false / yes or no / on or off.
    I. Properties:
        Everything with a value is true.
        Everything without a value is false.
            Boolean(0) = false
            Boolean("") = false
            Boolean(undefined) = false
            Boolean(null) = false
            Boolean(NaN) = false
    II. Methods:
        to determine if a variable or an expression is true or false:
            let booleanName = Boolean(variable/expression);
        or in a simplier way:
            let booleanName = variable/expression;
    Full list of boolean reference: https://www.w3schools.com/jsref/jsref_obj_boolean.asp
    SIDE NOTE:
                In some programming languages, primitive values can't have properties or methods because they are not objects. On the other hand, JavaScript treats primitive values as objects when they are executed using properties or methods.
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT IS A JAVASCRIPT ARRAY?
    Array is a non-primitive data type.
    Arrays are a special type of objects.
    Arrays are stored as a list of values that can be of any types of data, numbers, strings, arrays, objects, functions,... They can hold more than one value under one variable, and  the values can be accessed by referring to the associated index numbers.
    To declare an array:
        const arrayName = [item0, item1, item2];
    or:
        const arrayName = [];
        arrayName[0] = value0;
        arrayName[1] = value1;
        arrayName[2] = value2;
    I. Index:
        In some programming languages, arrays with named indexes are called associative arrays, or hashes.
        In JavaScript, array indexes are numbered and zero-based, that means they start with O, then 1, then 2,...
    II. Properties:
        1. to return the length of an array, that is the number of array elements,:
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
                    arrayName.sort();
                    This sorts the array alphabetically.
                b. in descending order:
                    arrayName.reverse();
                    This reverses the array.
                    combining
                        arrayName.sort(); 
                        arrayName.reverse();
                    or
                        arrayName.sort().reverse();
                    This sorts the array reverrse-alphabetically.
            7.2 numeric sort:
                a. alphabetically:
                    arrayName.sort();
                b. numerically:
                    A compare function is used to define an alternative numeric sort order.
                    b.1 in ascending order:
                        arrayName.sort(
                            function(a, b) {
                                return a - b;
                            }
                        );
                        If it returns negative, "a" < "b", so "a" is sorted before "b".
                        If it returns zero, "a" = "b", so no changes are made.
                        If it returns positive, "a" > "b", so "b" is sorted before "a".
                    b.2 in descending order:
                        arrayName.sort(
                            function(a, b) {
                                return b - a;
                            }
                        );
                        If it returns negative, "a" > "b", so "a" is sorted before "b".
                        If it returns zero, "a" = "b", so no changes are made.
                        If it returns positive, "a" < "b", so "b" is sorted before "a".
                c. randomly:
                        arrayName.sort(
                            function() {
                                return 0.5 - Math.random();
                            }
                        );
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
                        );
                    a.2 comparing properties with number values:
                        arrayName.sort(
                            function(a, b) {
                                return a.numberName - b.numberName;
                            }
                        );
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
                        );
                    b.2 comparing properties with number values:
                        arrayName.sort(
                            function(a, b) {
                                return b.numberName - a.numberName;
                            }
                        );
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
        8. to operate a function on every array element:
            A callback function is a function called in an array iteration to perform a task on every array element. 
                function functionName(total, value, index, array) {
                    action to be executed;
                }
            It can take up to four parameters "total", "value", "index", and/or "array" depending on the functionality.
                -"total": is the total/the initial value/the previously returned value
                -"value": is the item's value
                -"index": is the item's index
                -"array": is the array itself
            The parameter names are "reserved" for this purpose.
            a. arrayName.forEach(functionName);
                function functionName(value, index, array) {
                    action to be executed;
                }
                This method itself doesn't return any value.
            b. const arrayName2 = arrayName1.map(functionName);
                function functionName(value, index, array) {
                    action to be executed;
                    return result;
                }
                This method returns a new array of values returned from the task execution.
                The "value" parameter is required.
            c. const arrayName2 = arrayName1.filter(functionName);
                function functionName(value, index, array) {
                    action to be executed;
                    return result;
                }
                This method returns a new array of values returned from only passing some sort of conditions.
            d. let variableName = arrayName.every(functionName);
                function functionName(value, index, array) {
                    action to be executed;
                    return result;
                }
                This method returns a boolean value of whether all of the array elements pass some sort of conditions.
            e. let variableName = arrayName.some(functionName);
                function functionName(value, index, array) {
                    action to be executed;
                    return result;
                }
                This method returns a boolean value of whether some (at least 1) of the array elements pass some sort of conditions.
            f. let variableName = arrayName.find(functionName);
                function functionName(value, index, array) {
                    action to be executed;
                    return result;
                }
                This method returns the value of the first array element that passes some sort of conditions.
            g. let variableName = arrayName.findIndex(functionName);
                function functionName(value, index, array) {
                    action to be executed;
                    return result;
                }
                This method returns the index of the first array element that passes some sort of conditions.
            h. 
                h.1 to operate from left to right:
                    let variableName = arrayName.reduce(functionName, initialValue);
                h.2 to operate from right to left:
                    let variableName = arrayName.reduceRight(functionName, initialValue);
                function functionName(total, value, index, array) {
                    action to be executed;
                    return result;
                }
                This method reduces the array to produce a single value, but doesn't affect the original array.
                The "initialValue" parameter is optional. If it is omitted, the initial value of the "total" parameter is 0. If it is specified, the initial value of the "total" parameter is the specified value.
        //special array methods
        9. to return an array from any object that is either iterable or with a length property:
            const arrayName = Array.from(value);
        10. to return an Array Iterator Object containing all the array indexes:
            const arrayName = [item0, item1, item2];
            const variableName = arrayName.keys();
            let text = "";
            for (let x of variableName) {
                text += x + "<br>";
            }
        11. to return an Array Iterator Object containing all the array index/value pairs:
            const arrayName = [item0, item1, item2];
            const variableName = arrayName.entries();
            let text = "";
            for (let x of variableName) {
                text += x + "<br>";
            }
    Full list of array reference: https://www.w3schools.com/jsref/jsref_obj_array.asp
    SIDE NOTE:
                While arrays use numbers, or numbered indexes, to access their elements, objects use names, or named indexes, to access their memebers. Therefore, although typeof array is object, it is still best described as array.
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT IS A JAVASCRIPT OBJECT?
    Object is a non-primitive data type.
    An object may have properties, that are attributes representing the characteristic of the object, and methods, that are functions representing the behavior/action of the object. Many objects can have the same properties and methods, but the property values might differ, and the methods might perform differently.
    to declare an object:
        const objectName = {name0:value0, name1:value1, name2:value2};
    I. Properties:
        to define an object property:
            propertyName:propertyValue
        to access an object method:
            1. objectName.propertyName
            2. objectName["propertyName"]
    II. Methods:
        to define an object method:
            methodName:function() {
                action to be executed;
            }
        to access an object method:
            objectName.methodName()
    III. Date Object:
        The Date object lets you work with date and time.
            const variableName = new Date();
        This returns the current date and time according to the Web browser's time zone; in other words, the result might vary because the computer date is relative to your time zone.
        1. Numeric Date Input:
                const variableName = new Date(year, month, date, hour, minute, second, millisecond);
            The constructor can take up to 7 parameters. 
            The parameters are optional. If the parameters are specified, it will return the date and time as specified. 
            The "month" parameter is specified from 0 to 11.
            The "date" parameter is specified from 1 to 31.
            The "hour" parameter is specified from 0 to 23.
            The "minute" parameter is specified from 0 to 59.
            The "second" parameter is specified from 0 to 59.
            The "millisecond" parameter is specified from 0 to 999.
            SIDE NOTE:
                        In case of weekdays, the "day" parameter is specified from 0 to 6, where 0 is Sunday and 6 is Saturday.
            Specifying the parameters out of their "normal" range will not result in error but will add/deduct the overflow to the next/previous period of time.
        2. String Date Input:
                const variableName = new Date("date string");
            The constructor can also take date string type of parameter.
            There are three types of date string inputs:
                a. ISO Date, or ISO 8601,:
                        const variableName = new Date("yyyy-mm-dd");
                    or
                        const variableName = new Date("yyyy-mm-ddThour:minute:secondZ");
                    The date and time parameters are separated by capital "T". 
                    UTC is defined by capital "Z".
                b. Short Date: 
                    const variableName = new Date("mm/dd/yyyy");
                c. Long Date:
                        const variableName = new Date("mmm dd yyyy");
                    or
                        const variableName = new Date("dd mmm yyyy");
                    The "month" paramter can be written in full or abbreviated.
        3. Date Ouput:
            Date output is indepenedent of Date input.
            By default, date is returned in full text string format.
                WeekDay Month Date Year hour:minute:second GMT-xxxx (Eastern Daylight Time)
            There are other types of date ouput methods:
                a. variableName.toString():
                    This has the same output as variableName alone.
                b. variableName.toUTCString():
                    This returns date in UTC standard format.
                        WeekDay, dd mmm yyyy hour:minute:second GMT
                c. variableName.toDateString():
                    This returns date in a more readable date string format.
                        WeekDay mmm dd yyyy
                d. variableName.toISOString():
                    This returns date in ISO standard format.
                        yyyy-mm-ddThour:minute:secondZ
        4. Date Conversion:
            Dates are stored as number of milliseconds since Zero Time.
                Jan 01, 1970 00:00:00 UTC (Universal Time Coordinated)
            a. to convert from date to milliseconds:
                let variableName = Date.parse("date string");
            b. to convert from milliseconds to date:
                const variableName = new Date(millisecond);
            c. to convert date to a number:
                let numberName = Number(new Date());
            d. to convert date to a string:
                let stringName = String(Date());
        5. Date Methods:
            Full list of get Date methods: https://www.w3schools.com/js/js_date_methods.asp
            Full list of set Date methods: https://www.w3schools.com/js/js_date_methods_set.asp
            Full list of Date reference: https://www.w3schools.com/jsref/jsref_obj_date.asp
    IV. Math Object:
        The Math object lets you perform mathematical tasks on numbers.
        The Math object has no constructor; therefore, it is static, and its properties and methods can be accessed without declaring the object.
        1. Math Properties:
            There are 8 mathematical constants that can be accessed as Math properties:
                a. Math.E
                b. Math.PI
                c. Math.SQRT2
                d. Math.SQRT1_2
                e. Math.LN2
                f. Math.LN10
                g. Math.LOG2E
                h. Math.LOG10E
        2. Math Methods:
            Full list of Math reference: https://www.w3schools.com/jsref/jsref_obj_math.asp
    SIDE NOTE:
                Try to avoid using "String", "Number", "Boolean", or "Array" object to declare a variable, as it will complicate the code and slow down the execution speed.

WHAT ARE JAVASCRIPT CONDITIONAL STATEMENTS?
    Conditional statements are used to perform different actions based on different conditions.
    I. If Statement:
        if (condition) {
            action to be executed if condition is true
        }
    II. Else If Statement:
        else if (condition) {
            action to be executed if the previous condition is false and the current condition is true
        }
    III. Else Statement:
        else {
            action to be executed if all previous conditions are false
        }
    IV. Switch Statement:
        This executes alternative actions in different conditions.
            switch (expression) {
                case value1:
                    action1;
                    break;
                case value2:
                    action2;
                    break;
                default:
                    defaultAction;
            }
        If multiple cases share the same action,
            switch (expression) {
                case value1:
                case value2:
                    action1;
                    break;
                case value3:
                case value4:
                    action2;
                    break;
                default:
                    defaultAction;
            }
        The "break" statement is used for stopping the execution inside the switch block and breaking out of the switch block if the matching case is found. If the "break" statement is ommitted, the next case will be executed even if the case value doesn't match the evaluation. The last case doesn't need a "break" since the execution ends there anyway.
        The "default" statement specified an action to be executed if no matching cases is found.
        If multiple cases match the evaluation, the first occurence will be executed.
        If no matching cases and no "default" are found, the program will continue to the code after the switch block. 
    SIDE NOTE:
                There is a similarity between if-else statement and conditional operator:
                    if-else statement:
                        if (condition) {
                            action to be executed if condition is true;
                        } else {
                            action to be executed if condition is false;
                        }
                    conditional operator:
                        let variableName = (condition) ? value1 : value2;

WHAT ARE JAVASCRIPT LOOPS?
    Loops are used to iterate over iterable objects to execute a code block, with a different value after every iteration.
    SIDE NOTE:
                Iterables are iterable objects, that can be iterated over with loops.
                Iterating means looping over a sequence of elements.
    I. For Loop:
            for (expression1; expression2; expression3) {
                action to be executed;
            }
        to iterate over an array:
            const arrayName = [item0, item1, item2];
            for (let i = 0; i < arrayName.length; i++) {
                action to be executed;
                use arrayName[i] to access to the values;
            }
        All three expressions are optional.
        Expression 1 declares and initializes the variable(s) used in the loop separated by comma and is executed once before the execution of the loop. If expression 1 is omitted, you have to declare and initialize the variable(s) before the loop.
            let variable1 = value1, variable2 = value2, variable3 = value3;
            for ( ; expression2; expression3) {
                action to be executed;
            }
        Expression 2 specifies the condition for the iteration. If expression 2 is omitted, you have to specify the running/stopping condition inside the loop.
            for (expression1; ; expression3) {
                action to be executed;
                specify condition;
            }
        Expression 3 specifies the counter of the loop and is executed after every iteration. If expression 3 is omitted, you have to specify the counter inside the loop.
            for (expression1; expression2; ) {
                action to be executed;
                specify counter;
            }
    II. For/In Loop:
        This loops through properties of an iterable object.
        1. to iterate over an array:
                const arrayName = [item0, item1, item2];
                for (let x in arrayName) {
                    action to be executed;
                    use arrayName[x] to access to the values;
                }
            "x" specifies the array indexes; therefore, to get access to the element values, you have to use arrayName[x].
            If the index order is crucial in the execution, don't use for/in loop over an array. 
        2. to iterate over an object:
                const objectName = {name0:value0, name1:value1, name2:value2};
                for (let x in objectName) {
                    action to be executed;
                    use objectName[x] to access to the values;
                }
            "x" specifies the object properties; therefore, to get access to the property values, you have to use objectName[x].
    III. For/Of Loop:
        This loops through values of an iterable object.
        1. to iterate over a string:
                let stringname = "abcxyz";
                for (let x of stringName) {
                    action to be executed;
                    use x to access to the values;
                }
            "x" specifies the values of the string characters, so "x" can be used directly to access to the values.
        2. to iterate over an array:
                const arrayName = [item0, item1, item2];
                for (let x of arrayName) {
                    action to be executed;
                    use x to access to the values;
                }
            "x" specifies the values of the array elements, so "x" can be used directly to access to the values.
    IV. While Loop:
        This executes a code block based on some conditions.
            while (condition) {
                action to be executed;
            }
        This checkes the condition before executing the code.
        There is a chance that the code won't be executed at all if the condition is false in the first time.
        As long as the condition is true, the execution goes on.
    V. Do/While Loop:
        This executes a code block based on some conditions.
            do {
                action to be executed;
            } while (condition);
        This executes the code before checking the condition (in the first time only).
        The code will always be executed at least once even if the condition is false in the first time.
        As long as the condition is true, the execution goes on.

WHAT IS A JAVASCRIPT SET?
    A set is a collection of unique values, each of which can only occur once in the set.
    I. Properties:
        to return the number of elements in a set:
            let numberName = setName.size;
    II. Methods:
        1. to create a new set:
            a. to create a new set from an array:
                const setName = new Set([item0, item1, item2]);
            b. to create a new set then add values:
                const setName = new Set();
                setName.add(value0);
                setName.add(value1);
                setName.add(value2);
        2. to add a new element to a set:
                setName.add(value);
            If the added element is duplicate, only the first occurrence is saved in the set.
        3. to remove an element from a set:
            delete();
        4. to check if a value exists in a set:
            has();
        5. to invoke a callback function for each element in a set:
            const setName = new Set([item0, item1, item2]);
            setName.forEach(function(value) {
                    action to be executed;
                }
            );
        6. to return an iterable object containing all the elements in a set:
                const objectName = setName.values();
            You can use for/of loop to display the object.

WHAT IS A JAVASCRIPT MAP?
    A map holds key-value pairs, where the keys and values can be of any datatype.
    A map can remember the original insertion order of the keys.
    I. Properties:
        to return the number of elements in a map:
            let numberName = mapName.size;
    II. Methods:
        1. to create a new map:
            a. to create a new map from an array:
                const mapName = new Map([
                        [key0, value0],
                        [key1, value1],
                        [key2, value2]
                    ]
                );
            b. to create a new map then set values:
                const mapName = new Map();
                mapName.set(key0, value0);
                mapName.set(key1, value1);
                mapName.set(key2, value2);
        2. to set a key and a value for the key in a map:
            a. to add a new key-value pair to a map:
                mapName.set(key, value);
            b. to change the value of an existing key in a map:
                mapName.set(key, newValue);
        3. to get the value of a key in a map:
            let valueName = mapName.get(key);
        4. to remove an element in a map:
            mapName.delete(key);
        5. to check if a key exists in a map:
            let booleanName = mapName.has(key);
        6. to invoke a callback function for each element in a map:
            const mapName = new Map([
                    [key0, value0],
                    [key1, value1],
                    [key2, value2]
                ]
            );
            mapName.forEach(function(value, key) {
                    action to be executed;
                }
            );
        7. to return an iterable object containing all the elements in a map:
                const objectName = mapName.entries();
            You can use for/of loop to display the object.

WHAT ARE JAVASCRIPT KEYWORDS THAT YOU SHOULD KNOW?
    I. this
    II. break;
        The "break" statement is used to jump out of, or break, a conditional statement or a loop.
        The "break" statement can be used to jump out of, or break, a code block with a label reference.
            label:
                statement;
        or
            label: {
                code block;
            }
    III. continue;
        The "continue" statement is used to jump over one iteration and continue with the next iteration of a loop.

WHAT ARE JAVASCRIPT TYPES OF SCOPE?
    1. Global Scope
    2. Function Scope
    3. Block Scope:
        Variables that are defined with a block scope when declared within a code block can only be accessed from inside the code block and will be independent from outside the code block.

WHAT IS JAVASCRIPT ERROR HANDLING?
    When executing code, different errors might occur due to different reasons.
    I. Error Object:
        JavaScript has a built-in Error object that provides error information when errors occur.
        Properties:
            1. let stringName = err.name;
                This can set or return an error name.
            2. let stringName = err.message;
                This can set or return an error message.
            3. let stringName = err;
                This returns both error name and message.
        Full reference: https://www.w3schools.com/jsref/jsref_obj_error.asp
    II. Error Handlers:
        1. Try-Catch Statement:
            try {
                code block defined to be tested for errors while being executed;
            } catch(err) {
                code block defined to handle errors that might occur in the try block;
            }
        2. Throw Statement:
            Throw an exception, or throw an error, means when an error occurs, JavaScript will stop and generate an error message.
            This allows you to create and throw a custom exception, or error.
                try {
                    action to be executed;
                    if (condition)
                        throw "error message 1";
                    else (condition)
                        throw "error message 2";
                } catch (err) {
                    action to be executed if error occurs;
                }
            The "error message" can be a Number, String, Boolean, or an Object.
        3. Finally Statement:
            try {
                action to be executed;
            } catch(err) {
                action to be executed if error occurs;
            } finally {
                code block defined to be executed regardless of the result;
            }

WHAT ARE JAVASCRIPT EVENTS?
    Events are things that happen to the elements of the Web page.
    EX:
        An HTML Web page has finished loading.
        An HTML button was clicked.
        An HTML input field was changed.
    When JavaScript is used in the Web page, it can react on those events.
    When an event is detected, JavaScript will execute the code.
    HTML allows event handler attributes that are assigned with JavaScript code to be added to its elements.
        <starting-tag event-handler-attribute="script-code"> content </closing-tag>
    Some HTML event handler attributes are:
        onchange
        onclick
        onmouseover
        onmouseout
        onkeydown
        onload
    Full reference of event handlers: https://www.w3schools.com/jsref/dom_obj_event.asp

HOW CAN JAVASCRIPT DISPLAY DATA?
    JavaScript can display data in four different ways:
        1. document.getElementById("HTML-element-id");
            This is used to access the HTML element via the id attribute that defines the HTML element.
            a. document.getElementById("HTML-element-id").innerHTML;
                This can change the HTML content.
            b. document.getElementById("HTML-element-id").HTML-attribute;
                This can change HTML attribute values.
            c. document.getElementById("HTML-element-id").style.CSS-property;
                This can change the styling of HTML element with CSS property.
            d. document.getElementById("HTML-element-id").value;
                This can access the input value of the input tag.
        2. document.write(content);
            This should be used for testing only. If it is used after the HTML page is loaded, it will overwrite/delete all existing HTML content.
        3. window.alert(content);
            The content will be shown in an alert box of the Web browser.
            SIDE NOTE:
                        The window object has a globel scope. All variables, properties, and methods belong to the window object by default. Therefore, specifying the "window" keyword is optional.
        4. console.log(content);
            The content will be shown only in the console.
            This is used for debugging.
        5. window.print();
            JavaScript doesn't have any object or methods to get access to output devices like HTML does.
            This is the only exception that JavaScript can access the output device, that prints the content of the current window.
            SIDE NOTE:
                        The window object has a globel scope. All variables, properties, and methods belong to the window object by default. Therefore, specifying the "window" keyword is optional.
*/

console.log(Date());