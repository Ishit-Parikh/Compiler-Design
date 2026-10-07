/* Compiler Design — Unit 1 (mid-term scope: language processors, compiler
   structure, phases, construction tools, bootstrapping).
   Sources: Compiler_Design_Notes.pdf sections 1–8,
            Exact Mid Term Syllabus.txt topics 1–5 */
window.Q_BANK = window.Q_BANK || [];
window.Q_BANK.push(
/* ================= LANGUAGE PROCESSORS ================= */
{
  id: "cd-01",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "A language processor is best described as:",
  options: [
    "A program that translates code from one language form into another",
    "A program that only prints documents",
    "A hardware device for storing data",
    "An operating system kernel module"
  ],
  answer: 0,
  explain: "Compilers, interpreters, assemblers, linkers and loaders are all language processors."
},
{
  id: "cd-02",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "Which of the following is a compiler?",
  options: [
    "A language processor that translates a whole program and produces an object or executable file",
    "A program that executes one statement at a time without producing a target file",
    "A program that converts mnemonics into machine code",
    "A program that loads an executable into memory"
  ],
  answer: 0,
  explain: "A compiler translates the entire program; an interpreter runs statement by statement."
},
{
  id: "cd-03",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "An interpreter differs from a compiler because it:",
  options: [
    "Executes the program statement by statement without first producing a complete target program",
    "Always produces machine code before running",
    "Can only translate assembly language",
    "Is part of the operating system"
  ],
  answer: 0,
  explain: "No intermediate or target file — execution and translation happen together."
},
{
  id: "cd-04",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "An assembler translates:",
  options: [
    "Assembly language mnemonics into binary machine code",
    "High-level source into assembly",
    "Machine code into mnemonics",
    "Object files into source code"
  ],
  answer: 0,
  explain: "The assembler works on the compiler's output — assembly language."
},
{
  id: "cd-05",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "The linker's job is to:",
  options: [
    "Combine object files with library files and resolve external references",
    "Convert source code into tokens",
    "Generate assembly code from a parse tree",
    "Load the executable into memory"
  ],
  answer: 0,
  explain: "Linking joins separate object files and settles the symbols they could not define alone."
},
{
  id: "cd-06",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "The loader's job is to:",
  options: [
    "Place the executable in memory, set up the runtime environment and transfer control to the entry point",
    "Combine library files with the object file",
    "Convert C code into machine code",
    "Optimize the program's intermediate code"
  ],
  answer: 0,
  explain: "Loading happens at run time, not build time."
},
{
  id: "cd-07",
  unit: 1,
  topic: "Language Processors",
  type: "msq",
  q: "Which of these are language processors?",
  options: ["Compiler", "Interpreter", "Assembler", "Linker", "Loader", "Spreadsheet"],
  answer: [0, 1, 2, 3, 4],
  explain: "All five form the translation chain; a spreadsheet is not a language processor."
},
{
  id: "cd-08",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "Which statement is correct about the word \"compiler\"?",
  options: [
    "Strictly, the compiler is only stage (2) of the chain — the preprocessor, assembler, linker and loader are separate programs",
    "The compiler name covers all five stages",
    "The compiler is the same thing as the loader",
    "The compiler runs last of all stages"
  ],
  answer: 0,
  explain: "Carefully: preprocessor, compiler, assembler, linker, loader — only stage 2 is the compiler proper."
},
{
  id: "cd-09",
  unit: 1,
  topic: "Language Processors",
  type: "fib",
  q: "The whole chain of preprocessor, compiler, assembler, linker and loader is collectively called the translation ______.",
  answer: ["process", "translation process", "the translation process"],
  explain: "Translation process / translation unit."
},
{
  id: "cd-10",
  unit: 1,
  topic: "Language Processors",
  type: "fib",
  q: "A program that translates code from one language to another is called a language ______.",
  answer: ["processor", "processor."],
  explain: "Compiler, interpreter, assembler, linker and loader are all language processors."
},
{
  id: "cd-11",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "A compiler converts C code into:",
  options: [
    "Machine code (an object file and, after linking, an executable)",
    "Human-readable documentation",
    "A database table",
    "Assembly mnemonics only, with no further processing"
  ],
  answer: 0,
  explain: "The end goal is an executable program the machine can run."
},
{
  id: "cd-12",
  unit: 1,
  topic: "Language Processors",
  type: "msq",
  q: "Which statements about interpreters are correct?",
  options: [
    "They execute a program statement by statement",
    "They do not need to produce a complete target program first",
    "They are language processors",
    "They produce a relocatable object file",
    "They are used only for linking"
  ],
  answer: [0, 1, 2],
  explain: "Object files come from assemblers compiling through the toolchain."
},
{
  id: "cd-13",
  unit: 1,
  topic: "Language Processors",
  type: "fib",
  q: "A program that executes one statement at a time instead of producing a target program is an ______.",
  answer: ["interpreter", "an interpreter"],
  explain: "Interpreter — translation and execution interleave."
},
{
  id: "cd-14",
  unit: 1,
  topic: "Language Processors",
  type: "mcq",
  q: "Which stage converts mnemonics into binary machine code?",
  options: ["Assembler", "Preprocessor", "Linker", "Loader"],
  answer: 0,
  explain: "Stage 3 of the chain."
},

/* ================= TRANSLATION PHASES ================= */
{
  id: "cd-15",
  unit: 1,
  topic: "Phases of Compilation",
  type: "mcq",
  q: "What is the correct order of the translation chain?",
  options: [
    "Preprocessor → Compiler → Assembler → Linker → Loader",
    "Compiler → Preprocessor → Assembler → Loader → Linker",
    "Preprocessor → Assembler → Compiler → Linker → Loader",
    "Linker → Assembler → Compiler → Preprocessor → Loader"
  ],
  answer: 0,
  explain: "Source (.c) → modified source → assembly → object file → executable → running program."
},
{
  id: "cd-16",
  unit: 1,
  topic: "Phases of Compilation",
  type: "mcq",
  q: "The input to the preprocessor is:",
  options: ["Source code (.c)", "Assembly code", "Object file", "Executable file"],
  answer: 0,
  explain: "The preprocessor is the very first stage."
},
{
  id: "cd-17",
  unit: 1,
  topic: "Phases of Compilation",
  type: "mcq",
  q: "The output of the preprocessor is:",
  options: [
    "Modified source code containing mnemonic instructions",
    "An object file",
    "An executable file",
    "Machine code in memory"
  ],
  answer: 0,
  explain: "Preprocessing is text manipulation — the output is still source code."
},
{
  id: "cd-18",
  unit: 1,
  topic: "Phases of Compilation",
  type: "mcq",
  q: "The output of the assembler is:",
  options: [
    "A relocatable object file",
    "Modified source code",
    "An executable file",
    "A parse tree"
  ],
  answer: 0,
  explain: "Machine code whose addresses are not yet final."
},
{
  id: "cd-19",
  unit: 1,
  topic: "Phases of Compilation",
  type: "mcq",
  q: "The output of the linker is:",
  options: [
    "A complete, standalone executable file",
    "A relocatable object file",
    "Modified source code",
    "Machine code running in memory"
  ],
  answer: 0,
  explain: "Linking produces the standalone executable."
},
{
  id: "cd-20",
  unit: 1,
  topic: "Phases of Compilation",
  type: "fib",
  q: "The ______ produces modified source code from your source code file.",
  answer: ["preprocessor", "the preprocessor"],
  explain: "Stage 1 — handles directives, headers, macros and comments."
},
{
  id: "cd-21",
  unit: 1,
  topic: "Phases of Compilation",
  type: "fib",
  q: "The ______ converts mnemonics into binary machine code and produces a relocatable object file.",
  answer: ["assembler", "the assembler"],
  explain: "Stage 3."
},
{
  id: "cd-22",
  unit: 1,
  topic: "Phases of Compilation",
  type: "fib",
  q: "The ______ links library files and resolves external references to produce an executable.",
  answer: ["linker", "the linker"],
  explain: "Stage 4."
},
{
  id: "cd-23",
  unit: 1,
  topic: "Phases of Compilation",
  type: "fib",
  q: "The ______ places the executable in memory, sets up the runtime environment and transfers control to the entry point.",
  answer: ["loader", "the loader"],
  explain: "Stage 5 — the final step before execution."
},
{
  id: "cd-24",
  unit: 1,
  topic: "Phases of Compilation",
  type: "fib",
  q: "Control is normally transferred by the loader to the entry point, which is usually the ______ function.",
  answer: ["main", "main()", "main function"],
  explain: "The entry point is normally main()."
},
{
  id: "cd-25",
  unit: 1,
  topic: "Phases of Compilation",
  type: "msq",
  q: "Match each stage to its output. Which pairings are correct?",
  options: [
    "Preprocessor → modified source code",
    "Compiler → assembly + target code",
    "Assembler → relocatable object file",
    "Linker → executable file",
    "Loader → machine-code executable in memory",
    "Linker → modified source code"
  ],
  answer: [0, 1, 2, 3, 4],
  explain: "The linker outputs the executable, not source code."
},
{
  id: "cd-26",
  unit: 1,
  topic: "Phases of Compilation",
  type: "mcq",
  q: "Which stage happens at run time rather than build time?",
  options: ["Loader", "Assembler", "Preprocessor", "Compiler"],
  answer: 0,
  explain: "The loader runs when the program is executed."
},
{
  id: "cd-27",
  unit: 1,
  topic: "Phases of Compilation",
  type: "mcq",
  q: "An object file is described as relocatable because:",
  options: [
    "Its addresses are not final, since external references are still unresolved",
    "It can be moved between folders",
    "It contains no code",
    "It is compressed"
  ],
  answer: 0,
  explain: "The linker assigns the final addresses."
},

/* ================= PREPROCESSOR ================= */
{
  id: "cd-28",
  unit: 1,
  topic: "Preprocessor",
  type: "mcq",
  q: "The preprocessor works on the source file as:",
  options: ["Plain text", "Machine code", "Assembly mnemonics", "Binary object format"],
  answer: 0,
  explain: "Its input and output are both source code — no compilation happens here."
},
{
  id: "cd-29",
  unit: 1,
  topic: "Preprocessor",
  type: "mcq",
  q: "Which preprocessor directives are handled by the preprocessor?",
  options: ["#include, #define, #ifdef, #ifndef", "main, printf, return", "add, mul, mov", "class, void, int"],
  answer: 0,
  explain: "Directives begin with # and are the preprocessor's instructions."
},
{
  id: "cd-30",
  unit: 1,
  topic: "Preprocessor",
  type: "mcq",
  q: "What does the #include directive do?",
  options: [
    "Pastes the contents of the header file into the source at that point",
    "Deletes the header file from disk",
    "Creates a new object file",
    "Renames a variable"
  ],
  answer: 0,
  explain: "The header's text becomes part of the source."
},
{
  id: "cd-31",
  unit: 1,
  topic: "Preprocessor",
  type: "mcq",
  q: "Macro expansion is:",
  options: [
    "Pure textual substitution of the macro name by its replacement text",
    "A function call resolved at run time",
    "A type conversion",
    "An assembly instruction"
  ],
  answer: 0,
  explain: "Nothing is compiled during expansion — it is text replacement."
},
{
  id: "cd-32",
  unit: 1,
  topic: "Preprocessor",
  type: "mcq",
  q: "Which task belongs to the preprocessor?",
  options: [
    "Removing comments before the compiler sees the source",
    "Optimizing the generated machine code",
    "Linking library files",
    "Loading the executable into memory"
  ],
  answer: 0,
  explain: "Comments are stripped in preprocessing."
},
{
  id: "cd-33",
  unit: 1,
  topic: "Preprocessor",
  type: "msq",
  q: "Which are preprocessor tasks?",
  options: [
    "Handling preprocessor directives",
    "Including header files",
    "Expanding macros",
    "Removing comments",
    "Generating target machine code",
    "Resolving external references"
  ],
  answer: [0, 1, 2, 3],
  explain: "Code generation and linking belong to later stages."
},
{
  id: "cd-34",
  unit: 1,
  topic: "Preprocessor",
  type: "msq",
  q: "Why is preprocessing NOT part of compilation proper?",
  options: [
    "It is text manipulation on source code",
    "Its output is still source code, not object code",
    "It produces no machine code",
    "It requires a linker to complete",
    "It runs after code generation"
  ],
  answer: [0, 1, 2],
  explain: "Nothing is compiled — it is source-to-source text work."
},
{
  id: "cd-35",
  unit: 1,
  topic: "Preprocessor",
  type: "fib",
  q: "The preprocessor produces modified ______ code, not object code.",
  answer: ["source", "the source", "source code"],
  explain: "An exam pointer: source in, source out."
},
{
  id: "cd-36",
  unit: 1,
  topic: "Preprocessor",
  type: "fib",
  q: "Preprocessor instructions such as #include and #define begin with the symbol ______.",
  answer: ["#", "hash", "the hash symbol"],
  explain: "The # (hash) marks a preprocessor directive."
},
{
  id: "cd-37",
  unit: 1,
  topic: "Preprocessor",
  type: "fib",
  q: "Replacing every occurrence of a macro name by its replacement text is called macro ______.",
  answer: ["expansion", "expansion.",  "macro expansion"],
  explain: "Textual substitution — nothing is compiled."
},
{
  id: "cd-38",
  unit: 1,
  topic: "Preprocessor",
  type: "mcq",
  q: "Which of these is an example of a preprocessor directive?",
  options: ["#define MAX 100", "int x = 5;", "mov ax, bx", "return 0;"],
  answer: 0,
  explain: "It begins with # and defines a macro."
},

/* ================= COMPILER STRUCTURE ================= */
{
  id: "cd-39",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "Into how many logical parts is the compiler divided?",
  options: ["3 — frontend, optimization, backend", "2 — analysis and synthesis only", "5 — matching the pipeline stages", "1 — a single monolithic block"],
  answer: 0,
  explain: "Frontend (analysis), optimization phase, and backend (code generation)."
},
{
  id: "cd-40",
  unit: 1,
  topic: "Compiler Structure",
  type: "msq",
  q: "Which modules belong to the frontend (analysis)?",
  options: ["Lexical Analyzer", "Syntax Analyzer", "Semantic Analyzer", "Code Optimizer", "Code Generator"],
  answer: [0, 1, 2],
  explain: "The optimizer and code generator belong to the back end."
},
{
  id: "cd-41",
  unit: 1,
  topic: "Compiler Structure",
  type: "msq",
  q: "Which modules belong to the back end (synthesis)?",
  options: ["Intermediate code generator", "Code optimizer", "Code generator", "Lexical analyzer", "Syntax analyzer"],
  answer: [0, 1, 2],
  explain: "The back end works on intermediate/target code; the front end understands the language."
},
{
  id: "cd-42",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "The frontend is:",
  options: [
    "Machine-independent — it only understands the language, not the machine",
    "Machine-dependent — it selects processor instructions",
    "Responsible for register allocation",
    "Run only on the target processor"
  ],
  answer: 0,
  explain: "The front end analyses source and produces a machine-independent intermediate form."
},
{
  id: "cd-43",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "The backend is:",
  options: [
    "Machine-dependent — it selects the actual instructions of the target processor",
    "Machine-independent",
    "Responsible only for counting tokens",
    "Unrelated to code generation"
  ],
  answer: 0,
  explain: "Only the back end changes when porting to a new processor."
},
{
  id: "cd-44",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "Which part must change when you port a compiler to a new processor?",
  options: ["The backend", "The lexical analyzer", "The syntax analyzer", "The symbol table"],
  answer: 0,
  explain: "Language analysis is target-independent; instruction selection is not."
},
{
  id: "cd-45",
  unit: 1,
  topic: "Compiler Structure",
  type: "msq",
  q: "What are the tasks of the frontend?",
  options: [
    "Check that the program is valid",
    "Understand only the language",
    "Produce a machine-independent intermediate form",
    "Select target processor instructions",
    "Link library files"
  ],
  answer: [0, 1, 2],
  explain: "Instruction selection is the back end; linking is a separate stage."
},
{
  id: "cd-46",
  unit: 1,
  topic: "Compiler Structure",
  type: "msq",
  q: "Which are optimisation techniques named in the notes?",
  options: [
    "Constant folding",
    "Dead code elimination",
    "Common subexpression elimination",
    "Loop optimisation",
    "Peephole optimisation",
    "Register allocation",
    "Lexical scanning"
  ],
  answer: [0, 1, 2, 3, 4, 5],
  explain: "Lexical scanning is a front-end analysis task, not an optimisation technique."
},
{
  id: "cd-47",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "Optimisation aims to make the program:",
  options: [
    "Run faster or occupy less space, without changing its meaning",
    "Smaller to type in the editor",
    "Easier to read at the source level",
    "Independent of the target machine"
  ],
  answer: 0,
  explain: "Meaning must be preserved — that is what makes it optimisation."
},
{
  id: "cd-48",
  unit: 1,
  topic: "Compiler Structure",
  type: "fib",
  q: "The three logical parts of a compiler are the frontend, the optimisation phase and the ______.",
  answer: ["backend", "back end", "back-end", "the backend"],
  explain: "Analysis → optimisation → synthesis."
},
{
  id: "cd-49",
  unit: 1,
  topic: "Compiler Structure",
  type: "fib",
  q: "The part of the compiler that is machine-dependent and generates the final output is the ______.",
  answer: ["backend", "back end", "back-end", "code generator"],
  explain: "Backend — assembly code and target (object) code."
},
{
  id: "cd-50",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "Which optimisation technique removes code that can never affect the result?",
  options: ["Dead code elimination", "Constant folding", "Loop optimisation", "Register allocation"],
  answer: 0,
  explain: "Dead code elimination — statements with no effect are dropped."
},
{
  id: "cd-51",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "Constant folding means:",
  options: [
    "Evaluating constant expressions at compile time instead of run time",
    "Moving frequently used code into a cache",
    "Removing unused variables",
    "Allocating registers to variables"
  ],
  answer: 0,
  explain: "2 + 3 becomes 5 in the generated code."
},
{
  id: "cd-52",
  unit: 1,
  topic: "Compiler Structure",
  type: "mcq",
  q: "The compiler's final output is:",
  options: ["Assembly code and target (object) code", "Modified source code", "A parse tree", "A symbol table"],
  answer: 0,
  explain: "The compiler proper emits assembly plus target code; the assembler makes the object file."
},

/* ================= FRONTEND ANALYSIS ================= */
{
  id: "cd-53",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Lexical analysis reads the program as:",
  options: [
    "A raw character stream and groups characters into meaningful tokens",
    "A parse tree",
    "Machine code",
    "An object file"
  ],
  answer: 0,
  explain: "Scanning produces the token stream consumed by the parser."
},
{
  id: "cd-54",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Which tokens does lexical analysis produce?",
  options: ["Keywords, identifiers, constants and operators", "Only identifiers", "Only keywords", "Machine instructions"],
  answer: 0,
  explain: "Tokens are the smallest meaningful units handed to syntax analysis."
},
{
  id: "cd-55",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "The symbol table is built during:",
  options: ["Lexical analysis", "Code generation", "Linking", "Loading"],
  answer: 0,
  explain: "It records every identifier and its attributes."
},
{
  id: "cd-56",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Lexical analysis reports errors for:",
  options: ["Illegal characters or invalid tokens", "Type mismatches only", "Missing library files", "Unresolved external references"],
  answer: 0,
  explain: "Type errors come later from semantic analysis; linkage errors come from the linker."
},
{
  id: "cd-57",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Syntax analysis checks that:",
  options: [
    "The token sequence forms a grammatically valid program according to the language grammar",
    "Every variable has the right type",
    "The program links successfully",
    "Each token is spelled correctly"
  ],
  answer: 0,
  explain: "Parsing is about grammatical structure, not meaning."
},
{
  id: "cd-58",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Syntax analysis builds:",
  options: [
    "The parse tree or syntax tree representing the structure of the program",
    "The symbol table only",
    "The assembly code",
    "The executable file"
  ],
  answer: 0,
  explain: "The parse tree makes the program's structure explicit."
},
{
  id: "cd-59",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Semantic analysis checks:",
  options: [
    "The meaning of the grammar-valid program",
    "Whether tokens are spelled correctly",
    "Whether the program is grammatically correct",
    "Whether libraries can be linked"
  ],
  answer: 0,
  explain: "Form is syntax; meaning is semantics."
},
{
  id: "cd-60",
  unit: 1,
  topic: "Frontend Analysis",
  type: "msq",
  q: "Which type rules does semantic analysis enforce?",
  options: [
    "Declaration before use",
    "Type compatibility of operands",
    "Correct function signatures",
    "Whether each character is a valid token",
    "Whether the object file links"
  ],
  answer: [0, 1, 2],
  explain: "Character validity is lexical; linkage is the linker's job."
},
{
  id: "cd-61",
  unit: 1,
  topic: "Frontend Analysis",
  type: "msq",
  q: "Which are tasks of semantic analysis?",
  options: [
    "Checking the meaning of the program",
    "Enforcing type rules",
    "Handling scope and visibility of identifiers",
    "Producing the intermediate representation",
    "Reporting semantic errors",
    "Selecting processor instructions"
  ],
  answer: [0, 1, 2, 3, 4],
  explain: "Instruction selection belongs to code generation in the back end."
},
{
  id: "cd-62",
  unit: 1,
  topic: "Frontend Analysis",
  type: "fib",
  q: "Lexical analysis is also known as ______.",
  answer: ["scanning", "the scanner", "scanner"],
  explain: "Scanning — characters to tokens."
},
{
  id: "cd-63",
  unit: 1,
  topic: "Frontend Analysis",
  type: "fib",
  q: "Syntax analysis is also known as ______.",
  answer: ["parsing", "parser"],
  explain: "Parsing — tokens to a parse tree."
},
{
  id: "cd-64",
  unit: 1,
  topic: "Frontend Analysis",
  type: "fib",
  q: "The symbol table records every ______ and its attributes.",
  answer: ["identifier", "identifiers"],
  explain: "It is the compiler's record of all names in the program."
},
{
  id: "cd-65",
  unit: 1,
  topic: "Frontend Analysis",
  type: "msq",
  q: "Match each analysis to what it produces.",
  options: [
    "Lexical analysis → token stream",
    "Syntax analysis → parse tree",
    "Semantic analysis → intermediate representation",
    "Syntax analysis → assembly code",
    "Semantic analysis → executable file"
  ],
  answer: [0, 1, 2],
  explain: "Assembly comes from code generation; the executable from the linker."
},
{
  id: "cd-66",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Which stage reports a \"declaration before use\" error?",
  options: ["Semantic analysis", "Lexical analysis", "Linking", "Loading"],
  answer: 0,
  explain: "It is a meaning/rule check, not a grammatical one."
},
{
  id: "cd-67",
  unit: 1,
  topic: "Frontend Analysis",
  type: "mcq",
  q: "Which stage reports \"unexpected token\" for bad expression structure?",
  options: ["Syntax analysis", "Semantic analysis", "Code generation", "Linking"],
  answer: 0,
  explain: "Syntax errors are about the shape of the token sequence."
},

/* ================= CONSTRUCTION TOOLS ================= */
{
  id: "cd-68",
  unit: 1,
  topic: "Construction Tools",
  type: "mcq",
  q: "LEX and FLEX are:",
  options: [
    "Lexical analyzer generators — they generate a lexical analyzer from regular expressions",
    "Parser generators",
    "Debuggers",
    "Build tools"
  ],
  answer: 0,
  explain: "LEX/FLEX turn patterns into scanner code."
},
{
  id: "cd-69",
  unit: 1,
  topic: "Construction Tools",
  type: "mcq",
  q: "YACC and Bison are:",
  options: [
    "Parser generators for syntax analysis",
    "Lexical analyzer generators",
    "Debuggers",
    "Linkers"
  ],
  answer: 0,
  explain: "They take a grammar and produce a parser."
},
{
  id: "cd-70",
  unit: 1,
  topic: "Construction Tools",
  type: "mcq",
  q: "Which tool is used for debugging?",
  options: ["GDB", "YACC", "LEX", "Make"],
  answer: 0,
  explain: "GDB — the GNU Debugger."
},
{
  id: "cd-71",
  unit: 1,
  topic: "Construction Tools",
  type: "mcq",
  q: "Which of these is a build tool?",
  options: ["Make", "GDB", "FLEX", "HoloLens"],
  answer: 0,
  explain: "Make automates the compile-link process."
},
{
  id: "cd-72",
  unit: 1,
  topic: "Construction Tools",
  type: "msq",
  q: "Which are compiler construction tools?",
  options: [
    "Lexical analyzer generators (LEX/FLEX)",
    "Parser generators (YACC/Bison)",
    "Debuggers (GDB)",
    "Build tools (Make)",
    "IDEs (VS Code, Eclipse)",
    "Graphics drivers"
  ],
  answer: [0, 1, 2, 3, 4],
  explain: "Five tool categories; graphics drivers are unrelated."
},
{
  id: "cd-73",
  unit: 1,
  topic: "Construction Tools",
  type: "msq",
  q: "Which are examples of IDEs named in the notes?",
  options: ["VS Code", "Eclipse", "LEX", "Bison"],
  answer: [0, 1],
  explain: "IDE = integrated development environment."
},
{
  id: "cd-74",
  unit: 1,
  topic: "Construction Tools",
  type: "fib",
  q: "The lexical analyzer generator used on UNIX is ______.",
  answer: ["lex", "lex."],
  explain: "LEX — its modern faster counterpart is FLEX."
},
{
  id: "cd-75",
  unit: 1,
  topic: "Construction Tools",
  type: "fib",
  q: "The modern, faster version of LEX is ______.",
  answer: ["flex", "flex."],
  explain: "FLEX — Fast Lexical Analyzer Generator."
},
{
  id: "cd-76",
  unit: 1,
  topic: "Construction Tools",
  type: "fib",
  q: "The GNU ______ is used for debugging compiled programs.",
  answer: ["debugger", "gdb", "the debugger"],
  explain: "GDB — the GNU Debugger."
},
{
  id: "cd-77",
  unit: 1,
  topic: "Construction Tools",
  type: "mcq",
  q: "Which pairing is correct?",
  options: [
    "LEX/FLEX → lexical analysis, YACC/Bison → syntax analysis",
    "LEX/FLEX → syntax analysis, YACC/Bison → lexical analysis",
    "Both generate lexers",
    "Both generate debuggers"
  ],
  answer: 0,
  explain: "Lexers from patterns, parsers from grammars."
},

/* ================= BOOTSTRAPPING ================= */
{
  id: "cd-78",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "Bootstrapping is the process of:",
  options: [
    "Using a simple compiler to compile a more complex compiler, so it can compile itself",
    "Optimizing a compiler's output",
    "Debugging a compiler with GDB",
    "Linking a compiler with libraries"
  ],
  answer: 0,
  explain: "\"Pulling yourself up by your own bootstraps.\""
},
{
  id: "cd-79",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "The chicken-and-egg problem in compilers is that:",
  options: [
    "To build a compiler you need a compiler, and that one also needed one, back to the very first compiler written by hand",
    "Compilers cannot be written in high-level languages",
    "Every compiler needs an interpreter",
    "Assembly cannot be translated"
  ],
  answer: 0,
  explain: "The circular chain is broken by hand-writing the first compiler."
},
{
  id: "cd-80",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "The very first compiler had to be written by hand in:",
  options: ["Raw machine code or assembly", "C", "Java", "Python"],
  answer: 0,
  explain: "Something must start the chain — machine code or assembly."
},
{
  id: "cd-81",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "A compiler is self-hosting when:",
  options: [
    "It is written in the very language it compiles, and can compile itself",
    "It is written in C and compiles C",
    "It can compile two languages at once",
    "It runs without an operating system"
  ],
  answer: 0,
  explain: "Self-compiling — its own language's source compiles with itself."
},
{
  id: "cd-82",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "In the three-stage bootstrap, Stage 0 does what?",
  options: [
    "The new compiler is written in an existing language (C) and built with an existing compiler (GCC)",
    "The compiler compiles itself and the binaries are compared",
    "The compiler is optimised for speed",
    "The compiler is linked with libraries"
  ],
  answer: 0,
  explain: "Stage 0 — the seed."
},
{
  id: "cd-83",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "In Stage 1 of bootstrapping:",
  options: [
    "The compiler is rewritten in its own language and compiled by the Stage 0 compiler",
    "The compiler compiles itself for the first time",
    "The two binaries are compared",
    "The compiler is written in machine code"
  ],
  answer: 0,
  explain: "Stage 1 — the rewrite in the new language."
},
{
  id: "cd-84",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "In Stage 2 of bootstrapping:",
  options: [
    "The Stage 1 compiler compiles the same source again, and the two binaries must match",
    "The compiler is first written in C",
    "The compiler is optimised for speed",
    "The compiler is linked against libraries"
  ],
  answer: 0,
  explain: "Stage 2 — the proof. Identical output means self-hosting is proven."
},
{
  id: "cd-85",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "What is the bootstrap proof?",
  options: [
    "Stage 2 output is identical to Stage 1 output",
    "Stage 0 output is faster than Stage 1",
    "The compiler produces no errors",
    "The compiler links successfully"
  ],
  answer: 0,
  explain: "A self-hosting compiler that compiles itself to an identical binary is a strong correctness signal."
},
{
  id: "cd-86",
  unit: 1,
  topic: "Bootstrapping",
  type: "msq",
  q: "What does Stage 2 prove?",
  options: [
    "Independence from the original language",
    "That GCC is no longer needed",
    "A strong correctness check on the compiler",
    "That the compiler is faster",
    "That the language is fully standardised"
  ],
  answer: [0, 1, 2],
  explain: "Speed and language standardisation are not what Stage 2 proves."
},
{
  id: "cd-87",
  unit: 1,
  topic: "Bootstrapping",
  type: "msq",
  q: "Which are benefits of a self-hosting compiler?",
  options: [
    "Dogfooding — the team uses its own language daily and feels every bug",
    "No external dependency once Stage 2 passes",
    "Proves the language is expressive enough for serious work",
    "Easier maintenance — a new feature can be used inside the compiler immediately",
    "A correctness check by comparing identical binaries",
    "It removes the need for testing"
  ],
  answer: [0, 1, 2, 3, 4],
  explain: "Testing is still essential; self-hosting does not replace it."
},
{
  id: "cd-88",
  unit: 1,
  topic: "Bootstrapping",
  type: "msq",
  q: "Which are risks of bootstrapping?",
  options: [
    "The \"trusting trust\" problem (Ken Thompson)",
    "Hard to start — you must first write a bootstrap compiler in another language",
    "Circular bugs — a subtle bug produces broken compilers that produce more broken compilers",
    "It is impossible to break the chain",
    "Compilers cannot be written in high-level languages"
  ],
  answer: [0, 1, 2],
  explain: "The chain is broken by hand, and compilers can be written in high-level languages."
},
{
  id: "cd-89",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "Ken Thompson's \"trusting trust\" problem describes:",
  options: [
    "A malicious compiler inserting a backdoor only when compiling itself, so it survives every rebuild and is invisible in the source",
    "A compiler that crashes on large files",
    "A linker that cannot find libraries",
    "An assembler that misreads mnemonics"
  ],
  answer: 0,
  explain: "The backdoor is in the binary, not the source — invisible to review."
},
{
  id: "cd-89b",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "What nuance about bootstrapping is often misunderstood?",
  options: [
    "You do not \"write with\" the compiler — you write the new compiler as source in the new language, and the old compiler translates it",
    "The compiler writes its own source code",
    "The compiler must be perfect before it can bootstrap",
    "Only interpreters can bootstrap"
  ],
  answer: 0,
  explain: "The old compiler does the translating; you supply the source."
},
{
  id: "cd-90",
  unit: 1,
  topic: "Bootstrapping",
  type: "msq",
  q: "Which languages have compilers written in themselves (self-hosting)?",
  options: [
    "C — GCC is written in C and compiles itself",
    "Rust — rustc self-hosts; the early compiler was written in OCaml",
    "Go — the gc compiler is written in Go",
    "Haskell — GHC is written in Haskell",
    "Python — CPython is written in C",
    "Java — javac is written in Java"
  ],
  answer: [0, 1, 2, 3],
  explain: "CPython is C; PyPy is the Python-written one. Javac's status differs."
},
{
  id: "cd-91",
  unit: 1,
  topic: "Bootstrapping",
  type: "msq",
  q: "Which of these are noted as partially or fully self-hosting?",
  options: [
    "Python — PyPy is written in Python",
    "Swift — originally C++, with a partial move to self-hosting",
    "C — GCC is written in C",
    "Rust — the early compiler was written in OCaml"
  ],
  answer: [0, 1, 2],
  explain: "Rust's early compiler was OCaml; rustc self-hosts today."
},
{
  id: "cd-92",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "The first version of a bootstrapping compiler need not be:",
  options: [
    "Better — it only needs to be good enough to compile itself correctly",
    "Correct",
    "Written in the new language",
    "Built using an existing compiler"
  ],
  answer: 0,
  explain: "The usual path is an equivalent port first, improvements afterwards."
},
{
  id: "cd-93",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "Why does trying to be \"better\" and self-hosting on day one backfire?",
  options: [
    "A failure then gives no clue whether it is a new bug or a bootstrapping problem",
    "It takes too much memory",
    "The language becomes too expressive",
    "The compiler grows too quickly"
  ],
  answer: 0,
  explain: "Isolate the variables — correctness first, features later."
},
{
  id: "cd-94",
  unit: 1,
  topic: "Bootstrapping",
  type: "fib",
  q: "A compiler written in the very language it compiles, which can compile itself, is called ______-hosting.",
  answer: ["self", "self-hosting", "self host", "self-hosting (self-compiling)"],
  explain: "Self-hosting, also called self-compiling."
},
{
  id: "cd-95",
  unit: 1,
  topic: "Bootstrapping",
  type: "fib",
  q: "The process of using a simple compiler to build a more complex one that can then compile itself is called ______.",
  answer: ["bootstrapping", "bootstrap"],
  explain: "Bootstrapping — pulling yourself up by your own bootstraps."
},
{
  id: "cd-95b",
  unit: 1,
  topic: "Bootstrapping",
  type: "fib",
  q: "Stage ______ is the proof stage: the Stage 1 compiler recompiles the source and both binaries must match.",
  answer: ["2", "two", "stage 2", "stage two"],
  explain: "Stage 2 — identical binaries prove self-hosting."
},
{
  id: "cd-96",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "Bootstrapping is described as pulling yourself up by your own:",
  options: ["Bootstraps", "Shoes", "Shirts", "Data"],
  answer: 0,
  explain: "The idiom is \"pulling yourself up by your own bootstraps\"."
},
{
  id: "cd-97",
  unit: 1,
  topic: "Bootstrapping",
  type: "mcq",
  q: "Which pair correctly describes a self-hosting chain, per the notes' stage table?",
  options: [
    "Stage 0: mycc.c built with GCC; Stage 1: mycc.my built with Stage 0; Stage 2: Stage 1 builds mycc.my again",
    "Stage 0: mycc.my built with Stage 1; Stage 1: mycc.c built with GCC; Stage 2: GCC rebuilds itself",
    "All three stages use the same compiler",
    "Stage 2 only optimises the code"
  ],
  answer: 0,
  explain: "Each stage uses the previous stage's compiler."
}
);
