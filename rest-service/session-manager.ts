import { Login, Session } from './models/login';

export class SessionManager {

    protected static sessionManager: SessionManager | undefined = undefined;
    private sessions: Session[] = [];

    public constructor() { 
        console.log('SessionManager');
    }


    private compareLogins(rhs: Login, lhs: Login): boolean {
        if (rhs == null || lhs == null) {
            return false;
        }

        return  rhs.clientId == lhs.clientId &&
                rhs.clientName == lhs.clientName &&
                rhs.username == lhs.username &&
                rhs.password == lhs.password; 
    }


    //
    // SessionManager instance
    public static get instance(): SessionManager {
        return SessionManager.sessionManager 
            ? SessionManager.sessionManager
            : SessionManager.sessionManager = new SessionManager();
    }

    //
    // get / create a session
    public getSession(login: Login): Session {
        let session = this.sessions.find(s => this.compareLogins(s.login, login));
        if (session != null) {
            return session;
        }
        session = new Session(login);
        this.sessions.push(session);
        return session;
    }

    //
    // remove a session
    public removeSession(session: Session): void {
        const pos = this.sessions.indexOf(session);
        if (pos > -1) {
            this.sessions.splice(pos, 1);
        }
    }
}