const { calculateFinalAmount } = require("../src/pricing");

describe("calculateFinalAmount", () => {
    test("no coupon case", () => {
        expect(calculateFinalAmount(100)).toBe(100);
        expect(calculateFinalAmount(1000)).toBe(950); // With bulk discount
    });

    test("SAVE10 coupon", () => {
        expect(calculateFinalAmount(200, "SAVE10")).toBe(180);
        expect(calculateFinalAmount(1000, "SAVE10")).toBe(850); // Bulk + coupon (max 100)
    });

    test("FLAT50 boundary case", () => {
        expect(calculateFinalAmount(100, "FLAT50")).toBe(50);
        expect(calculateFinalAmount(40, "FLAT50")).toBe(0); // Boundary: result stays at 0
    });

    test("invalid subtotal throws error", () => {
        expect(() => calculateFinalAmount(-10)).toThrow("Invalid subtotal");
        expect(() => calculateFinalAmount("abc")).toThrow("Invalid subtotal");
    });

    test("case-insensitive coupon", () => {
        expect(calculateFinalAmount(200, "save10")).toBe(180);
        expect(calculateFinalAmount(100, "flat50")).toBe(50);
    });
});
