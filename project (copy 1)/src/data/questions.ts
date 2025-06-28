import { Question } from '../types/quiz';

export const questions: Question[] = [
  // Beginner Level Questions
  {
    id: 1,
    question: "What is the correct way to create a variable in Python?",
    options: [
      "var x = 5",
      "x = 5",
      "int x = 5",
      "declare x = 5"
    ],
    correctAnswer: 1,
    explanation: "In Python, you create a variable by simply assigning a value to it using the '=' operator. Python is dynamically typed, so you don't need to declare the variable type.",
    difficulty: 'beginner'
  },
  {
    id: 2,
    question: "Which of the following is used to add comments in Python?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "# This is a comment",
      "/* This is a comment */"
    ],
    correctAnswer: 2,
    explanation: "In Python, single-line comments start with the '#' symbol. Everything after '#' on that line is ignored by the Python interpreter.",
    difficulty: 'beginner'
  },
  {
    id: 3,
    question: "What is the output of print(type(5))?",
    options: [
      "<class 'int'>",
      "<class 'number'>",
      "<class 'integer'>",
      "int"
    ],
    correctAnswer: 0,
    explanation: "The type() function returns the class type of the object. For integer 5, it returns <class 'int'>.",
    difficulty: 'beginner'
  },
  {
    id: 4,
    question: "Which operator is used for exponentiation in Python?",
    options: [
      "^",
      "**",
      "exp",
      "pow"
    ],
    correctAnswer: 1,
    explanation: "In Python, the '**' operator is used for exponentiation. For example, 2**3 equals 8.",
    difficulty: 'beginner'
  },
  {
    id: 5,
    question: "What is the correct way to create a list in Python?",
    options: [
      "list = (1, 2, 3)",
      "list = [1, 2, 3]",
      "list = {1, 2, 3}",
      "list = <1, 2, 3>"
    ],
    correctAnswer: 1,
    explanation: "Lists in Python are created using square brackets []. Parentheses create tuples, curly braces create sets or dictionaries.",
    difficulty: 'beginner'
  },
  {
    id: 6,
    question: "How do you get user input in Python?",
    options: [
      "input()",
      "get_input()",
      "read()",
      "scan()"
    ],
    correctAnswer: 0,
    explanation: "The input() function is used to get user input in Python. It returns a string by default.",
    difficulty: 'beginner'
  },
  {
    id: 7,
    question: "What does the len() function do?",
    options: [
      "Returns the length of a string only",
      "Returns the number of elements in a sequence",
      "Returns the maximum value",
      "Returns the type of object"
    ],
    correctAnswer: 1,
    explanation: "The len() function returns the number of elements in a sequence (string, list, tuple, etc.) or collection.",
    difficulty: 'beginner'
  },
  {
    id: 8,
    question: "Which of these is NOT a valid Python data type?",
    options: [
      "int",
      "float",
      "char",
      "str"
    ],
    correctAnswer: 2,
    explanation: "Python doesn't have a 'char' data type. Individual characters are just strings of length 1.",
    difficulty: 'beginner'
  },
  {
    id: 9,
    question: "What is the output of print('Hello' + 'World')?",
    options: [
      "Hello World",
      "HelloWorld",
      "Hello+World",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "String concatenation using '+' joins strings together without any separator, resulting in 'HelloWorld'.",
    difficulty: 'beginner'
  },
  {
    id: 10,
    question: "How do you create a function in Python?",
    options: [
      "function myFunc():",
      "def myFunc():",
      "create myFunc():",
      "func myFunc():"
    ],
    correctAnswer: 1,
    explanation: "Functions in Python are defined using the 'def' keyword followed by the function name and parentheses.",
    difficulty: 'beginner'
  },
  {
    id: 11,
    question: "What is the correct way to create a dictionary?",
    options: [
      "dict = [key: value]",
      "dict = (key: value)",
      "dict = {key: value}",
      "dict = <key: value>"
    ],
    correctAnswer: 2,
    explanation: "Dictionaries in Python are created using curly braces {} with key-value pairs separated by colons.",
    difficulty: 'beginner'
  },
  {
    id: 12,
    question: "Which statement is used to exit a loop prematurely?",
    options: [
      "exit",
      "break",
      "stop",
      "end"
    ],
    correctAnswer: 1,
    explanation: "The 'break' statement is used to exit or terminate a loop prematurely when a certain condition is met.",
    difficulty: 'beginner'
  },
  {
    id: 13,
    question: "What does the 'continue' statement do in a loop?",
    options: [
      "Exits the loop",
      "Skips the rest of the current iteration",
      "Starts the loop over",
      "Pauses the loop"
    ],
    correctAnswer: 1,
    explanation: "The 'continue' statement skips the rest of the current iteration and moves to the next iteration of the loop.",
    difficulty: 'beginner'
  },
  {
    id: 14,
    question: "How do you check if a key exists in a dictionary?",
    options: [
      "key.exists(dict)",
      "key in dict",
      "dict.has_key(key)",
      "dict.contains(key)"
    ],
    correctAnswer: 1,
    explanation: "You can check if a key exists in a dictionary using the 'in' operator: 'key in dict' returns True if the key exists.",
    difficulty: 'beginner'
  },
  {
    id: 15,
    question: "What is the output of print(3 == 3.0)?",
    options: [
      "True",
      "False",
      "Error",
      "None"
    ],
    correctAnswer: 0,
    explanation: "Python automatically converts types when comparing numbers. 3 (int) equals 3.0 (float), so the result is True.",
    difficulty: 'beginner'
  },
  {
    id: 16,
    question: "How do you convert a string to an integer?",
    options: [
      "integer('123')",
      "int('123')",
      "to_int('123')",
      "parse('123')"
    ],
    correctAnswer: 1,
    explanation: "The int() function converts a string representation of a number to an integer.",
    difficulty: 'beginner'
  },
  {
    id: 17,
    question: "What is the correct way to import a module in Python?",
    options: [
      "include module_name",
      "import module_name",
      "require module_name",
      "use module_name"
    ],
    correctAnswer: 1,
    explanation: "The 'import' statement is used to import modules in Python, making their functions and classes available in your program.",
    difficulty: 'beginner'
  },
  {
    id: 18,
    question: "Which method is used to add an element to the end of a list?",
    options: [
      "add()",
      "append()",
      "insert()",
      "push()"
    ],
    correctAnswer: 1,
    explanation: "The append() method adds a single element to the end of a list.",
    difficulty: 'beginner'
  },
  {
    id: 19,
    question: "What is the output of print(bool(''))?",
    options: [
      "True",
      "False",
      "Error",
      "None"
    ],
    correctAnswer: 1,
    explanation: "An empty string is considered 'falsy' in Python, so bool('') returns False.",
    difficulty: 'beginner'
  },
  {
    id: 20,
    question: "How do you create a multi-line string in Python?",
    options: [
      "Using single quotes",
      "Using double quotes",
      "Using triple quotes",
      "Using backslashes"
    ],
    correctAnswer: 2,
    explanation: "Triple quotes (''' or \"\"\") are used to create multi-line strings in Python.",
    difficulty: 'beginner'
  },

  // Easy Level Questions
  {
    id: 21,
    question: "What is the output of [1, 2, 3] * 2?",
    options: [
      "[2, 4, 6]",
      "[1, 2, 3, 1, 2, 3]",
      "[1, 2, 3, 2]",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "The * operator on lists creates a new list by repeating the original list. [1, 2, 3] * 2 creates [1, 2, 3, 1, 2, 3].",
    difficulty: 'easy'
  },
  {
    id: 22,
    question: "Which method removes and returns the last element of a list?",
    options: [
      "remove()",
      "delete()",
      "pop()",
      "extract()"
    ],
    correctAnswer: 2,
    explanation: "The pop() method removes and returns the last element of a list. You can also specify an index to pop from a specific position.",
    difficulty: 'easy'
  },
  {
    id: 23,
    question: "What does the range(5) function return?",
    options: [
      "[0, 1, 2, 3, 4]",
      "[1, 2, 3, 4, 5]",
      "A range object from 0 to 4",
      "A range object from 1 to 5"
    ],
    correctAnswer: 2,
    explanation: "range(5) returns a range object that represents numbers from 0 to 4 (5 is excluded). It's not a list but an iterable object.",
    difficulty: 'easy'
  },
  {
    id: 24,
    question: "How do you access the last element of a list named 'data'?",
    options: [
      "data[last]",
      "data[-1]",
      "data[end]",
      "data[length-1]"
    ],
    correctAnswer: 1,
    explanation: "Negative indexing allows you to access elements from the end. data[-1] gives the last element, data[-2] gives the second-to-last, etc.",
    difficulty: 'easy'
  },
  {
    id: 25,
    question: "What is the difference between '==' and 'is' operators?",
    options: [
      "No difference",
      "'==' checks value, 'is' checks identity",
      "'==' checks identity, 'is' checks value",
      "Both check identity"
    ],
    correctAnswer: 1,
    explanation: "'==' compares values for equality, while 'is' checks if two variables refer to the same object in memory (identity).",
    difficulty: 'easy'
  },
  {
    id: 26,
    question: "What does the enumerate() function do?",
    options: [
      "Counts elements in a list",
      "Returns index and value pairs",
      "Sorts a list",
      "Reverses a list"
    ],
    correctAnswer: 1,
    explanation: "enumerate() returns an iterator of tuples containing the index and value of each element in the sequence.",
    difficulty: 'easy'
  },
  {
    id: 27,
    question: "How do you create a set in Python?",
    options: [
      "set = [1, 2, 3]",
      "set = (1, 2, 3)",
      "set = {1, 2, 3}",
      "set = <1, 2, 3>"
    ],
    correctAnswer: 2,
    explanation: "Sets are created using curly braces {} with comma-separated values. Sets automatically remove duplicates and are unordered.",
    difficulty: 'easy'
  },
  {
    id: 28,
    question: "What is the output of 'hello'.upper()?",
    options: [
      "'hello'",
      "'HELLO'",
      "'Hello'",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "The upper() method converts all characters in a string to uppercase.",
    difficulty: 'easy'
  },
  {
    id: 29,
    question: "Which of these creates a tuple?",
    options: [
      "tuple = [1, 2, 3]",
      "tuple = {1, 2, 3}",
      "tuple = (1, 2, 3)",
      "tuple = <1, 2, 3>"
    ],
    correctAnswer: 2,
    explanation: "Tuples are created using parentheses () with comma-separated values. They are immutable sequences.",
    difficulty: 'easy'
  },
  {
    id: 30,
    question: "What does the split() method do?",
    options: [
      "Splits a number into digits",
      "Splits a string into a list",
      "Splits a list into strings",
      "Splits a file into lines"
    ],
    correctAnswer: 1,
    explanation: "The split() method splits a string into a list of substrings based on a delimiter (space by default).",
    difficulty: 'easy'
  },
  {
    id: 31,
    question: "How do you check the length of a string 'text'?",
    options: [
      "text.length()",
      "length(text)",
      "len(text)",
      "text.size()"
    ],
    correctAnswer: 2,
    explanation: "The len() function returns the number of characters in a string.",
    difficulty: 'easy'
  },
  {
    id: 32,
    question: "What is the result of 5 // 2?",
    options: [
      "2.5",
      "2",
      "3",
      "Error"
    ],
    correctAnswer: 1,
    explanation: "The // operator performs floor division (integer division), returning the quotient without the remainder.",
    difficulty: 'easy'
  },
  {
    id: 33,
    question: "How do you get all keys from a dictionary 'data'?",
    options: [
      "data.keys()",
      "keys(data)",
      "data.getKeys()",
      "data.allKeys()"
    ],
    correctAnswer: 0,
    explanation: "The keys() method returns a view object containing all the keys in the dictionary.",
    difficulty: 'easy'
  },
  {
    id: 34,
    question: "What does the join() method do?",
    options: [
      "Joins two lists",
      "Joins elements of a sequence into a string",
      "Joins two dictionaries",
      "Joins two files"
    ],
    correctAnswer: 1,
    explanation: "The join() method joins elements of an iterable (like a list) into a single string using the specified separator.",
    difficulty: 'easy'
  },
  {
    id: 35,
    question: "What is the output of list(range(2, 5))?",
    options: [
      "[2, 3, 4, 5]",
      "[2, 3, 4]",
      "[2, 5]",
      "[3, 4, 5]"
    ],
    correctAnswer: 1,
    explanation: "range(2, 5) creates a sequence from 2 to 4 (5 is excluded). Converting to list gives [2, 3, 4].",
    difficulty: 'easy'
  },
  {
    id: 36,
    question: "How do you reverse a list 'data' in place?",
    options: [
      "data.reverse()",
      "reverse(data)",
      "data.reversed()",
      "data[::-1]"
    ],
    correctAnswer: 0,
    explanation: "The reverse() method reverses the list in place, modifying the original list. data[::-1] creates a new reversed list.",
    difficulty: 'easy'
  },
  {
    id: 37,
    question: "What is the default parameter separator in print()?",
    options: [
      "Comma",
      "Space",
      "Tab",
      "Newline"
    ],
    correctAnswer: 1,
    explanation: "By default, print() separates multiple arguments with a space. You can change this using the 'sep' parameter.",
    difficulty: 'easy'
  },
  {
    id: 38,
    question: "How do you sort a list 'data' in ascending order?",
    options: [
      "data.sort()",
      "sort(data)",
      "data.order()",
      "data.arrange()"
    ],
    correctAnswer: 0,
    explanation: "The sort() method sorts the list in place in ascending order. Use sorted(data) to create a new sorted list.",
    difficulty: 'easy'
  },
  {
    id: 39,
    question: "What does the strip() method do?",
    options: [
      "Removes characters from the middle",
      "Removes whitespace from both ends",
      "Removes all spaces",
      "Removes special characters"
    ],
    correctAnswer: 1,
    explanation: "The strip() method removes whitespace (spaces, tabs, newlines) from the beginning and end of a string.",
    difficulty: 'easy'
  },
  {
    id: 40,
    question: "How do you check if a list is empty?",
    options: [
      "if list == []",
      "if not list",
      "if len(list) == 0",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "All three methods work: comparing to empty list, using 'not' (empty lists are falsy), or checking length equals zero.",
    difficulty: 'easy'
  },

  // Intermediate Level Questions
  {
    id: 41,
    question: "What is the output of [x**2 for x in range(5) if x % 2 == 0]?",
    options: [
      "[0, 4, 16]",
      "[0, 1, 4, 9, 16]",
      "[1, 9]",
      "[0, 2, 4]"
    ],
    correctAnswer: 0,
    explanation: "This list comprehension squares even numbers from 0 to 4. Even numbers are 0, 2, 4, so their squares are 0, 4, 16.",
    difficulty: 'intermediate'
  },
  {
    id: 42,
    question: "What does the *args parameter do in a function?",
    options: [
      "Passes keyword arguments",
      "Passes variable number of positional arguments",
      "Passes a single argument",
      "Passes default arguments"
    ],
    correctAnswer: 1,
    explanation: "*args allows a function to accept any number of positional arguments, which are collected into a tuple.",
    difficulty: 'intermediate'
  },
  {
    id: 43,
    question: "What is the difference between deep copy and shallow copy?",
    options: [
      "No difference",
      "Deep copy copies references, shallow copy copies values",
      "Shallow copy copies only first level, deep copy copies all levels",
      "Deep copy is faster than shallow copy"
    ],
    correctAnswer: 2,
    explanation: "Shallow copy creates a new object but inserts references to nested objects. Deep copy creates new objects for all nested levels.",
    difficulty: 'intermediate'
  },
  {
    id: 44,
    question: "What does the __init__ method do?",
    options: [
      "Initializes a class",
      "Initializes an instance of a class",
      "Imports a module",
      "Starts a program"
    ],
    correctAnswer: 1,
    explanation: "__init__ is the constructor method that initializes a new instance of a class when an object is created.",
    difficulty: 'intermediate'
  },
  {
    id: 45,
    question: "What is the purpose of the 'self' parameter?",
    options: [
      "To refer to the class",
      "To refer to the current instance",
      "To refer to the parent class",
      "To refer to the module"
    ],
    correctAnswer: 1,
    explanation: "'self' refers to the current instance of the class and is used to access instance variables and methods.",
    difficulty: 'intermediate'
  },
  {
    id: 46,
    question: "What does the zip() function do?",
    options: [
      "Compresses files",
      "Combines multiple iterables element-wise",
      "Filters elements",
      "Sorts elements"
    ],
    correctAnswer: 1,
    explanation: "zip() takes multiple iterables and returns an iterator of tuples, where each tuple contains elements from all iterables at the same position.",
    difficulty: 'intermediate'
  },
  {
    id: 47,
    question: "What is a generator in Python?",
    options: [
      "A function that creates classes",
      "A function that yields values one at a time",
      "A function that generates random numbers",
      "A function that creates modules"
    ],
    correctAnswer: 1,
    explanation: "A generator is a function that uses 'yield' to return values one at a time, creating an iterator that generates values on-demand.",
    difficulty: 'intermediate'
  },
  {
    id: 48,
    question: "What does the lambda keyword create?",
    options: [
      "A named function",
      "An anonymous function",
      "A class",
      "A module"
    ],
    correctAnswer: 1,
    explanation: "lambda creates anonymous (unnamed) functions, typically used for short, simple functions that can be defined inline.",
    difficulty: 'intermediate'
  },
  {
    id: 49,
    question: "What is the purpose of the map() function?",
    options: [
      "Creates dictionaries",
      "Applies a function to all items in an iterable",
      "Maps keys to values",
      "Creates navigation maps"
    ],
    correctAnswer: 1,
    explanation: "map() applies a given function to each item in an iterable and returns an iterator with the results.",
    difficulty: 'intermediate'
  },
  {
    id: 50,
    question: "What does the filter() function do?",
    options: [
      "Removes duplicates",
      "Filters elements based on a condition",
      "Sorts elements",
      "Groups elements"
    ],
    correctAnswer: 1,
    explanation: "filter() returns an iterator with elements from an iterable for which a function returns True.",
    difficulty: 'intermediate'
  },
  {
    id: 51,
    question: "What is the difference between append() and extend()?",
    options: [
      "No difference",
      "append() adds elements, extend() adds one element",
      "append() adds one element, extend() adds multiple elements",
      "extend() is faster than append()"
    ],
    correctAnswer: 2,
    explanation: "append() adds a single element to the list, while extend() adds all elements from an iterable to the list.",
    difficulty: 'intermediate'
  },
  {
    id: 52,
    question: "What does the **kwargs parameter do?",
    options: [
      "Passes positional arguments",
      "Passes keyword arguments as a dictionary",
      "Passes default arguments",
      "Passes constant arguments"
    ],
    correctAnswer: 1,
    explanation: "**kwargs allows a function to accept any number of keyword arguments, which are collected into a dictionary.",
    difficulty: 'intermediate'
  },
  {
    id: 53,
    question: "What is list slicing [start:end:step]?",
    options: [
      "Creates a new list with elements from start to end with given step",
      "Modifies the original list",
      "Sorts the list elements",
      "Reverses the list"
    ],
    correctAnswer: 0,
    explanation: "List slicing creates a new list containing elements from 'start' index to 'end-1' index, taking every 'step' element.",
    difficulty: 'intermediate'
  },
  {
    id: 54,
    question: "What does the any() function return?",
    options: [
      "True if any element is True",
      "True if all elements are True",
      "The first True element",
      "The count of True elements"
    ],
    correctAnswer: 0,
    explanation: "any() returns True if at least one element in the iterable is True. Returns False if all elements are False or if the iterable is empty.",
    difficulty: 'intermediate'
  },
  {
    id: 55,
    question: "What is method chaining?",
    options: [
      "Calling multiple methods on different objects",
      "Calling multiple methods on the same object in sequence",
      "Linking methods with chains",
      "Creating method hierarchies"
    ],
    correctAnswer: 1,
    explanation: "Method chaining allows calling multiple methods on the same object in a single statement, with each method returning the object.",
    difficulty: 'intermediate'
  },
  {
    id: 56,
    question: "What does the reduce() function do?",
    options: [
      "Reduces list size",
      "Applies a function cumulatively to items in an iterable",
      "Removes elements",
      "Minimizes values"
    ],
    correctAnswer: 1,
    explanation: "reduce() applies a function of two arguments cumulatively to items in an iterable, reducing the iterable to a single value.",
    difficulty: 'intermediate'
  },
  {
    id: 57,
    question: "What is the purpose of the __str__ method?",
    options: [
      "Converts object to string for end users",
      "Converts object to string for developers",
      "Creates string objects",
      "Validates string input"
    ],
    correctAnswer: 0,
    explanation: "__str__ defines the string representation of an object for end users, called by str() and print().",
    difficulty: 'intermediate'
  },
  {
    id: 58,
    question: "What does the all() function return?",
    options: [
      "True if any element is True",
      "True if all elements are True",
      "All True elements",
      "Count of True elements"
    ],
    correctAnswer: 1,
    explanation: "all() returns True only if all elements in the iterable are True. Returns True for empty iterables.",
    difficulty: 'intermediate'
  },
  {
    id: 59,
    question: "What is the difference between is and == for strings?",
    options: [
      "No difference for strings",
      "'is' compares identity, '==' compares content",
      "'is' is faster than '=='",
      "'==' is more accurate than 'is'"
    ],
    correctAnswer: 1,
    explanation: "'is' checks if two variables point to the same object in memory, while '==' checks if the content/values are equal.",
    difficulty: 'intermediate'
  },
  {
    id: 60,
    question: "What does the sorted() function return?",
    options: [
      "Modifies the original list",
      "Returns a new sorted list",
      "Returns the largest element",
      "Returns sorted indices"
    ],
    correctAnswer: 1,
    explanation: "sorted() returns a new sorted list from the elements of any iterable, leaving the original unchanged.",
    difficulty: 'intermediate'
  },

  // Professional Level Questions
  {
    id: 61,
    question: "What is the Global Interpreter Lock (GIL)?",
    options: [
      "A lock for global variables",
      "A mechanism that prevents multiple threads from executing Python bytecode simultaneously",
      "A security feature for interpreters",
      "A lock for file operations"
    ],
    correctAnswer: 1,
    explanation: "The GIL is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecode at once in CPython.",
    difficulty: 'professional'
  },
  {
    id: 62,
    question: "What is the difference between @staticmethod and @classmethod?",
    options: [
      "No difference",
      "@staticmethod doesn't receive any implicit first argument, @classmethod receives cls",
      "@classmethod is faster than @staticmethod",
      "@staticmethod receives self, @classmethod doesn't"
    ],
    correctAnswer: 1,
    explanation: "@staticmethod doesn't receive any implicit argument. @classmethod receives 'cls' (the class itself) as the first argument.",
    difficulty: 'professional'
  },
  {
    id: 63,
    question: "What is a descriptor in Python?",
    options: [
      "A way to describe functions",
      "An object that defines how attribute access is interpreted",
      "A documentation string",
      "A type annotation"
    ],
    correctAnswer: 1,
    explanation: "A descriptor is an object that defines how attribute access is interpreted by defining __get__, __set__, and/or __delete__ methods.",
    difficulty: 'professional'
  },
  {
    id: 64,
    question: "What is the difference between __new__ and __init__?",
    options: [
      "No difference",
      "__new__ creates the instance, __init__ initializes it",
      "__init__ creates the instance, __new__ initializes it",
      "__new__ is for classes, __init__ is for functions"
    ],
    correctAnswer: 1,
    explanation: "__new__ is responsible for creating and returning a new instance, while __init__ initializes the already created instance.",
    difficulty: 'professional'
  },
  {
    id: 65,
    question: "What is monkey patching?",
    options: [
      "A debugging technique",
      "Dynamically modifying classes or modules at runtime",
      "A type of error handling",
      "A testing methodology"
    ],
    correctAnswer: 1,
    explanation: "Monkey patching is dynamically modifying classes or modules at runtime, typically to extend or fix functionality.",
    difficulty: 'professional'
  },
  {
    id: 66,
    question: "What does the __slots__ attribute do?",
    options: [
      "Defines available methods",
      "Restricts the attributes that can be set on an instance",
      "Sets default values",
      "Defines inheritance order"
    ],
    correctAnswer: 1,
    explanation: "__slots__ restricts the attributes that instances of a class can have, potentially saving memory and preventing dynamic attribute creation.",
    difficulty: 'professional'
  },
  {
    id: 67,
    question: "What is the purpose of the __call__ method?",
    options: [
      "Makes an object callable like a function",
      "Calls other methods",
      "Handles function calls",
      "Creates phone calls"
    ],
    correctAnswer: 0,
    explanation: "__call__ allows an instance of a class to be called as if it were a function, enabling callable objects.",
    difficulty: 'professional'
  },
  {
    id: 68,
    question: "What is metaclass in Python?",
    options: [
      "A class inside another class",
      "A class whose instances are classes",
      "A parent class",
      "An abstract class"
    ],
    correctAnswer: 1,
    explanation: "A metaclass is a class whose instances are classes. It defines how classes are constructed and behave.",
    difficulty: 'professional'
  },
  {
    id: 69,
    question: "What does the @property decorator do?",
    options: [
      "Creates private properties",
      "Allows methods to be accessed like attributes",
      "Protects attributes",
      "Creates constants"
    ],
    correctAnswer: 1,
    explanation: "@property allows methods to be accessed like attributes, enabling computed properties and getter/setter behavior.",
    difficulty: 'professional'
  },
  {
    id: 70,
    question: "What is the difference between deepcopy and copy?",
    options: [
      "deepcopy is recursive, copy is shallow",
      "copy is recursive, deepcopy is shallow",
      "No difference",
      "deepcopy works only with lists"
    ],
    correctAnswer: 0,
    explanation: "copy() creates a shallow copy (new object, but references to nested objects), while deepcopy() recursively copies all nested objects.",
    difficulty: 'professional'
  },
  {
    id: 71,
    question: "What is the purpose of context managers?",
    options: [
      "Managing contexts in applications",
      "Ensuring proper resource management with setup and cleanup",
      "Managing user contexts",
      "Handling exceptions"
    ],
    correctAnswer: 1,
    explanation: "Context managers ensure proper resource management by guaranteeing setup and cleanup operations, typically used with 'with' statements.",
    difficulty: 'professional'
  },
  {
    id: 72,
    question: "What does the __enter__ and __exit__ methods do?",
    options: [
      "Handle function entry and exit",
      "Define context manager protocol",
      "Handle class initialization",
      "Control program flow"
    ],
    correctAnswer: 1,
    explanation: "__enter__ and __exit__ define the context manager protocol, handling setup and cleanup operations for 'with' statements.",
    difficulty: 'professional'
  },
  {
    id: 73,
    question: "What is the difference between yield and return?",
    options: [
      "yield pauses function execution, return terminates it",
      "return pauses function execution, yield terminates it",
      "No difference",
      "yield is faster than return"
    ],
    correctAnswer: 0,
    explanation: "yield pauses function execution and returns a value, allowing the function to resume later. return terminates the function completely.",
    difficulty: 'professional'
  },
  {
    id: 74,
    question: "What is Method Resolution Order (MRO)?",
    options: [
      "Order of method execution",
      "Order in which methods are resolved in inheritance hierarchy",
      "Order of method definition",
      "Order of method calls"
    ],
    correctAnswer: 1,
    explanation: "MRO is the order in which Python searches for methods in the inheritance hierarchy, following the C3 linearization algorithm.",
    difficulty: 'professional'
  },
  {
    id: 75,
    question: "What does the functools.wraps decorator do?",
    options: [
      "Wraps functions in try-catch blocks",
      "Preserves original function metadata when creating decorators",
      "Wraps functions for security",
      "Creates function wrappers"
    ],
    correctAnswer: 1,
    explanation: "functools.wraps preserves the original function's metadata (name, docstring, etc.) when creating decorators.",
    difficulty: 'professional'
  },
  {
    id: 76,
    question: "What is the difference between __getattr__ and __getattribute__?",
    options: [
      "No difference",
      "__getattr__ is called when attribute doesn't exist, __getattribute__ is called for all attribute access",
      "__getattribute__ is called when attribute doesn't exist, __getattr__ is called for all attribute access",
      "Both handle the same thing"
    ],
    correctAnswer: 1,
    explanation: "__getattribute__ is called for every attribute access, while __getattr__ is only called when the attribute doesn't exist normally.",
    difficulty: 'professional'
  },
  {
    id: 77,
    question: "What is the purpose of the abc module?",
    options: [
      "Alphabetical operations",
      "Abstract Base Classes",
      "Automatic Backup Creation",
      "Advanced Binary Calculations"
    ],
    correctAnswer: 1,
    explanation: "The abc module provides infrastructure for defining Abstract Base Classes, which can't be instantiated directly and define interfaces.",
    difficulty: 'professional'
  },
  {
    id: 78,
    question: "What does the weakref module do?",
    options: [
      "Creates weak references that don't prevent garbage collection",
      "Handles weak network connections",
      "Creates temporary variables",
      "Manages weak passwords"
    ],
    correctAnswer: 0,
    explanation: "weakref creates weak references to objects that don't prevent the object from being garbage collected when no strong references exist.",
    difficulty: 'professional'
  },
  {
    id: 79,
    question: "What is the difference between bound and unbound methods?",
    options: [
      "Bound methods are attached to instances, unbound methods are not",
      "Unbound methods are attached to instances, bound methods are not",
      "No difference in Python 3",
      "Bound methods are faster"
    ],
    correctAnswer: 0,
    explanation: "Bound methods are associated with an instance and automatically pass 'self'. In Python 3, unbound methods don't exist (they're just functions).",
    difficulty: 'professional'
  },
  {
    id: 80,
    question: "What is the purpose of the __dict__ attribute?",
    options: [
      "Stores dictionary methods",
      "Stores an object's writable attributes",
      "Creates dictionaries",
      "Handles dictionary operations"
    ],
    correctAnswer: 1,
    explanation: "__dict__ is a dictionary that stores an object's writable attributes, mapping attribute names to their values.",
    difficulty: 'professional'
  },

  // Boss Level Questions
  {
    id: 81,
    question: "How does Python's garbage collection work with reference cycles?",
    options: [
      "It can't handle reference cycles",
      "Uses cycle detection algorithm to identify and collect cyclic references",
      "Requires manual intervention",
      "Uses weak references only"
    ],
    correctAnswer: 1,
    explanation: "Python uses a cyclic garbage collector that can detect and collect reference cycles using a mark-and-sweep algorithm on objects with potential cycles.",
    difficulty: 'boss'
  },
  {
    id: 82,
    question: "What is the difference between __subclasshook__ and isinstance?",
    options: [
      "No difference",
      "__subclasshook__ allows customizing isinstance/issubclass behavior for abstract base classes",
      "isinstance is faster",
      "__subclasshook__ is deprecated"
    ],
    correctAnswer: 1,
    explanation: "__subclasshook__ is a class method that allows Abstract Base Classes to customize the behavior of isinstance() and issubclass() without requiring explicit inheritance.",
    difficulty: 'boss'
  },
  {
    id: 83,
    question: "How does Python's import system work with circular imports?",
    options: [
      "Circular imports always cause errors",
      "Python handles them using partially initialized modules",
      "Python prevents all circular imports",
      "Circular imports work perfectly"
    ],
    correctAnswer: 1,
    explanation: "Python can handle some circular imports by creating partially initialized module objects and filling them in as the import process continues.",
    difficulty: 'boss'
  },
  {
    id: 84,
    question: "What is the purpose of the __prepare__ method in metaclasses?",
    options: [
      "Prepares the class for instantiation",
      "Returns the namespace dictionary for class creation",
      "Prepares method calls",
      "Handles class preparation"
    ],
    correctAnswer: 1,
    explanation: "__prepare__ is called before the class body is executed and returns the mapping object (usually a dict) to use as the local namespace for the class body.",
    difficulty: 'boss'
  },
  {
    id: 85,
    question: "How does Python's descriptor protocol interact with inheritance?",
    options: [
      "Descriptors don't work with inheritance",
      "Descriptors are looked up in the MRO and can be overridden",
      "Descriptors always use the base class implementation",
      "Inheritance breaks descriptors"
    ],
    correctAnswer: 1,
    explanation: "Descriptors are looked up following the Method Resolution Order and can be overridden in subclasses, with data descriptors taking precedence over instance attributes.",
    difficulty: 'boss'
  },
  {
    id: 86,
    question: "What is the difference between __format__ and __str__?",
    options: [
      "No difference",
      "__format__ handles custom format specifications, __str__ provides general string representation",
      "__str__ is more advanced than __format__",
      "__format__ is deprecated"
    ],
    correctAnswer: 1,
    explanation: "__format__ is called by format() and f-strings with custom format specifications, while __str__ provides a general string representation for end users.",
    difficulty: 'boss'
  },
  {
    id: 87,
    question: "How does Python's memory management differ from manual memory management?",
    options: [
      "No difference",
      "Python uses automatic memory management with reference counting and garbage collection",
      "Python requires manual memory allocation",
      "Python doesn't manage memory"
    ],
    correctAnswer: 1,
    explanation: "Python uses automatic memory management combining reference counting for immediate cleanup and a cyclic garbage collector for handling reference cycles.",
    difficulty: 'boss'
  },
  {
    id: 88,
    question: "What is the purpose of the __del__ method and why should it be avoided?",
    options: [
      "__del__ is perfectly safe to use",
      "__del__ is called when object is deleted but timing is unpredictable and can create issues",
      "__del__ doesn't exist in Python",
      "__del__ is faster than other cleanup methods"
    ],
    correctAnswer: 1,
    explanation: "__del__ is called when an object is about to be destroyed, but its timing is unpredictable and it can prevent garbage collection of cycles. Context managers are preferred.",
    difficulty: 'boss'
  },
  {
    id: 89,
    question: "How does Python's asyncio event loop handle coroutines?",
    options: [
      "Using threads for each coroutine",
      "Using cooperative multitasking with a single-threaded event loop",
      "Using processes for each coroutine",
      "Using synchronous execution"
    ],
    correctAnswer: 1,
    explanation: "asyncio uses cooperative multitasking where coroutines voluntarily yield control to the event loop, allowing other coroutines to run in a single thread.",
    difficulty: 'boss'
  },
  {
    id: 90,
    question: "What is the difference between __getitem__ and __getattr__?",
    options: [
      "No difference",
      "__getitem__ handles subscription (obj[key]), __getattr__ handles attribute access (obj.attr)",
      "__getattr__ handles subscription, __getitem__ handles attributes",
      "Both handle the same operations"
    ],
    correctAnswer: 1,
    explanation: "__getitem__ is called for subscription operations (obj[key]) while __getattr__ is called when an attribute doesn't exist through normal lookup.",
    difficulty: 'boss'
  },
  {
    id: 91,
    question: "How does Python's type system work with duck typing?",
    options: [
      "Duck typing conflicts with type hints",
      "Duck typing allows objects to be used based on behavior rather than explicit type, complemented by protocols in typing",
      "Duck typing is not supported in Python",
      "Type hints replace duck typing"
    ],
    correctAnswer: 1,
    explanation: "Duck typing allows objects to be used based on their behavior/interface rather than their explicit type. Protocols in the typing module formalize this concept.",
    difficulty: 'boss'
  },
  {
    id: 92,
    question: "What is the purpose of the __set_name__ method in descriptors?",
    options: [
      "Sets the descriptor's name",
      "Called when descriptor is assigned to a class attribute, receives owner class and attribute name",
      "Sets object names",
      "Handles name conflicts"
    ],
    correctAnswer: 1,
    explanation: "__set_name__ is called when the descriptor is assigned to a class attribute, receiving the owner class and the attribute name, allowing the descriptor to know its name.",
    difficulty: 'boss'
  },
  {
    id: 93,
    question: "How does Python's import machinery handle namespace packages?",
    options: [
      "Namespace packages don't exist",
      "Allows packages to span multiple directories without __init__.py files",
      "Requires special imports",
      "Uses different syntax"
    ],
    correctAnswer: 1,
    explanation: "Namespace packages (PEP 420) allow a package to span multiple directories without requiring __init__.py files, useful for plugin architectures.",
    difficulty: 'boss'
  },
  {
    id: 94,
    question: "What is the difference between cooperative and preemptive multitasking in Python?",
    options: [
      "No difference in Python",
      "Cooperative (asyncio) requires explicit yielding, preemptive (threading) can be interrupted by the OS",
      "Preemptive requires explicit yielding",
      "Both work the same way"
    ],
    correctAnswer: 1,
    explanation: "Cooperative multitasking (asyncio) requires tasks to voluntarily yield control, while preemptive multitasking (threading) allows the OS to interrupt and switch between threads.",
    difficulty: 'boss'
  },
  {
    id: 95,
    question: "How does Python's method resolution order handle diamond inheritance?",
    options: [
      "Diamond inheritance causes errors",
      "Uses C3 linearization to create a consistent method resolution order",
      "Randomly chooses methods",
      "Uses depth-first search"
    ],
    correctAnswer: 1,
    explanation: "Python uses C3 linearization to resolve diamond inheritance, ensuring a consistent and predictable method resolution order that respects local precedence and monotonicity.",
    difficulty: 'boss'
  },
  {
    id: 96,
    question: "What is the purpose of the __init_subclass__ method?",
    options: [
      "Initializes subclass instances",
      "Called when a class is subclassed, allows customization of subclass creation",
      "Creates subclass objects",
      "Handles subclass imports"
    ],
    correctAnswer: 1,
    explanation: "__init_subclass__ is called when a class is subclassed, allowing the parent class to customize or validate the creation of subclasses.",
    difficulty: 'boss'
  },
  {
    id: 97,
    question: "How does Python's buffer protocol work?",
    options: [
      "Handles string buffers only",
      "Provides a way to access internal data of objects without copying",
      "Creates temporary buffers",
      "Buffers network data"
    ],
    correctAnswer: 1,
    explanation: "The buffer protocol allows objects to expose their internal data for direct access without copying, used by memoryview, bytes, and C extensions.",
    difficulty: 'boss'
  },
  {
    id: 98,
    question: "What is the difference between __iter__ and __getitem__ for iteration?",
    options: [
      "No difference",
      "__iter__ returns an iterator, __getitem__ allows indexing-based iteration fallback",
      "__getitem__ is preferred for iteration",
      "Both must be implemented together"
    ],
    correctAnswer: 1,
    explanation: "__iter__ should return an iterator object. If __iter__ is not defined, Python falls back to using __getitem__ with integer indices starting from 0.",
    difficulty: 'boss'
  },
  {
    id: 99,
    question: "How does Python's peephole optimizer work?",
    options: [
      "Optimizes code at runtime",
      "Performs compile-time optimizations on bytecode",
      "Optimizes memory usage",
      "Doesn't exist in Python"
    ],
    correctAnswer: 1,
    explanation: "The peephole optimizer performs compile-time optimizations on Python bytecode, such as constant folding, dead code elimination, and jump optimization.",
    difficulty: 'boss'
  },
  {
    id: 100,
    question: "What is the relationship between Python's AST and bytecode compilation?",
    options: [
      "AST is not used in Python",
      "Source code is parsed into AST, then compiled to bytecode for execution",
      "Bytecode is compiled to AST",
      "AST and bytecode are the same"
    ],
    correctAnswer: 1,
    explanation: "Python source code is parsed into an Abstract Syntax Tree (AST), which is then compiled into bytecode that the Python virtual machine can execute.",
    difficulty: 'boss'
  }
];