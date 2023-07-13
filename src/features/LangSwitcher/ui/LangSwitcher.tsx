import { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

const LangSwitcher = memo(({ className = '', short = false }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        void i18n.changeLanguage(i18n.language === 'en' ? 'lv' : 'en').then();
    };

    return (
        <Button
            theme={ButtonTheme.BACKGROUND}
            onClick={toggle}
            size={ButtonSize.M}
        >
            {short ? t('Language Code') : t('Language')}
        </Button>
    );
});

export { LangSwitcher };
