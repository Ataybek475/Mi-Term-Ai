export type RootStackParamList = {
  Главная: undefined;
  Календарь: undefined;
  Фокус: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}