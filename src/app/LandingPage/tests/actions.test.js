import { testAction } from "../actions";

describe("testAction", () => {
  const testObject = testAction();
  it("should be the same", () => {
    expect(testObject).toEqual({ type: "TEST_ACTION" });
  });
});
