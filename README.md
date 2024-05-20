# Assert

## Features

1. Accepts optional message or message getter/factory. Message getter/factory is only evaluated when assertion fails.
```ts
expect(assert(false, 'Message')).toThrow('Message')
expect(assert(false, () => 'Lazy message')).toThrow('Lazy Message')
```

2. Excludes itself from the stack trace.
```ts
// File example.ts
function example() {
  assert(false)
}

// Throws the following stack trace
// AssertionError
//   example.ts:2:3
```

3. Optionally allows passing in function from which stack trace should be captured if environment supports `Error.captureStackTrace`.
```ts
// File example.ts
function example1() {
  return example2()
}

function example2() {
  assert(false, 'Example error message', example2) // Exclude example2 from stack trace
}

// Throws the following stack trace
// AssertionError
//   example.ts:2:3
```