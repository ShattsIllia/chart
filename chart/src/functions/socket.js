import io from "socket.io-client";

export const socket = io("ws://localhost:3001", {
    transports: ["websocket", "polling"] // use WebSocket first, if available
});