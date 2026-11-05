export function authenticate(username, password) {
  if (!username || !password) {
    throw new Error("Credentials are required");
  }
  return { user: username, authenticated: true };
}
