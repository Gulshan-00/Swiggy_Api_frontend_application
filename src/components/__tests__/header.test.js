import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"

 it("Should load the header with a login button",()=>{

    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton=screen.getByRole("button",{name:"login"});
    expect(loginButton).toBeInTheDocument();
 })

 it("Should render header component with the cart item 0",()=>{

    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    // const cartItem=screen.getByText("Cart (0 items)");
    const cartItem=screen.getByText(/Cart/);  //we can also write regex here only in text
    expect(cartItem).toBeInTheDocument();
 })

 it("Should chnage to login button to logot on click",()=>{

    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton= screen.getByRole("button",{name:"login"});

    fireEvent.click(loginButton);

    const logoutButton= screen.getByRole("button",{name: "logout"});

    expect(logoutButton).toBeInTheDocument();
 })