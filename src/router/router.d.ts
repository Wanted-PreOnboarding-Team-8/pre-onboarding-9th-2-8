interface IRouter {
  path: string;
  title: string;
}

export type RouterMetaType = {
  [key: string]: IRouter;
};
