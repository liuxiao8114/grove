import { matchPath, matchBasePath } from '';

function* matchRoute(route, baseUrl, path){
  let match;

  if(!route.children){
    match = matchPath(route.path, path);
    if(match){
      yield {
        route,
        baseUrl,
        path: match.path,
        keys: match.keys,
        params: match.params
      };
    }
  }

  if(route.children){
    match = matchBasePath(route.path, path);
    if(match){
      yield {
        route,
        baseUrl,
        path: match.path,
        keys: match.keys,
        params: match.params
      };


    }
  }
}

export default matchRoute;
