import { RxStompService } from './rx-stomp.service';
import { niRxStompConfig } from '../../ni-rx-stomp.config';

export function rxStompServiceFactory() {
  const rxStomp = new RxStompService();
  rxStomp.configure(niRxStompConfig);
  rxStomp.activate();
  return rxStomp;
}
