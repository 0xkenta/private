import { describe, it, expect } from "bun:test";
import { main } from "./index";

describe("main function", () => {
  it("should be defined", () => {
    expect(main).toBeDefined();
  });

  it("should return undefined", () => {
    const result = main();
    expect(result).toBeUndefined();
  });

  it("should execute without errors", () => {
    expect(() => main()).not.toThrow();
  });

  it("should log to console", () => {
    const consoleSpy = { called: false, message: "" };
    const originalLog = console.log;

    console.log = (...args: unknown[]) => {
      consoleSpy.called = true;
      consoleSpy.message = args.join(" ");
    };

    main();

    console.log = originalLog;

    expect(consoleSpy.called).toBe(true);
    expect(consoleSpy.message).toBe("starting.....");
  });
});
