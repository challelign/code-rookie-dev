/**
 * Creates a mouse move handler that calculates the angle between the center of the card
 * and the current mouse position, then sets that angle as a CSS variable on the card.
 *
 * @param {React.MutableRefObject} cardRefs - Ref object holding references to DOM elements.
 * @param {number} index - Index of the current card in the list.
 * @returns {(e: MouseEvent) => void} - Mouse move event handler function.
 */
export const createHandleMouseMove = (cardRefs, index) => (e) => {
  // Get the DOM element for the current card using the index
  const card = cardRefs.current[index];
  if (!card) return;

  // Get the card's position and size relative to the viewport
  const rect = card.getBoundingClientRect();

  // Calculate mouse position relative to the center of the card
  const mouseX = e.clientX - rect.left - rect.width / 2;
  const mouseY = e.clientY - rect.top - rect.height / 2;

  // Calculate the angle between the mouse and the center of the card (in degrees)
  let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

  // Normalize the angle to a value between 0 and 360
  angle = (angle + 360) % 360;

  // Set the angle as a CSS variable on the card (used for glow direction/effect)
  card.style.setProperty("--start", angle + 60);
};
