import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';
import { createTheme, ThemeProvider, Theme, StyledEngineProvider, adaptV4Theme } from '@mui/material';

import { TextField } from '../TextField';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


test('TextField Renders Correctly', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field component={TextField} name="test" label="Text" />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Outlined TextField', () => {
  const component = renderer.create(
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <Field
          component={TextField}
          name="test"
          label="Text"
          variant="outlined"
        />
      </Form>
    </Formik>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Override TextField Theme Variant', () => {
  const theme = createTheme(adaptV4Theme({
    props: {
      MuiTextField: {
        variant: 'outlined',
      },
    },
  }));

  const component = renderer.create(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Formik initialValues={{}} onSubmit={() => {}}>
          <Form>
            <Field component={TextField} name="test" label="Text" />
          </Form>
        </Formik>
      </ThemeProvider>
    </StyledEngineProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
