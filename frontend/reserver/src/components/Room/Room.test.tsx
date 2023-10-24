import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Room from "./Room";
import { getSessionOrRedirect } from "@/utils/session";
import { checkIfRoomReservedOrRedirect } from "@/utils/room";
import RootLayout from "@/app/layout";

jest.mock("../../utils/session", () => ({
  getSessionOrRedirect: jest.fn(async () => ({
    access: "mocked-access-token",
  })),
}));

jest.mock("../../utils/room", () => ({
  checkIfRoomReservedOrRedirect: jest.fn(async () => {}),
}));

jest.mock("next/navigation", () => jest.requireActual("next-router-mock"));

describe("Room Component", () => {
  it("does render", async () => {
    const Result = await Room({
      userID: 123,
      roomID: 123,
      roomName: "Test Room",
    });

    const { container } = render(Result);

    expect(container).toBeInTheDocument();

    expect(getSessionOrRedirect).toHaveBeenCalled();

    expect(checkIfRoomReservedOrRedirect).toHaveBeenCalledWith({
      roomID: 123,
      roomName: "Test Room",
      token: "mocked-access-token",
    });
  });
});
