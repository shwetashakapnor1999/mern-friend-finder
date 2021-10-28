import React from "react";
import Contact from "../Pages/Contact";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("Contact form renders successfully", () => {
  const { getByTestId } = render(<Contact />);
  const headerEl = getByTestId("header");
  console.log("Contact Page Check header check", headerEl.textContent);
  expect(headerEl.textContent).toBe("Leave a Message");
});

test("Name is validated", () => {
  const { getByTestId } = render(<Contact />);
  const namecheck = getByTestId("name_checker");
  console.log("Contact Page send Button", namecheck.textContent);
  expect(namecheck.textContent).toBe("Send a Message");
});
