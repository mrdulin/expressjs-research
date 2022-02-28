function saySecret() {
  return '🤫';
}

export function outer() {
  return saySecret();
}
