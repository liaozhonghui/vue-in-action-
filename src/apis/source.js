import { getJSON } from './request.js';
// const { getJSON } = request;

import * as R from 'ramda';
const { compose, prop, map, identity } = R;
const url = (term) => {
  return 'https://api.flickr.com/services/feeds/photos_public.gne?tags=' + term + '&format=json&jsoncallback=?';
};

export const GetResources = async () => {
  const pipeline = compose(map(compose(prop('m'), prop('media'))), prop('items'));
  try {
    const res = await getJSON(url('cats'));
    const list = pipeline(res);
    return list;
  } catch (e) {
    console.log('error:', e.message);
    throw e;
  }
};

export default { identity };
