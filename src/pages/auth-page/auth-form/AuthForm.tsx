import React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import './AuthForm.styled.ts';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { emailValidation, passwordValidation } from './validation';
import { Container, SForm, Subtitle, SButton } from './AuthForm.styled';

interface ISignInForm {
    email: string;
    password: string;
}


const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required("Please provide a valid password"),
  }).required();
  

export const AuthForm: React.FC = () => {
    const {register, handleSubmit, control } = useForm<ISignInForm>({
        resolver: yupResolver(schema)
    });
    const { errors } = useFormState({ 
        control
    })

    const onSubmit: SubmitHandler<ISignInForm> = data => console.log(data);

    return (
        <Container>
            <Typography variant="h4" component="div">
                Войдите
            </Typography>
            <Subtitle>
            <Typography variant="subtitle1" gutterBottom component="div" >
                Чтобы получить доступ
            </Typography>
            </Subtitle>
            <SForm onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    {...register("email")}

                    control={control}
                    name="email"
                    rules={emailValidation}
                    render={({ field }) => (
                        <TextField
                            label="Email"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            className="auth-form__input"
                            error={!!errors.email?.message}
                            helperText={ errors?.email?.message }
                        />
                    )}
                />
                <Controller
                    {...register("password")}

                    control={control}
                    name="password"
                    rules={passwordValidation}
                    render={({ field }) => (
                        <TextField
                            label="Пароль"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            fullWidth={ true }
                            size="small"
                            margin="normal"
                            type="password"
                            className="auth-form__input"
                            error={ !!errors?.password?.message }
                            helperText={ errors?.password?.message }
                        />
                    )}
                />
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth={ true }
                    disableElevation={ true }
                    sx={{
                        marginTop: 2
                    }}
                >
                    Войти
                </Button>
            </SForm>

            <SButton>
                <Typography variant="subtitle1" component="span">
                    Нет аккаунта?{" "}
                </Typography>
                <Typography variant="subtitle1" component="span" >
                    Зарегистрируйтесь
                </Typography>
            </SButton>
        </Container>
    )
}