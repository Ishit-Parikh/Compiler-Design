/* Compiler Design — Unit 1: lexical analysis generators, implementation,
   and lexical error detection / handling / recovery.
   Source: Exact Mid Term Syllabus.txt topics 12–14 */
window.Q_BANK = window.Q_BANK || [];
window.Q_BANK.push(
/* ================= LEX/FLEX GENERATORS ================= */
{
  id: "cd-170",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "mcq",
  q: "A lexical analyzer generator is a tool that:",
  options: [
    "Automatically generates a lexical analyzer from regular expressions",
    "Automatically generates a parser from a grammar",
    "Optimises object code",
    "Links library files"
  ],
  answer: 0,
  explain: "You describe token patterns; the tool writes the scanner."
},
{
  id: "cd-171",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "mcq",
  q: "What is the input file to LEX/FLEX called?",
  options: ["A .l file containing rules and actions", "A .y grammar file", "A header file", "An object file"],
  answer: 0,
  explain: "The .l file holds the rules (patterns) and the action code."
},
{
  id: "cd-172",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "mcq",
  q: "What does LEX/FLEX output?",
  options: ["C code for the lexical analyzer", "Assembly mnemonics", "An executable file", "A parse table"],
  answer: 0,
  explain: "The generated scanner is C source you then compile."
},
{
  id: "cd-173",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "mcq",
  q: "What is the generated file from a .l file usually called?",
  options: ["lex.yy.c", "y.tab.c", "a.out", "lex.o"],
  answer: 0,
  explain: "lex.yy.c is the C file generated from the .l specification."
},
{
  id: "cd-174",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "msq",
  q: "Which statements about LEX and FLEX are correct?",
  options: [
    "LEX is the UNIX tool; FLEX is the modern, faster version",
    "They generate a lexical analyzer from regular expressions",
    "Input is a .l file of rules and actions",
    "Output is C code for a lexical analyzer",
    "They generate a parser from a grammar"
  ],
  answer: [0, 1, 2, 3],
  explain: "Parsers come from YACC/Bison — a different generator."
},
{
  id: "cd-175",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "msq",
  q: "Which are steps in implementing a lexical analyzer with LEX/FLEX?",
  options: [
    "Define the tokens and their patterns",
    "Write the rules using LEX/FLEX",
    "Compile with lex",
    "Link with a parser such as YACC/Bison",
    "Run and test with input files",
    "Design the grammar of the whole language"
  ],
  answer: [0, 1, 2, 3, 4],
  explain: "Designing the whole language grammar is the parser's job, not the lexer's."
},
{
  id: "cd-176",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "fib",
  q: "The lexical analyzer specification file given to LEX has the extension ______.",
  answer: [".l", "l"],
  explain: "The .l file."
},
{
  id: "cd-177",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "fib",
  q: "Compiling the .l file with lex produces a C file usually named lex.yy______.",
  answer: [".c", "c"],
  explain: "lex.yy.c."
},
{
  id: "cd-178",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "fib",
  q: "The faster modern successor of the UNIX tool LEX is ______.",
  answer: ["flex", "flex."],
  explain: "FLEX."
},
{
  id: "cd-179",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "mcq",
  q: "The flow shown in the notes is:",
  options: [
    "Source code → LEX/FLEX → lex.yy.c → Compile & link → Lexical Analyzer",
    "Source code → Compiler → Object file → Lexical Analyzer",
    "Source code → Linker → Executable → Lexical Analyzer",
    "Grammar → YACC → Lexical Analyzer"
  ],
  answer: 0,
  explain: "The generator writes C; you compile and link it into a working scanner."
},
{
  id: "cd-180",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "mcq",
  q: "Why is the generated scanner linked with a parser?",
  options: [
    "The parser needs the token stream the scanner produces",
    "The scanner needs the grammar tables to run",
    "Linking reduces memory usage",
    "The linker generates the token patterns"
  ],
  answer: 0,
  explain: "Lexer and parser are two halves of the front end."
},
{
  id: "cd-181",
  unit: 1,
  topic: "LEX/FLEX Generators",
  type: "msq",
  q: "What is contained in a LEX/FLEX specification?",
  options: ["Definitions section", "Rules section", "User code section", "Machine code", "Linker script"],
  answer: [0, 1, 2],
  explain: "Declarations, rules with patterns and actions, and any extra user code."
},

/* ================= LEXICAL ERROR HANDLING ================= */
{
  id: "cd-182",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "mcq",
  q: "Which are examples of lexical errors?",
  options: [
    "Invalid characters, unterminated strings and invalid tokens",
    "Type mismatches",
    "Missing parentheses",
    "Undefined variables"
  ],
  answer: 0,
  explain: "Lexical errors are about characters — the other three are later phases."
},
{
  id: "cd-183",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "msq",
  q: "Which are lexical error conditions?",
  options: [
    "An invalid character such as '@'",
    "An unterminated string literal",
    "An invalid token",
    "A type mismatch between operands",
    "A grammar violation",
    "A missing external symbol"
  ],
  answer: [0, 1, 2],
  explain: "Type, grammar and linkage errors belong to later stages."
},
{
  id: "cd-184",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "mcq",
  q: "How should a lexical error be reported?",
  options: [
    "With a line number and a message",
    "Silently ignored",
    "As a linker error",
    "By aborting the whole compilation without explanation"
  ],
  answer: 0,
  explain: "A good diagnostic names the line and the problem."
},
{
  id: "cd-185",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "msq",
  q: "Which recovery strategies can the analyzer use after a lexical error?",
  options: [
    "Skip the offending character or token",
    "Replace the bad token",
    "Insert a token to continue processing",
    "Terminate the compilation immediately",
    "Ask the linker to resolve it"
  ],
  answer: [0, 1, 2],
  explain: "Skip, replace or insert — recovery exists so one error does not hide the rest of the file."
},
{
  id: "cd-186",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "fib",
  q: "The usual first step in error handling is to ______ the error.",
  answer: ["report", "report."],
  explain: "Report it with a line number and message."
},
{
  id: "cd-187",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "fib",
  q: "Recovery strategies are: skip, replace, or ______ a token to continue processing.",
  answer: ["insert", "insert."],
  explain: "Skip, replace, or insert."
},
{
  id: "cd-188",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "mcq",
  q: "In the notes' example, the '@' character is handled by:",
  options: [
    "Reporting \"invalid character\" and then skipping it to continue",
    "Stopping the compilation",
    "Treating '@' as an identifier character",
    "Passing it to the linker"
  ],
  answer: 0,
  explain: "Report, then skip — so one bad character does not hide everything after it."
},
{
  id: "cd-189",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "msq",
  q: "Why does error recovery matter in the lexical analyzer?",
  options: [
    "A single bad character should not stop the whole compilation",
    "It lets the compiler report several errors in one run",
    "It keeps the remaining tokens available to the parser",
    "It guarantees the program is correct",
    "It replaces the need for a syntax analyzer"
  ],
  answer: [0, 1, 2],
  explain: "Recovery improves diagnostics; it does not make the program correct."
},
{
  id: "cd-190",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "mcq",
  q: "An unterminated string literal is best described as:",
  options: [
    "A lexical error, because the closing quote is never found",
    "A syntax error in the grammar",
    "A link error",
    "A semantic type error"
  ],
  answer: 0,
  explain: "The scanner cannot match the token, so it is a lexical error."
},
{
  id: "cd-191",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "msq",
  q: "Which are the three parts of the notes' lexical error approach?",
  options: ["Detection", "Handling (reporting)", "Recovery", "Code generation", "Linking"],
  answer: [0, 1, 2],
  explain: "Detect, report, recover — the other two belong to later stages."
},
{
  id: "cd-192",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "mcq",
  q: "Which stage notices that '@' matches no token pattern?",
  options: ["Lexical error detection", "Code optimization", "Linking", "Loading"],
  answer: 0,
  explain: "Only the scanner inspects individual characters."
},
{
  id: "cd-193",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "fib",
  q: "Lexical error handling has three parts: detection, handling, and ______.",
  answer: ["recovery", "recovery."],
  explain: "Recovery keeps the compilation going after the error."
},
{
  id: "cd-194",
  unit: 1,
  topic: "Lexical Error Handling",
  type: "mcq",
  q: "Why does the analyzer report the line number?",
  options: [
    "So the programmer can locate and fix the offending character or token",
    "To satisfy the linker",
    "Because the symbol table requires it",
    "To compute the hash of the file"
  ],
  answer: 0,
  explain: "Precise location is what makes a diagnostic actionable."
},

/* ================= THE FULL LEXICAL CHAIN ================= */
{
  id: "cd-195",
  unit: 1,
  topic: "The Lexical Chain",
  type: "mcq",
  q: "Which chain best captures the lexical-analysis story in the notes?",
  options: [
    "Lexical analyzer → tokens/lexemes/patterns → regular expressions → finite automata → RE→ε-NFA→NFA→DFA → DFA minimization → LEX/FLEX → implementation → error handling",
    "Parser → grammar → parse tree → object code → linker → loader",
    "Preprocessor → compiler → assembler → linker → loader",
    "Scanner → optimizer → register allocator → executable"
  ],
  answer: 0,
  explain: "Topics 6–14 form one coherent pipeline."
},
{
  id: "cd-196",
  unit: 1,
  topic: "The Lexical Chain",
  type: "fib",
  q: "Putting it together, a regular expression is first converted to an ε-NFA by ______'s construction, then to an NFA, then to a DFA.",
  answer: ["thompson", "thompson's"],
  explain: "The first of the three conversion steps."
},
{
  id: "cd-197",
  unit: 1,
  topic: "The Lexical Chain",
  type: "msq",
  q: "Which of these belong to the lexical-analysis chain of the syllabus?",
  options: [
    "Role of the lexical analyzer",
    "Tokens, lexemes and patterns",
    "Regular expressions",
    "Finite automata (DFA/NFA)",
    "Conversion RE → ε-NFA → NFA → DFA",
    "Minimization of DFA",
    "LEX/FLEX generators",
    "Lexical error handling",
    "Designing the grammar of a language"
  ],
  answer: [0, 1, 2, 3, 4, 5, 6, 7],
  explain: "Topics 6–14 form the lexical-analysis block. Grammar design belongs to syntax analysis (Unit 2)."
},
{
  id: "cd-198",
  unit: 1,
  topic: "The Lexical Chain",
  type: "mcq",
  q: "Why does the syllabus concentrate so heavily on lexical analysis?",
  options: [
    "Because topics 6–14 form one coherent chain from patterns to automata to tools",
    "Because parsing is not examinable",
    "Because the compiler has only one phase",
    "Because optimization is not covered this term"
  ],
  answer: 0,
  explain: "Recognize token patterns and automate them — that is the bulk of Unit 1."
},
{
  id: "cd-199",
  unit: 1,
  topic: "The Lexical Chain",
  type: "msq",
  q: "Which statements tie the chain together correctly?",
  options: [
    "Patterns are written as regular expressions",
    "Regular expressions are converted into automata",
    "Automata drive the actual scanning of characters",
    "DFA minimization reduces the table size",
    "Minimization changes the accepted language",
    "LEX/FLEX automates writing the rules"
  ],
  answer: [0, 1, 2, 3, 5],
  explain: "Minimization preserves the language — it only shrinks the machine."
},
{
  id: "cd-200",
  unit: 1,
  topic: "The Lexical Chain",
  type: "mcq",
  q: "A complete lexical analyzer, from specification to a working scanner, is produced by:",
  options: [
    "Writing the patterns, running LEX/FLEX, then compiling and linking the generated code",
    "Running the linker on a .l file",
    "Optimizing the parse tree",
    "Executing the .l file directly"
  ],
  answer: 0,
  explain: "Specify → generate → compile → link → test."
}
);
