interface TimerProps {
  params: {
    room_id: string;
    time: string;
  };
}

export default function Timer({ params }: TimerProps) {
  const date = new Date(parseInt(params.time));

  return <div>{params.time}</div>;
}
