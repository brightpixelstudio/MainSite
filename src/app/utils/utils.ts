 // Plain exported functions
export function formatDateToIso(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6;
}

export function truncateString(str: string, maxLength: number): string {
  // If the string is already short enough, return it as-is
  if (str.length <= maxLength) {
    return str;
  }

  // Account for the 3 characters of the ellipsis
  const ellipsis = '...';
  return str.slice(0, maxLength - ellipsis.length) + ellipsis;
}


