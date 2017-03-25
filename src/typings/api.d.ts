interface GoogleApi {
  auth2: {
    getAuthInstance: () => {
      signIn: () => any;
      isSignedIn: {
        listen: (...arg: any[]) => void;
        get: () => boolean;
      }
      currentUser: any;
    }
  };
  load: (...arg: any[]) => any;
  client: {
    init: (...arg: any[]) => Promise<any>;
  };
}
