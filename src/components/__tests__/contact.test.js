import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//You can group the test cases for the contact us page using the describe function

describe("All Test Case for the contact page",()=>{

    test("Should load the contact us page",()=>{
        render(<Contact/>);
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument;
    })
    
    test("Should load the submit button us page",()=>{
        render(<Contact/>);
        const submit=screen.getByText("Submit");
        expect(submit).toBeInTheDocument;
    })
    
    test("Should load the placeholder text on the page",()=>{
        render(<Contact/>);
        const placeholderText=screen.getByPlaceholderText("Enter Name")
        expect(placeholderText).toBeInTheDocument;
    })
    
    test("Should load the all input boxes on the page",()=>{
        render(<Contact/>);
        const inputbox=screen.getAllByRole("textbox")
        expect(inputbox.length).toBe(2);
    })

});

