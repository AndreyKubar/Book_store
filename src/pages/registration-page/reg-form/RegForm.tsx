import React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm, SubmitHandler, Controller, useFormState } from "react-hook-form";
import { Container, SButton, SForm, Subtitle } from "../../auth-page/auth-form/AuthForm.styled";

interface IRegForm {
  fullname: string;
  email: string;
  dob: string;
  password: string;
}


const schema = yup.object({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  dob : yup.date().required(),
  password: yup.string().required("Please provide a valid password"),
}).required();

export const RegForm: React.FC = () => {


  const {register, handleSubmit, control } = useForm<IRegForm>({
    resolver: yupResolver(schema)
  });
  const { errors } = useFormState({ 
      control
  })

  const onSubmit: SubmitHandler<IRegForm> = data => console.log(data);

  return (
    <Container>
    <Typography variant="h4" component="div">
        Зарегистрируйтесь
    </Typography>
    <Subtitle>
    <Typography variant="subtitle1" gutterBottom component="div" >
        Чтобы получить доступ
    </Typography>
    </Subtitle>
    <SForm onSubmit={handleSubmit(onSubmit)}>
        <Controller
            {...register("fullname")} 
            control={control}
            name="fullname"
            render={({ field }) => (
                <TextField
                    label="Полное имя"
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    fullWidth={ true }
                    size="small"
                    margin="normal"
                    className="auth-form__input"
                    error={!!errors.fullname?.message}
                    helperText={ errors?.fullname?.message }
                />
            )}
        />
                <Controller
                {...register("email")}
            control={control}
            name="email"
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
                {...register("dob")} 
            control={control}
            name="dob"
            render={({ field }) => (
                <TextField
                    label="Дата рождения"
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    fullWidth={ true }
                    size="small"
                    margin="normal"
                    className="auth-form__input"
                    error={!!errors.dob?.message}
                    helperText={ errors?.dob?.message }
                />
            )}
        />
        <Controller
        {...register("password")} 
            control={control}
            name="password"
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
            Зарегистрироваться
        </Button>
    </SForm>

    <SButton>
        <Typography variant="subtitle1" component="span">
            Есть аккаунт? {" "}
        </Typography>
        <Typography variant="subtitle1" component="span" >
            Войти
        </Typography>
    </SButton>
</Container>
  );
}

export default RegForm;

