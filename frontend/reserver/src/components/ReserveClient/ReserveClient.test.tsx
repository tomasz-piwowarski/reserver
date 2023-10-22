import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import ReserveClient from "./ReserveClient";
import "@testing-library/jest-dom";
import useReserve from "@/hooks/useReserve";
import ReserveForm from "./ReserveForm";

jest.mock("../../hooks/useReserve");

describe("ReserveClient Component", () => {
  it("renders component with loading spinner", () => {
    (useReserve as jest.Mock).mockReturnValue({
      handleSubmit: jest.fn(),
      handleSelect: jest.fn(),
      loading: true,
    });

    const { getByTestId } = render(
      <ReserveClient roomID="123" roomName="Test Room" token="token123" />
    );

    const spinnerElement = getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });

  it("renders component without spinner", () => {
    (useReserve as jest.Mock).mockReturnValue({
      handleSubmit: jest.fn(),
      handleSelect: jest.fn(),
      loading: false,
    });

    const { getByText } = render(
      <ReserveClient roomID="123" roomName="Test Room" token="token123" />
    );

    const spinnerElement = getByText(
      "For how long do you want to reserve the room?"
    );
    expect(spinnerElement).toBeInTheDocument();
  });

  it("calls handleSubmit when form is submitted", async () => {
    const handleSubmitMock = jest.fn((e) => e.preventDefault());

    (useReserve as jest.Mock).mockReturnValue({
      handleSubmit: handleSubmitMock,
      handleSelect: jest.fn(),
      loading: false,
    });

    const { getByText } = render(
      <ReserveClient roomID="123" roomName="Test Room" token="token123" />
    );

    await waitFor(() => {
      const submitButton: HTMLElement | null = getByText("submit");
      fireEvent.click(submitButton!);

      expect(handleSubmitMock).toHaveBeenCalled();
    });
  });
});

describe("ReserveForm component", () => {
  it("should call handleSelectChange when select value changes", () => {
    const handleSelectChange = jest.fn();

    const { getByLabelText } = render(
      <ReserveForm handleSelect={handleSelectChange} handleSubmit={jest.fn()} />
    );

    const selectElement = getByLabelText("Hours:");

    fireEvent.change(selectElement, { target: { value: "2" } });

    expect(handleSelectChange).toBeCalled();
  });
});
