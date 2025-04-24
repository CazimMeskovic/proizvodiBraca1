// components/MultiStepForm.js

import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

const MultiStepForm = ({ onNext, onSubmit }) => {
    const validationSchema = Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        package: Yup.string().required("Please select a package"),
    });

    return (
        <Formik
            initialValues={{ name: "", email: "", package: "" }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched }) => (
                <Form>
                    <div>
                        <Field type="text" name="name" placeholder="Name" />
                        {errors.name && touched.name && <div>{errors.name}</div>}
                    </div>
                    <div>
                        <Field type="email" name="email" placeholder="Email" />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <Field as="select" name="package">
                            <option value="">Select a package</option>
                            <option value="starter">Starter</option>
                            <option value="growth">Growth</option>
                            <option value="empire">Empire</option>
                        </Field>
                        {errors.package && touched.package && <div>{errors.package}</div>}
                    </div>
                    <div>
                        <button type="submit">Next</button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default MultiStepForm;
