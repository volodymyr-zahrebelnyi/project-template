import { Formik, Form, Field } from "formik";
import { useId } from "react";

const initialValues = {
  picked: "",
  username: "",
  email: "",
  outdatedPassword: "",
  newPassword: "",
  repeatNewPassword: "",
};

export const SettingUser = () => {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const outdatedPasswordFielId = useId();
  const newPasswordFielId = useId();
  const repeatNewPasswordFielId = useId();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <div>
      <h1>Setting</h1>
      <Formik initialValues={{ initialValues }} onSubmit={handleSubmit}>
        <Form>
          <div>
            <h2>Your gender identity</h2>
            <label>
              <Field type="radio" name="picked" checked={true} value="Woman" />
              Woman
            </label>
            <label>
              <Field type="radio" name="picked" value="Man" />
              Man
            </label>
          </div>

          <div>
            <label htmlFor={usernameFieldId}>Your name</label>
            <Field type="text" name="username" id={usernameFieldId} />

            <label htmlFor={emailFieldId}>E-mail</label>
            <Field type="email" name="email" id={emailFieldId} />
          </div>

          <div>
            <h2>Password</h2>
            <label htmlFor={outdatedPasswordFielId}>Outdated password:</label>
            <Field
              type="password"
              name="outdatedPassword"
              placeholder="Password"
              id={outdatedPasswordFielId}
            />

            <label htmlFor={newPasswordFielId}>New password:</label>
            <Field
              type="password"
              name="newPassword"
              placeholder="Password"
              id={newPasswordFielId}
            />

            <label htmlFor={repeatNewPasswordFielId}>
              Repeat new password:
            </label>
            <Field
              type="password"
              name="repeatNewPassword"
              placeholder="Password"
              id={repeatNewPasswordFielId}
            />
          </div>

          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  );
};
