const REM_DEFAULT_SIZE = 16;

export const remToPx = (rem: string) => `${parseFloat(rem) * REM_DEFAULT_SIZE}px`;
