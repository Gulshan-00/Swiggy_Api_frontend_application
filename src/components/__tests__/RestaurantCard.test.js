import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestauranCard"
import MOCK_DATA from "../MOCK_DATA/resCardMock.json"
import "@testing-library/jest-dom"

it("SHould render restaurant component with the props",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);
    
    const resName= screen.getByText("Makers of Milkshakes");
    expect(resName).toBeInTheDocument();

})
