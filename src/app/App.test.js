import { render, screen } from "@testing-library/react";
import Home from "../features/home/Home";
import Cards from "../features/cards/Cards";
import Result from "./components/Result";
import { Provider } from "react-redux";
import store  from "./store";



test("Renders the landing page", () => {
  render(
    <Provider store={ store }>
      <Home />
    </Provider>
  );
  
  expect(screen.getByRole("heading")).toHaveTextContent(/matching cards/);
  expect(screen.getByRole("button")).toBeInTheDocument();
});


test("Renders playing cards", () => {
  const { container } = render(
    <Provider store={ store }>
      <Cards />
    </Provider>
  );
  
  expect(container.getElementsByClassName("card").length).toBe(24);
  expect(container.getElementsByTagName("img").length).toBe(24);
});


test("Renders the landing page", () => {
  render(
    <Provider store={ store }>
      <Result />
    </Provider>
  );
  
  expect(screen.getByRole("heading")).toHaveTextContent(/result/);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
