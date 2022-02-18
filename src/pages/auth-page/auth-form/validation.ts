const REQUIRED_FIELD = 'Обязательно для заполнения';

export const emailValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
            return 'Неправильный адрес электронной почты'
        }
  
        return true;
    }
  };

export const passwordValidation = {
    required: REQUIRED_FIELD,
    validate: (value: string) => {
        if(value.length < 6) {
            return 'Пароль должен быть длиннее 6-ти символов'
        }

        return true;
    }
};