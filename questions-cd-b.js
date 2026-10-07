/* Compiler Design — Unit 1: lexical analysis (the exam's core chain).
   Role of the lexical analyzer, tokens/lexemes/patterns, regular expressions,
   finite automata, RE → ε-NFA → NFA → DFA, DFA minimization.
   Source: Exact Mid Term Syllabus.txt topics 6–11 */
window.Q_BANK = window.Q_BANK || [];
window.Q_BANK.push(
/* ================= ROLE OF LEXICAL ANALYZER ================= */
{
  id: "cd-100",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "mcq",
  q: "What does a lexical analyzer read?",
  options: ["The character stream from the source code", "The parse tree", "The symbol table", "The object file"],
  answer: 0,
  explain: "Scanning starts from raw characters."
},
{
  id: "cd-101",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "mcq",
  q: "What does a lexical analyzer produce for the parser?",
  options: ["Tokens", "Assembly mnemonics", "Machine instructions", "Linker symbols"],
  answer: 0,
  explain: "It feeds tokens to the syntax analyzer — nothing else sees characters."
},
{
  id: "cd-102",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "mcq",
  q: "Which of the following does the lexical analyzer remove from the source?",
  options: ["White spaces and comments", "Identifiers", "Keywords", "Operators"],
  answer: 0,
  explain: "Whitespace and comments carry no syntactic meaning."
},
{
  id: "cd-103",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "fib",
  q: "For the input \"int x\", the lexical analyzer produces [INT] [______].",
  answer: ["id", "identifier", "the id"],
  explain: "\"int\" is a keyword token, \"x\" is an identifier token."
},
{
  id: "cd-104",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "fib",
  q: "The component that converts a character stream into tokens is the lexical ______.",
  answer: ["analyzer", "analyser", "scanner", "the lexical analyzer"],
  explain: "Also called the scanner."
},
{
  id: "cd-105",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "msq",
  q: "What are the jobs of the lexical analyzer?",
  options: [
    "Read the character stream from source code",
    "Group characters into tokens",
    "Remove white spaces and comments",
    "Feed tokens to the parser",
    "Generate machine code",
    "Resolve external references"
  ],
  answer: [0, 1, 2, 3],
  explain: "Code generation and linking happen later in the chain."
},
{
  id: "cd-106",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "msq",
  q: "Why are white spaces and comments removed during lexical analysis?",
  options: [
    "They carry no syntactic meaning for the parser",
    "They would otherwise become spurious tokens",
    "The grammar describes significant tokens only",
    "They are needed by the linker",
    "They must be converted to machine code"
  ],
  answer: [0, 1, 2],
  explain: "Keeping them would inject meaningless tokens into the stream."
},
{
  id: "cd-107",
  unit: 1,
  topic: "Role of Lexical Analyzer",
  type: "mcq",
  q: "Which is the correct hand-off between the two front-end analyses?",
  options: [
    "Lexical analyzer → token stream → syntax analyzer",
    "Syntax analyzer → tokens → lexer",
    "Lexer → object file → linker",
    "Parser → machine code → loader"
  ],
  answer: 0,
  explain: "Tokens in, parse tree out."
},

/* ================= TOKENS, LEXEMES & PATTERNS ================= */
{
  id: "cd-108",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "mcq",
  q: "A token is:",
  options: [
    "A category of a lexeme — for example ID, INT or +",
    "The actual character sequence in the source",
    "The rule that matches a lexeme",
    "A line of assembly code"
  ],
  answer: 0,
  explain: "Token = category; lexeme = the characters; pattern = the rule."
},
{
  id: "cd-109",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "mcq",
  q: "A lexeme is:",
  options: [
    "The actual sequence of characters in the source that forms the token",
    "The class of a token",
    "The regular expression that matches it",
    "The index in the symbol table"
  ],
  answer: 0,
  explain: "For ID the lexeme is \"x\"; for INT it is \"123\"."
},
{
  id: "cd-110",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "mcq",
  q: "A pattern is:",
  options: [
    "The rule that describes which character sequences match a token",
    "The text matched by the rule",
    "The token category",
    "A transition function"
  ],
  answer: 0,
  explain: "The pattern is the specification, the lexeme is what it matched."
},
{
  id: "cd-111",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "mcq",
  q: "For the identifier token, which pair is correct?",
  options: [
    "Lexeme: x — Pattern: [a-zA-Z][a-zA-Z0-9]*",
    "Lexeme: [a-zA-Z][a-zA-Z0-9]* — Pattern: x",
    "Lexeme: ID — Pattern: x",
    "Lexeme: x — Pattern: 123"
  ],
  answer: 0,
  explain: "A letter followed by any number of letters or digits."
},
{
  id: "cd-112",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "mcq",
  q: "For the integer token 123, the pattern is:",
  options: ["[0-9]+", "[a-zA-Z]+", "[+]", "[0-9]*"],
  answer: 0,
  explain: "One or more digits — a '+' means at least one, not zero."
},
{
  id: "cd-113",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "mcq",
  q: "For the PLUS token '+', the pattern is:",
  options: ["[+]", "[+]+", "[0-9]+", "[a-zA-Z]*"],
  answer: 0,
  explain: "A literal plus inside brackets matches exactly one '+'."
},
{
  id: "cd-114",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "fib",
  q: "The category of a lexeme is called a ______.",
  answer: ["token", "the token"],
  explain: "Token = category of lexeme."
},
{
  id: "cd-115",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "fib",
  q: "The rule that matches a token is called its ______.",
  answer: ["pattern", "the pattern"],
  explain: "Pattern — the specification of the token class."
},
{
  id: "cd-116",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "fib",
  q: "For the identifier token, the pattern is [a-zA-Z][a-zA-Z0-9]______ .",
  answer: ["*", "*."],
  explain: "The trailing * allows zero or more letters/digits after the first character."
},
{
  id: "cd-117",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "msq",
  q: "Which statements are true?",
  options: [
    "A token is a category such as ID or INT",
    "A lexeme is the actual character sequence",
    "A pattern is the rule that matches a token",
    "For \"int x\", the tokens are [INT] and [ID]",
    "A pattern and a lexeme are the same thing"
  ],
  answer: [0, 1, 2, 3],
  explain: "Pattern is the rule; lexeme is the matched text."
},
{
  id: "cd-118",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "mcq",
  q: "Why is a token called a category rather than a string?",
  options: [
    "Many different lexemes can belong to the same token category",
    "Tokens are always shorter than lexemes",
    "Strings cannot be compared",
    "The parser needs the string value"
  ],
  answer: 0,
  explain: "\"x\" and \"total\" are different lexemes but the same token ID."
},
{
  id: "cd-119",
  unit: 1,
  topic: "Tokens, Lexemes & Patterns",
  type: "msq",
  q: "Which are token categories in a typical language?",
  options: ["ID", "INT", "Keyword", "PLUS operator", "Parse tree node", "Symbol table entry"],
  answer: [0, 1, 2, 3],
  explain: "Parse trees and symbol table entries are structures, not token categories."
},

/* ================= REGULAR EXPRESSIONS ================= */
{
  id: "cd-120",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "A regular expression is:",
  options: [
    "A compact way to describe patterns in strings",
    "A parser generator",
    "A data structure for symbol tables",
    "An intermediate representation"
  ],
  answer: 0,
  explain: "REs describe token patterns compactly."
},
{
  id: "cd-121",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "In a regular expression, '|' means:",
  options: ["OR", "concatenation", "zero or more", "grouping"],
  answer: 0,
  explain: "Alternation — one of the alternatives."
},
{
  id: "cd-122",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "In a regular expression, '*' means:",
  options: ["Zero or more repetitions", "One or more repetitions", "Optional", "OR"],
  answer: 0,
  explain: "* = Kleene star — zero or more."
},
{
  id: "cd-123",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "In a regular expression, '+' means:",
  options: ["One or more repetitions", "Zero or more repetitions", "OR", "Grouping"],
  answer: 0,
  explain: "+ = one or more."
},
{
  id: "cd-124",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "In a regular expression, '?' means:",
  options: ["Optional (zero or one)", "One or more", "Zero or more", "OR"],
  answer: 0,
  explain: "The preceding item becomes optional."
},
{
  id: "cd-125",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "In a regular expression, '()' is used for:",
  options: ["Grouping", "OR", "Repetition", "Commenting"],
  answer: 0,
  explain: "Parentheses group a sub-expression so operators apply to the whole group."
},
{
  id: "cd-126",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "The regular expression (a|b)*abb means:",
  options: [
    "Any number of a's or b's followed by abb",
    "Exactly three characters",
    "a, b and abb with no repetition",
    "Any string ending in a or b"
  ],
  answer: 0,
  explain: "(a|b)* is any number of a's and b's, then the literal suffix abb."
},
{
  id: "cd-127",
  unit: 1,
  topic: "Regular Expressions",
  type: "fib",
  q: "In a regular expression, the '|' operator stands for ______.",
  answer: ["or", "or (alternation)", "alternation", "logical or"],
  explain: "OR / alternation."
},
{
  id: "cd-128",
  unit: 1,
  topic: "Regular Expressions",
  type: "fib",
  q: "The regular expression operator meaning zero or more is ______.",
  answer: ["*", "the star", "kleene star", "* (kleene star)"],
  explain: "Kleene star."
},
{
  id: "cd-129",
  unit: 1,
  topic: "Regular Expressions",
  type: "fib",
  q: "The regular expression operator meaning one or more is ______.",
  answer: ["+", "the plus", "plus"],
  explain: "'+' means one or more repetitions."
},
{
  id: "cd-130",
  unit: 1,
  topic: "Regular Expressions",
  type: "fib",
  q: "The regular expression operator making the preceding item optional is ______.",
  answer: ["?", "the question mark", "question mark"],
  explain: "'?' means zero or one occurrence."
},
{
  id: "cd-131",
  unit: 1,
  topic: "Regular Expressions",
  type: "msq",
  q: "Which operators appear in the regular expression notation of the notes?",
  options: [
    "| for OR",
    "* for 0 or more",
    "+ for 1 or more",
    "? for optional",
    "() for group",
    "# for comment",
    "@ for reference"
  ],
  answer: [0, 1, 2, 3, 4],
  explain: "Five operators — # and @ are not RE operators."
},
{
  id: "cd-132",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "Why is the regular expression useful to a lexical analyzer?",
  options: [
    "It compactly specifies the pattern for each token class",
    "It executes the program",
    "It generates machine code",
    "It replaces the parser"
  ],
  answer: 0,
  explain: "Patterns describe token classes; the analyzer turns them into automata."
},
{
  id: "cd-133",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "What does the expression [0-9]+ match?",
  options: [
    "One or more digits",
    "Zero or more digits",
    "Exactly zero digits",
    "Any single non-digit character"
  ],
  answer: 0,
  explain: "[0-9] is a single digit class and + requires at least one."
},
{
  id: "cd-134",
  unit: 1,
  topic: "Regular Expressions",
  type: "mcq",
  q: "What does the expression [a-zA-Z][a-zA-Z0-9]* match in an identifier?",
  options: [
    "A letter, followed by any number of letters or digits",
    "Any single letter",
    "Only digits",
    "A letter followed by exactly one digit"
  ],
  answer: 0,
  explain: "First character must be a letter; the rest may continue as letters or digits."
},

/* ================= FINITE AUTOMATA ================= */
{
  id: "cd-135",
  unit: 1,
  topic: "Finite Automata",
  type: "mcq",
  q: "A finite automaton has:",
  options: [
    "A finite number of states and transitions driven by input symbols",
    "An infinite state space",
    "No input symbols",
    "Only one state"
  ],
  answer: 0,
  explain: "\"Finite\" refers to the state set; input symbols drive transitions."
},
{
  id: "cd-136",
  unit: 1,
  topic: "Finite Automata",
  type: "mcq",
  q: "Which two types of finite automaton are named in the notes?",
  options: [
    "DFA — Deterministic Finite Automata, and NFA — Non-deterministic Finite Automata",
    "PDA and TM",
    "DFA and PDA",
    "NFA and LBA"
  ],
  answer: 0,
  explain: "The lexical-analysis pair is DFA and NFA."
},
{
  id: "cd-137",
  unit: 1,
  topic: "Finite Automata",
  type: "mcq",
  q: "The key difference between a DFA and an NFA is:",
  options: [
    "A DFA has exactly one transition per state per symbol; an NFA may have several or none",
    "A DFA has infinite states",
    "An NFA cannot accept any string",
    "A DFA is always smaller than an NFA"
  ],
  answer: 0,
  explain: "Determinism is the defining difference, not size."
},
{
  id: "cd-138",
  unit: 1,
  topic: "Finite Automata",
  type: "fib",
  q: "DFA stands for Deterministic Finite ______.",
  answer: ["automata", "automaton", "automata."],
  explain: "Deterministic Finite Automata."
},
{
  id: "cd-139",
  unit: 1,
  topic: "Finite Automata",
  type: "fib",
  q: "NFA stands for Non-deterministic Finite ______.",
  answer: ["automata", "automaton", "automata."],
  explain: "Non-deterministic Finite Automata."
},
{
  id: "cd-140",
  unit: 1,
  topic: "Finite Automata",
  type: "msq",
  q: "Which are true of a DFA?",
  options: [
    "It is deterministic — one transition per state per input symbol",
    "It accepts exactly the same language as the equivalent NFA",
    "It is what a lexer ultimately uses",
    "It can have multiple transitions on the same symbol from one state",
    "It must have an infinite number of states"
  ],
  answer: [0, 1, 2],
  explain: "Multiple transitions on a symbol is exactly what a DFA forbids."
},
{
  id: "cd-141",
  unit: 1,
  topic: "Finite Automata",
  type: "msq",
  q: "Why are finite automata used in lexical analysis?",
  options: [
    "They recognize exactly the regular languages that token patterns form",
    "They can be built directly from a regular expression",
    "A DFA decides, for each next character, what the longest matching token is",
    "They can parse arbitrary context-free grammars",
    "They replace the parser entirely"
  ],
  answer: [0, 1, 2],
  explain: "Regular expressions match token patterns; context-free grammars need a parser."
},
{
  id: "cd-142",
  unit: 1,
  topic: "Finite Automata",
  type: "mcq",
  q: "Which statement about NFAs is correct?",
  options: [
    "An NFA may have multiple transitions for the same symbol and may have none",
    "An NFA is always deterministic",
    "An NFA cannot recognise empty transitions",
    "An NFA has more states than any DFA for the same language"
  ],
  answer: 0,
  explain: "Non-determinism means several or zero transitions are permitted."
},
{
  id: "cd-143",
  unit: 1,
  topic: "Finite Automata",
  type: "mcq",
  q: "Can an NFA recognise a language that a DFA cannot?",
  options: [
    "No — any NFA language has an equivalent DFA",
    "Yes — only NFA can accept the empty string",
    "Yes — NFAs accept infinitely more languages",
    "Only for languages with more than 100 states"
  ],
  answer: 0,
  explain: "Regular languages are closed under this transformation — NFAs and DFAs recognise the same set."
},

/* ================= RE → NFA → DFA ================= */
{
  id: "cd-144",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "mcq",
  q: "What is the overall conversion path from a regular expression to a DFA?",
  options: [
    "RE → ε-NFA → NFA → DFA",
    "RE → DFA → NFA → ε-NFA",
    "RE → PDA → CFG → DFA",
    "RE → AST → machine code"
  ],
  answer: 0,
  explain: "Three standard steps, each with a named construction."
},
{
  id: "cd-145",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "mcq",
  q: "Step 1 — converting a RE to an ε-NFA — uses which construction?",
  options: ["Thompson's construction", "Subset construction", "Table-filling method", "Hopcroft's algorithm"],
  answer: 0,
  explain: "Thompson's construction builds an ε-NFA directly from the expression."
},
{
  id: "cd-146",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "mcq",
  q: "Step 2 converts an ε-NFA into an NFA by:",
  options: ["Removing ε-transitions", "Adding more states", "Merging all states", "Sorting the transitions"],
  answer: 0,
  explain: "Eliminate the ε-moves so only symbol transitions remain."
},
{
  id: "cd-147",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "mcq",
  q: "Step 3 converts an NFA into a DFA using:",
  options: ["Subset construction", "Thompson's construction", "Table-filling method", "Backtracking"],
  answer: 0,
  explain: "Subset construction — each DFA state is a set of NFA states."
},
{
  id: "cd-148",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "mcq",
  q: "In subset construction, what does one DFA state represent?",
  options: [
    "A set of NFA states that the machine could be in simultaneously",
    "A single input character",
    "One regular expression",
    "One lexical error"
  ],
  answer: 0,
  explain: "That is exactly how non-determinism collapses into determinism."
},
{
  id: "cd-149",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "fib",
  q: "Converting a regular expression to an ε-NFA is done by ______'s construction.",
  answer: ["thompson", "thompson's", "thompson"],
  explain: "Thompson's construction."
},
{
  id: "cd-150",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "fib",
  q: "Converting an NFA to a DFA is done by the subset ______.",
  answer: ["construction", "construction."],
  explain: "Subset construction."
},
{
  id: "cd-151",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "fib",
  q: "The second step of the pipeline removes ______-transitions to obtain an NFA.",
  answer: ["epsilon", "ε", "e"],
  explain: "Remove the ε (empty) transitions."
},
{
  id: "cd-152",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "msq",
  q: "Which conversion techniques are named in the notes?",
  options: [
    "Thompson's construction (RE → ε-NFA)",
    "Removing ε-transitions (ε-NFA → NFA)",
    "Subset construction (NFA → DFA)",
    "Hopcroft's minimisation (DFA → minimal DFA)",
    "Backtracking parser",
    "LALR construction"
  ],
  answer: [0, 1, 2, 3],
  explain: "The last two are parsing techniques, not regex conversion steps."
},
{
  id: "cd-153",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "msq",
  q: "Which statements about subset construction are correct?",
  options: [
    "Each DFA state is a set of NFA states",
    "The start state is the ε-closure of the NFA start state",
    "Accepting DFA states are those sets containing an NFA accepting state",
    "It can produce more states than the NFA had",
    "It requires the NFA to be deterministic first"
  ],
  answer: [0, 1, 2, 4],
  explain: "Subset construction removes non-determinism — it never requires a deterministic input."
},
{
  id: "cd-154",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "mcq",
  q: "Why remove ε-transitions before subset construction?",
  options: [
    "A DFA's transitions must be driven by input symbols alone",
    "ε-transitions create infinite NFA states",
    "ε-NFAs cannot be minimized",
    "The parser cannot handle ε"
  ],
  answer: 0,
  explain: "Determinism is defined over input symbols."
},
{
  id: "cd-155",
  unit: 1,
  topic: "RE to DFA Conversion",
  type: "msq",
  q: "What is the correct order of the three conversion steps?",
  options: [
    "First convert the RE to an ε-NFA",
    "Then remove the ε-transitions to get an NFA",
    "Then apply subset construction to get a DFA",
    "First build the DFA, then the NFA",
    "Then minimize before reaching an NFA"
  ],
  answer: [0, 1, 2],
  explain: "RE → ε-NFA → NFA → DFA. Minimization comes after the DFA exists."
},

/* ================= DFA MINIMIZATION ================= */
{
  id: "cd-156",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "The goal of DFA minimization is to:",
  options: [
    "Remove equivalent states, producing the smallest DFA that accepts the same language",
    "Add states so every state is reachable",
    "Convert the DFA into an NFA",
    "Remove all accepting states"
  ],
  answer: 0,
  explain: "Fewer states, identical language."
},
{
  id: "cd-157",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "Which techniques for minimizing a DFA are named in the notes?",
  options: [
    "The partitioning method and the table-filling method",
    "Backtracking and recursion",
    "Dynamic programming only",
    "Thompson's construction"
  ],
  answer: 0,
  explain: "Two classic hand-calculable methods."
},
{
  id: "cd-158",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "Two states are equivalent when:",
  options: [
    "For every input string they either both accept or both reject",
    "They have the same state number",
    "They are both accepting",
    "They are reached by the same character"
  ],
  answer: 0,
  explain: "Equivalent states are indistinguishable with respect to acceptance."
},
{
  id: "cd-159",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "In the partitioning method, the first split is normally between:",
  options: [
    "Accepting (final) states and non-accepting states",
    "Reachable states and unreachable states",
    "States with one transition and states with two",
    "Start state and all others"
  ],
  answer: 0,
  explain: "A final state differs from a non-final state on the empty string."
},
{
  id: "cd-160",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "In the table-filling method, you mark a pair of states when:",
  options: [
    "They can be distinguished by some input string — they are NOT equivalent",
    "They are both accepting states",
    "They are equivalent",
    "They share a transition"
  ],
  answer: 0,
  explain: "A marked pair is a distinguishable pair, so it cannot be merged."
},
{
  id: "cd-161",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "After minimization, the DFA will have:",
  options: ["The fewest possible states for the same language", "More states than before", "No accepting state", "Only ε-transitions"],
  answer: 0,
  explain: "Minimization never changes the accepted language."
},
{
  id: "cd-162",
  unit: 1,
  topic: "DFA Minimization",
  type: "fib",
  q: "Minimization removes ______ states from a DFA.",
  answer: ["equivalent", "the equivalent", "equivalent states"],
  explain: "Merge equivalent states into one."
},
{
  id: "cd-163",
  unit: 1,
  topic: "DFA Minimization",
  type: "fib",
  q: "The two methods named for minimizing a DFA are partitioning and ______ filling.",
  answer: ["table", "table."],
  explain: "Table-filling method."
},
{
  id: "cd-164",
  unit: 1,
  topic: "DFA Minimization",
  type: "msq",
  q: "Which are true of DFA minimization?",
  options: [
    "The result is the smallest DFA with the same language",
    "It does not change which strings are accepted",
    "It uses partitioning or table filling",
    "It can reduce a DFA to a single state",
    "It changes the language to something simpler"
  ],
  answer: [0, 1, 2, 3],
  explain: "The accepted language is invariant — that is the guarantee."
},
{
  id: "cd-165",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "Why minimize a DFA produced for a lexer?",
  options: [
    "Fewer states means a smaller transition table, which is faster to execute",
    "It makes the DFA non-deterministic",
    "It removes the need for patterns",
    "It changes the accepted language"
  ],
  answer: 0,
  explain: "Lexers run on every character — table size matters."
},
{
  id: "cd-166",
  unit: 1,
  topic: "DFA Minimization",
  type: "mcq",
  q: "Why is the first partition in the partitioning method made on acceptance?",
  options: [
    "A final state and a non-final state are distinguished by the empty string",
    "Final states have more transitions",
    "It is the convention with no reason",
    "Final states are always reachable first"
  ],
  answer: 0,
  explain: "The empty string distinguishes them immediately."
}
);
