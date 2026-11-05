import { authenticate, validateToken } from './authService.js';

console.assert(validateToken("Bearer 12345") === true, "Valid token failed");
console.assert(validateToken("InvalidToken") === false, "Invalid token passed");
