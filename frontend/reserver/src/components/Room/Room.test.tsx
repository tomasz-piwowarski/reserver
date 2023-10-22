import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import useReserve from "@/hooks/useReserve";

jest.mock("../../hooks/useReserve");

// describe("ReserveClient Component", () => {
//   it("renders component with loading spinner", () => {
//     (useReserve as jest.Mock).mockReturnValue({
//       handleSubmit: jest.fn(),
//       handleSelect: jest.fn(),
//       loading: true,
//     });

//     const { getByTestId } = render(
//       <ReserveClient roomID="123" roomName="Test Room" token="token123" />
//     );

//     const spinnerElement = getByTestId("spinner");
//     expect(spinnerElement).toBeInTheDocument();
//   });
// });
