export function parseUsername(usernameEntry) {
  const firstArgEntry = (usernameEntry || '').slice(2).split('=');
  if (firstArgEntry.length == 2 && firstArgEntry[0] === 'username') {
    return firstArgEntry[1];
  }
  return 'Anonymous';
}

export function parseInput(input) {
  const res = input.split(' ');
  const command = res[0];
  const args = res.slice(1);

  return {
    command,
    args
  }
}