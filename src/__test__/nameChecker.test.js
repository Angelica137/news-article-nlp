import { checkForName } from "../client/js/nameChecker";

describe("checkForName function", () => {
  test("should return 'Welcome, Captain!' if inputText is in name array", () => {
    const inputText = "Picard";
    const expectedAlertMessage = "Welcome, Captain!";

    global.alert = jest.fn();

    checkForName(inputText);

    expect(global.alert).toHaveBeenCalledWith(expectedAlertMessage);
  });
  test("should not call alert if inputText is not in the name array", () => {
    const inputText = "Sisko";

    global.alert = jest.fn();
    checkForName(inputText);
    expect(global.alert).not.toHaveBeenCalledWith();
  });
});
