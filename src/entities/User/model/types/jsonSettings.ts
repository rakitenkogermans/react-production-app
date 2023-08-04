import { type THEME } from '@/shared/const/theme';

export interface JsonSettings {
    theme?: THEME;
    isFirstVisit?: boolean;
    isArticlesPageWasOpened?: boolean;
}
