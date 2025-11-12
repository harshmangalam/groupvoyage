export const logger = {
  info: (...args: [any, ...any[]]) => console.info(...args),
  warn: (...args: [any, ...any[]]) => console.warn(...args),
  error: (error: unknown, context: Record<string, any> = {}) => {
    console.error(error, context);
  },
};
