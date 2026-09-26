# TypeScript + Jest template

Learning project for test automation with TypeScript and Jest.

The project includes four simple examples:

- `Account` — a positive initial balance creates an `ACTIVE` account, while a
  zero or negative balance creates a `PENDING` account.
- `User` — store a name and age, verify the user, and check whether the user is
  an adult. Its test file contains test placeholders for future exercises.
- `Card` — a bank card with a daily limit, blocking, number hiding
  and payments. Its test file already has a `beforeEach` that creates
  the card, and most tests are `// TODO` placeholders to fill in.
- `RiskCalculator` — calculates a `LOW`, `MEDIUM` or `HIGH` risk level for an
  `Application` by its balance: up to 10 000 is `LOW`, up to 25 000 is
  `MEDIUM`, above that (or a negative balance) is `HIGH`. Its test file has
  three suites (one for each risk level), and the application for each is created in
  `test/helper/application.helpers.ts`.
