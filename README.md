# Compiler Design — Mid-Semester Practice Drill

B.Tech Year 4 · Semester 7 · JG University

## Open it

Double-click `index.html`. No server, no install, no internet needed.

## Scope

Built from `PDF/Compiler_Design_Notes.pdf` and `PDF/Exact Mid Term Syllabus.txt`.

The exact mid-term syllabus lists **14 examinable topics**, concentrated on lexical
analysis. All 14 are covered:

| # | Topic | Questions |
|---|---|---|
| 1 | Language Processors | 14 |
| 2 | Compiler Structure | 14 |
| 3 | Phases of Compilation | 13 |
| — | Preprocessor (from the class notes) | 11 |
| 4 | Compiler Construction Tools | 10 |
| 5 | Bootstrapping | 22 |
| — | Frontend analysis (from the class notes) | 15 |
| 6 | Role of Lexical Analyzer | 8 |
| 7 | Tokens, Lexemes and Patterns | 12 |
| 8 | Regular Expressions | 15 |
| 9 | Finite Automata | 9 |
| 10 | Conversion of RE to NFA and DFA | 12 |
| 11 | Minimization of DFA | 11 |
| 12 | LEX/FLEX Generators | 12 |
| 13 | Implementation of Lexical Analyzers | (in LEX/FLEX) |
| 14 | Lexical Error Handling | 13 |

197 questions — 113 MCQ, 39 MSQ, 45 fill in the blank.

The class notes also cover **Unit 2 (syntax analysis)** — CFGs, ambiguity, left
recursion and left factoring, top-down and bottom-up parsing, LR(0)/SLR(1)/CLR(1)/
LALR(1), and YACC/Bison. That is **not** in the exact mid-term list, so it is not in
this bank.

## Formats

| Format | How it works |
|---|---|
| **MCQ** | Pick one option. |
| **MSQ** | Two or more options are correct — you must select every right one. A missed pick fails the question. |
| **Fill in the blank** | Type the answer. Capitalisation, punctuation and extra spaces are ignored, and several wordings are accepted. |

## Modes

- **Practice** — feedback and the explanation appear the moment you check.
- **Mock** — nothing is revealed until you finish, like the real paper.

## Other controls

- Filter by topic and format; choose 10, 20, 40 or all questions.
- **Shuffle** or keep **notes order**.
- Keyboard: `1`–`9` pick or toggle options, `Enter` checks, `→` goes to the next question.
- Progress is stored in the browser, so **only questions you answered wrong before** and
  **rehearse the ones I missed** will drill your weak spots.
- **Erase my saved progress** clears the record.

## Files

| File | Contents |
|---|---|
| `index.html` | Page structure |
| `styles.css` | Ledger-paper theme |
| `app.js` | Quiz logic, scoring, review, saved progress |
| `questions-cd-a.js` | Syllabus topics 1–5 — processors, phases, preprocessor, compiler structure, tools, bootstrapping |
| `questions-cd-b.js` | Syllabus topics 6–11 — lexical analyzer, tokens/lexemes/patterns, regex, automata, RE→DFA, minimization |
| `questions-cd-c.js` | Syllabus topics 12–14 — LEX/FLEX, implementation, error handling, the full chain |

Add new questions to any `questions-*.js` file by pushing an object onto
`window.Q_BANK`; the counts, topic chips and filters update themselves.

```js
{
  id: "cd-x01", unit: 1, topic: "DFA Minimization", type: "mcq",
  q: "Question text?",
  options: ["A", "B", "C", "D"],
  answer: 1,            // index for mcq, array of indexes for msq
  explain: "Why."
}
```

For `type: "fib"` use `answer: ["accepted wording", "alternative"]` and drop `options`.
