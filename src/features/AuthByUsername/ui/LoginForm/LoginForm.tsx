import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
    className?: string
}

const LoginForm: FC<LoginFormProps> = ({ className = '' }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                label={t('Type Username') ?? ''}
                id={'username'}
                name={'username'}
                autoFocus={true}
                autoComplete='off'
            />
            <Input
                type="text"
                label={t('Type Password') ?? ''}
                id={'password'}
                name={'password'}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.BACKGROUND}
            >
                {t('Login')}
            </Button>
        </div>
    );
};

export { LoginForm };
