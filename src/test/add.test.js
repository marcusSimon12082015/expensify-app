const add = (a,b) => a + b;

const generateGreeting = (name = 'Anonymous') => {
  return `Hello ${name}!`;
}

test('should add 2 numbers',() => {
  const result = add(3,4);
  expect(result).toBe(7);
});

test('Should print out Mike',() => {
  const greeting = generateGreeting('Mike');
  const n = 'Hello Mike!';
  expect(greeting).toBe(n);
});

test('Should generate greetings with anonymous',() => {
  const greeting = generateGreeting();
  expect(greeting).toBe('Hello Anonymous!');
});
