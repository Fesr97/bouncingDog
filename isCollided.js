
export function isCollided(a, b) {
  if (a.x + a.w > b.x && a.x < b.x + b.w) {
    if (a.y + a.h > b.y && a.y < b.y + b.h) {
      return true;
    }
  }
  return false;
}
// sto collidendo