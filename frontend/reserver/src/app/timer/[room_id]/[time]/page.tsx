interface TimerProps {
  params: {
    room_id: string;
    time: string;
  };
}

export default function Timer({ params }: TimerProps) {
  console.log(params);
  const date = new Date(parseInt(params.time));
  console.log(date, new Date());

  return <div>{params.time}</div>;
}
