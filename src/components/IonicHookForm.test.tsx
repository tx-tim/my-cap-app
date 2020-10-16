import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ionFireEvent } from "@ionic/react-test-utils";
import IonicHookForm, {initialUser} from "./IonicHookForm";


describe("renders with default values", () => {
  it("shows all required input fields with initial values", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const firstNameField = getByTestId("firstname-field") as HTMLInputElement;
    //screen.debug(baseElement);
    expect(firstNameField.value).toBe(null);
  });

  it("shows all required input fields with initial values", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const middleNameField = getByTestId("middlename-field") as HTMLInputElement;
    //screen.debug(baseElement);
    expect(middleNameField.value).toBe(null);
  });
    it("shows all required input fields with initial values", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const lastNameField = getByTestId("lastname-field") as HTMLInputElement;
    //screen.debug(baseElement);
    expect(lastNameField.value).toBe(null);
  });
});

describe("RTL fireEvent on ion-input", () => {
  it("change on firstname", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const firstNameField = getByTestId("firstname-field") as HTMLInputElement;
    fireEvent.change(firstNameField, { target: { detail: { value: "Princess" } } });
    expect(firstNameField.value).toBe("Princess");
  });
    
  it("input on firstname", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const firstNameField = getByTestId("firstname-field") as HTMLInputElement;
    fireEvent.input(firstNameField, { target: { detail: { value: "Princess" } } });
    expect(firstNameField.value).toBe("Princess");
  });

  it("custom ionChange on firstname", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const firstNameField = getByTestId("firstname-field") as HTMLInputElement;
    fireEvent(
      firstNameField,
      //@ts-ignore
      new CustomEvent("ionChange", { target: { detail: { value: "Princess" }}}));
    expect(firstNameField.value).toBe("Princess");
  });
});

describe("IRTU ionFireEvent on ion-input", () => {
  it("ionChange event on middlename", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const middleNameField = getByTestId("middlename-field") as HTMLInputElement;
    ionFireEvent.ionChange(middleNameField, "Leia");
    //screen.debug(baseElement);
    expect(middleNameField.value).toBe("Leia");
  });

  it("ionInput event on middlename", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const middleNameField = getByTestId("middlename-field") as HTMLInputElement;
    ionFireEvent.ionInput(middleNameField, "Leia");
    expect(middleNameField.value).toBe("Leia");
  });
});

describe("IRTU ionFireEvent on rfh Controller", () => {
  it("ionChange event on lastName", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const lastNameField = getByTestId("lastName-field") as HTMLInputElement;
    ionFireEvent.ionChange(lastNameField, "Organa");
    //screen.debug(baseElement);
    expect(lastNameField.value).toBe("Organa");
  });

  it("ionInput event on lastName", () => {
    const {baseElement, getByTestId} = render(<IonicHookForm />);
    const lastNameField = getByTestId("lastName-field") as HTMLInputElement;
    ionFireEvent.ionInput(lastNameField, "Organa");
    expect(lastNameField.value).toBe("Organa");
  });
});
