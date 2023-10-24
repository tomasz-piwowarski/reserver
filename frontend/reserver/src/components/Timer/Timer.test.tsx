import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import EndReservationButton from "./EndReservationEarlier";
import Timer from "./Timer";
import { toast } from "react-hot-toast";
import { DJANGO_URL } from "@/utils/consts";

describe("Countdown component", () => {
  it("renders countdown component", () => {
    const startTime = 1635248400000;
    const endTime = 1635252000000;
    const reservationID = "1234";
    const token = "token1234";

    const { getByText } = render(
      <Timer
        startTime={startTime}
        endTime={endTime}
        reservationID={reservationID}
        token={token}
      />
    );

    const countdownElement = getByText("Finished!");
    expect(countdownElement).toBeInTheDocument();
  });
});

jest.mock("react-hot-toast", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

global.fetch = jest.fn();

describe("EndReservationButton Component", () => {
  it("renders end reservation button", () => {
    const reservationID = "1234";
    const access = "access1234";

    const { getByText } = render(
      <EndReservationButton reservationID={reservationID} access={access} />
    );

    const buttonElement = getByText("End reservation");
    expect(buttonElement).toBeInTheDocument();
  });

  it("calls endReservationEarlier function when button is clicked", async () => {
    const reservationID = "1234";
    const access = "access1234";

    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const { getByText } = render(
      <EndReservationButton reservationID={reservationID} access={access} />
    );

    const buttonElement = getByText("End reservation");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `${DJANGO_URL}/api/reservations/${reservationID}/`,
        expect.objectContaining({
          method: "PATCH",
          body: JSON.stringify({
            ended_earlier: true,
          }),
        })
      );
    });

    expect(toast.success).toHaveBeenCalledWith(
      "Reservation has been ended earlier"
    );
    expect(toast.error).not.toHaveBeenCalled();
  });

  it("displays an error toast on fetch failure", async () => {
    const reservationID = "1234";
    const access = "access1234";

    (fetch as jest.Mock).mockRejectedValueOnce({
      ok: false,
      message: "Network Error",
    });

    const { getByText } = render(
      <EndReservationButton reservationID={reservationID} access={access} />
    );

    const buttonElement = getByText("End reservation");

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        `${DJANGO_URL}/api/reservations/${reservationID}/`,
        expect.objectContaining({
          method: "PATCH",
          body: JSON.stringify({
            ended_earlier: true,
          }),
        })
      );
    });

    setTimeout(() => {
      expect(toast.success).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalledWith("Network Error");
    }, 100);
  });
});
