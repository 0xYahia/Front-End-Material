export interface Server {
  id: number,
  name: string,
  status: string
}

export interface serverInfo extends Omit<Server, 'id'> {

}

export class ServersService {
  private servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  getServers(): Server[] {
    return this.servers;
  }

  getServer(id: number): Server {
    const SERVER: Server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    return SERVER;
  }

  updateServer(id: number, serverInfo: serverInfo): void {
    const SERVER: Server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (SERVER) {
      SERVER.name = serverInfo.name;
      SERVER.status = serverInfo.status;
    }
  }
}
