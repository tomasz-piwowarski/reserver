import QRCode from "react-qr-code";

interface RoomQRProps {
  value: string;
}

export default function QR({ value }: RoomQRProps) {
  return (
    <QRCode
      size={256}
      style={{ height: "auto", maxWidth: "100%", width: "100%" }}
      value={value}
      viewBox={`0 0 256 256`}
    />
  );
}
