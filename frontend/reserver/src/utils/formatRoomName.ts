export function formatRoomName(roomName: string): string {
  return roomName.replace(/%20/g, " ");
}
