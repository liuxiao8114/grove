/* eslint-disable no-unused-expressions */
import toRegExp from 'path-to-regexp';

const cache = new Map();

function match(path, urlPath){
  let key = `${path}`;
  let keys = [];
  let regExp = cache.get(key);

  if(regExp === null){
    regExp = {pattern: toRegExp(path, keys), keys};
    cache.set(key, regExp);
  }

  const m = regExp.pattern.exec();

  if(!m){
    return null;
  }
}

export const matchBasePath = '';
export const matchPath = '';

/* eslint-enable no-unused-expressions */
