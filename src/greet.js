export function greet(name) {
  if (typeof name !== 'string' || name.length < 1 || name.length > 40) {
    throw new Error('Name must contain 1 to 40 characters');
  }
  return `Hello, ${name}`;
}
