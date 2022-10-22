import { useFormik } from 'formik';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },


        validate: values => {
            let errors = {};

            if (!values.login) {
                errors.login = 'Введите логин';
            } else if (values.login.length > 10) {
                errors.login = 'Логин может быть не более 10 симовлов';
            }

            if (!values.password) {
                errors.password = 'Введите пароль';
            } else if (
                !/^\d+$/i.test(values.password)
            ) {
                errors.password = 'Пароль может содержать только цифры';
            }

            return errors;
        },

        onSubmit: ({ login, password }) => {
            console.log(login);
            console.log(password);
            console.log(formik);
        }
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="login">Login</label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.login}
                />
                {formik.errors.login ? <div>{formik.errors.login}</div> : null}
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password ? <div>{formik.errors.password}</div> : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Login;