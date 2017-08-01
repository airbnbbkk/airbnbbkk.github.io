type Languages = 'en' | 'ko' | 'cn' | 'th';
type InfoByLang<T> = {
  default?: T;
  en?: T;
  ko?: T;
  cn?: T;
  th?: T;
};
