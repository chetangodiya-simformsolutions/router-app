export function redirectSystemPath({
  path,
  initial,
}: {
  path: string;
  initial: string;
}) {
  try {
    if (path.includes('drawer')) {
      return '(drawer)/';
    }
    if (initial) {
      console.log(path, ' path');
      // While the parameter is called `path` there is no guarantee that this is a path or a valid URL
      console.log(initial, 'intial');
      // Detection of third-party URLs will change based on the provider
      return path;
    }
    return path;
  } catch {
    // Do not crash inside this function! Instead you should redirect users
    // to a custom route to handle unexpected errors, where they are able to report the incident
    return '/unexpected-error';
  }
}
