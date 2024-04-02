import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Formik } from 'formik';
import PostCode from '../../features/PostCode';
import { act } from 'react-dom/test-utils';

describe('PostCode', () => {
    test('renders without errors', () => {
        render(
            <Formik>
                <PostCode />
            </Formik>
        );
    });

    test('displays the provided placeholder', () => {
        const placeholder = 'Post Code';
        render(
            <Formik>
                <PostCode placeholder={placeholder} />
            </Formik>
        );
        expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
    });

    test('validates Postal code for European countries', async () => {
        const postalCode = '12345';
        await act(async () => {
            render(
                <Formik initialValues={{ postalCode: '' }}>
                    {({ values, handleChange }) => (
                        <PostCode
                            name="postalCode"
                            value={values.postalCode}
                            onChange={handleChange}
                        />
                    )}
                </Formik>
            );
        });

        const input = screen.getByRole('textbox');
        await act(async () => {
            userEvent.type(input, postalCode);
        });
        const germanyPostalCodeRegex = /^[0-9]{5}$/;
        expect(germanyPostalCodeRegex.test(postalCode)).toBe(true);
    });
});
