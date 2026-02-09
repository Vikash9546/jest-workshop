# Jest Workshop Submission

## Student Details
- Name: Vikash Kumar
- Roll Number: 2024-B-01022006A
- GitHub Username:Vikash9546

---

## Tests Written

List each test you wrote and briefly explain **what bug or regression it prevents**.

### 1. Test Name: no coupon case
**What it protects against:**  
Ensures that the base calculation is correct and that the 5% bulk discount is applied correctly when the subtotal is ₹1000 or more, even without a coupon.

---

### 2. Test Name: SAVE10 coupon
**What it protects against:**  
Prevents regressions in the 10% discount logic and strictly ensures that the maximum discount cap of ₹100 is never exceeded.

---

### 3. Test Name: FLAT50 boundary case
**What it protects against:**  
Protects against errors in applying flat discounts and ensures the final amount never becomes negative (e.g., when subtotal is less than ₹50).

---

### 4. Test Name: invalid subtotal throws error
**What it protects against:**  
Ensures the system correctly handles and rejects invalid inputs like strings or negative values, preventing unexpected behavior or data corruption.

---

### 5. Test Name: case-insensitive coupon
**What it protects against:**  
Prevents bugs where valid coupons are rejected due to casing differences, ensuring a robust user experience (e.g., "save10" works as well as "SAVE10").

---

## CI Pipeline (if implemented)
- Did CI pass successfully? Yes
- GitHub Actions Run URL: https://github.com/Vikash9546/jest-workshop/actions

---

## Reflection (1–2 lines)
I understood how CI/CD pipelines automate testing on every push, ensuring that any breaking changes are caught immediately before they reach production.

