export default class SessionService {
  constructor() {
    if (!window.sessionStorage) {
      this.supported = false;
    } else {
      this.supported = true;
      console.log("Session storage available");
    }
  }

  createSession(identifier) {
    if (!this.supported) {
      throw new Error("Session storage not supported");
    }
    if (!identifier) {
      throw new Error("Identifier is missing");
    }
    let sessionData = { session_id: identifier };
    window.sessionStorage.setItem("session", JSON.stringify(sessionData));
    return sessionData;
  }

  getSession(identifier) {
    if (!this.supported) {
      throw new Error("Session storage not supported");
    }
    let sessionData = window.sessionStorage.getItem("session");
    if (sessionData) return JSON.parse(sessionData);
    else return this.createSession(identifier);
  }

  isSupported() {
    return this.supported;
  }
}
