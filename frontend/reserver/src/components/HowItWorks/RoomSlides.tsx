import Image from "next/image";
import Slide from "./Slide";

function RoomSlide1() {
  return (
    <Slide>
      <div className="flex flex-col w-full mx-auto text-white font-medium pt-20 break-words text-center">
        <Image
          src="/signin.png"
          width={568}
          height={556}
          alt="Sign in form"
          className="mx-auto mb-6 w-64 h-64 rounded-md"
        />
        <p className="px-4">
          First, log in or create an account, remember that the account must
          belong to the Rooms group.
        </p>
      </div>
    </Slide>
  );
}

function RoomSlide2() {
  return (
    <Slide>
      <div className="flex flex-col w-full mx-auto text-white font-medium pt-20 break-words text-center">
        <p>You can also use premade account.</p>
        <p>Login: room1</p>
        <p>Password: testpassword</p>
      </div>
    </Slide>
  );
}

function RoomSlide3() {
  return (
    <Slide>
      <div className="flex flex-col w-full mx-auto text-white font-medium pt-20 break-words text-center">
        <Image
          src="/qr.png"
          width={431}
          height={426}
          alt="Room QR code"
          className="mx-auto mb-6 w-64 h-64 rounded-md"
        />
        <p>Then a QR code will be displayed which the user must scan.</p>
      </div>
    </Slide>
  );
}

function RoomSlide4() {
  return (
    <Slide>
      <div className="flex flex-col w-full mx-auto text-white font-medium pt-20 break-words text-center">
        <Image
          src="/timer.png"
          width={532}
          height={544}
          alt="Room QR code"
          className="mx-auto mb-6 w-64 h-64 rounded-md"
        />
        <p className="w-4/5 mx-auto">
          That's it, the timer will appear. When the reserving time ends, the QR
          code will be displayed again.
        </p>
      </div>
    </Slide>
  );
}

export default [<RoomSlide1 />, <RoomSlide2 />, <RoomSlide3 />, <RoomSlide4 />];
