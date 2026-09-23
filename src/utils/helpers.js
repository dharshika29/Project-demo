/**
 * Utility helper functions for the project
 */

// Format date into human-readable format
export function formatDate(date) {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Truncate text with ellipsis
export function truncate(text, maxLength = 50) {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

// Sleep / Delay utility for async simulation
export function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
