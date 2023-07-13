import { type Country } from '../../../Country/model/types/country';
import { type Currency } from '../../../Currency/model/types/currency';

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    currency?: Currency;
    country?: Country;
    city?: string;
    username?: string;
    avatar?: string;
}
