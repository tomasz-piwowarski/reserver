import Image from "next/image";
import Slide from "./Slide";

function UserSlide1() {
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
        <p>Scan the QR code.</p>
      </div>
    </Slide>
  );
}

function UserSlide2() {
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
        <p>If you are not logged in, please log in or create an account.</p>
      </div>
    </Slide>
  );
}

function UserSlide3() {
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
        <p>Set a time and reserve a room.</p>
      </div>
    </Slide>
  );
}

function UserSlide4() {
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
        <p>That's it, the timer will appear. </p>
      </div>
    </Slide>
  );
}

export default [<UserSlide4 />, <UserSlide3 />, <UserSlide2 />, <UserSlide1 />];
