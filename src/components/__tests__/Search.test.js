import { render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../MOCK_DATA/FetchMockdata.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:  ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should render the body component with search box", async ()=>{


    await act(async ()=>render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    ));
    

    const search=screen.getByRole("button", {name:"Search"});

    expect(search).toBeInTheDocument();

});