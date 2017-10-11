import idAsKeys from './idAsKeys'
import { assert } from 'chai'
import { describe, it } from 'utilities/mocha'

const { isOk } = assert

describe('idAsKeys', () => {
  it('Should be defined', () => {
    isOk({ items: idAsKeys })
  })

  // it('Should have the correct properties', () => {
  //   const items
  //   const { api, icon, id, key, name, pluralName, toString } = TYPE['USER'];

  //   isOk(api);
  //   isOk(id);
  //   isOk(icon);
  //   isOk(key);
  //   isOk(name);
  //   isOk(pluralName);
  //   isOk(toString);
  // });
})
