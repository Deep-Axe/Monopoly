// Runtime configuration for PeerJS signaling and room code salting.
// Adjust these values to match your signaling server setup.
// Use PeerJS Cloud for public deployments (no private keys embedded).
const CODE_PREFIX = "ga-prod-"; // change to a unique prefix for your deployment
const PEER_SERVER_HOST = "0.peerjs.com"; // PeerJS Cloud host
const PEER_SERVER_PORT = 443; // HTTPS/WSS
const PEER_SECURE = true; // GH Pages is HTTPS, so use secure websockets
const PEER_DEBUG_LEVEL = 1; // 0=silent, up to 3=verbose

export default {
	CODE_PREFIX,
	PEER_SERVER_HOST,
	PEER_SERVER_PORT,
	PEER_SECURE,
	PEER_DEBUG_LEVEL,
};
