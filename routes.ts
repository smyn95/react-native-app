export const RouteName = {
  HOME_TAB: 'home-tab' as const,
  HOME: 'home' as const,
  SHOPPING: 'shopping' as const,
  BROWSER: 'browser' as const,
};

export type RootStackParamList = {
  [RouteName.HOME_TAB]: undefined;
  [RouteName.BROWSER]: undefined;
};
