import { Faker } from '..';
import ne from '../locales/ne';
import en from '../locales/en';

const faker = new Faker({
  locale: 'ne',
  localeFallback: 'en',
  locales: {
    ne,
    en,
  },
});

export = faker;
