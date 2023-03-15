import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./Form1440375.module.scss";
import FormHeading from "../FormHeading/FormHeading";
import Image from "next/image";
import mark from "../../assets/Mark.svg";
import visa from "../../assets/Avatars/Visa.svg";
import select from "../../assets/Avatars/ic-actions-select.svg";
import paypal from "../../assets/Avatars/PayPal.svg";
import bitcoin from "../../assets/Avatars/Bitcoin.svg";
import multi from "../../assets/Avatars/multi.svg";
import security from "../../assets/Avatars/ic-security-safety.svg";
import GooglePayButton from "@google-pay/button-react";
import { useRouter } from "next/router";
import StripeCheckout from "react-stripe-checkout";
const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];
type dropownProps = {
  options: any;
  field: any;
  form: any;
};
const Dropdown = ({ options, field, form }: dropownProps) => {
  const { setFieldValue } = form;
  const { name } = field;
  return (
    <select
      name={name}
      {...field}
      onChange={(e) => setFieldValue(name, e.target.value)}
      className={styles.dropdown}
    >
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
// const [data,setData] = useState({
//   name: "",
//   address: "",
//   phoneNumber: "",
//   dropdown: ""
// })
// export const formData = data
export default function Form1440375() {
  /**PAYTM CODE STARTS */
  const router = useRouter();
  const onToken = (token: any) => {
    router.push("/status");
    console.log(token);
    sessionStorage.setItem("token", JSON.stringify(token));
    // actions.setSubmitting(false);
  };
  /**PAYTM CODE ENDS */
  return (
    <div className={styles.main}>
      <Formik
        initialValues={{
          id: 65238421,
          name: "",
          address: "",
          phoneNumber: "",
          location: "",
          dropdown: "option1",
        }}
        onSubmit={(values, actions) => {
          // your submit logic here
          // setData(values)
          console.log(values);
          // var item_value = sessionStorage.getItem("item_key");

          // Assign value to a key
          sessionStorage.setItem("values", JSON.stringify(values));
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            {/** Billing Info Section */}
            <div className={styles.billingInfo}>
              <FormHeading
                heading="Billing Info"
                action="Please enter your billing info"
                step={1}
              />
              <div className={styles.basicDetails}>
                <div className={styles.field0}>
                  <label className={styles.label} htmlFor="name">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    label="Name"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field0}>
                  <label className={styles.label} htmlFor="name">
                    Address
                  </label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Address"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field0}>
                  <label className={styles.label} htmlFor="name">
                    Phone Number
                  </label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className={styles.input}
                  />
                </div>
                <div className={styles.field0}>
                  <label className={styles.label} htmlFor="name">
                    Town/City
                  </label>
                  <Field
                    type="text"
                    name="Town"
                    placeholder="Town/City"
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
            {/* <button type="submit" disabled={isSubmitting}>
            Submit
          </button> */}

            {/** Rental Info Section */}
            <div className={styles.rentalInfo}>
              <FormHeading
                heading="Rental Info"
                action="Please select your rental date"
                step={2}
              />
              <div className={styles.up}>
                <Image src={mark} alt="Mark" className={styles.mark} />
                <span className={styles.text}>Pick-Up</span>
              </div>
              <div className={styles.dropdownWrap}>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="Locations">
                    Locations
                  </label>
                  <Field
                    name="dropdown"
                    component={Dropdown}
                    options={options}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="Date">
                    Date
                  </label>
                  <Field
                    name="dropdown"
                    component={Dropdown}
                    options={options}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="Locations">
                    Time
                  </label>
                  <Field
                    name="dropdown"
                    component={Dropdown}
                    options={options}
                  />
                </div>
              </div>
            </div>
            {/**Payment Method Section */}
            <div className={styles.paymentMethod}>
              <FormHeading
                heading="Payment Method"
                action="Please enter your payment method"
                step={3}
              />
              <div className={styles.onemore}>
                <div className={styles.paymentDetails}>
                  <div className={styles.visa}>
                    <div className={styles.up}>
                      <Image src={mark} alt="Mark" className={styles.mark} />
                      <span className={styles.text}>Credit Card</span>
                    </div>
                    <Image src={visa} alt="visa" />
                  </div>
                  <div className={styles.field0}>
                    <label className={styles.label} htmlFor="name">
                      Card Number
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Card Number"
                      label="Name"
                      className={styles.inputPayment}
                    />
                  </div>
                  <div className={styles.field0}>
                    <label className={styles.label} htmlFor="name">
                      Card Holder
                    </label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Card Holder"
                      className={styles.inputPayment}
                    />
                  </div>
                  <div className={styles.field0}>
                    <label className={styles.label} htmlFor="name">
                      Expiration Number
                    </label>
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="DD/MM/YY"
                      className={styles.inputPayment}
                    />
                  </div>
                  <div className={styles.field0}>
                    <label className={styles.label} htmlFor="name">
                      CVC
                    </label>
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="CVC"
                      className={styles.inputPayment}
                    />
                  </div>
                </div>
                <div className={styles.gatewayDiv}>
                  <div className={styles.gateways}>
                    <span className={styles.payName}>
                      <Image
                        src={select}
                        alt="select"
                        className={styles.select}
                      />
                      PayPal
                    </span>
                    <Image
                      src={paypal}
                      alt="paypal"
                      className={styles.paypal}
                    />
                  </div>
                  <div className={styles.gateways}>
                    <span className={styles.payName}>
                      <Image
                        src={select}
                        alt="select"
                        className={styles.select}
                      />
                      Bitcoin
                    </span>
                    <Image
                      src={bitcoin}
                      alt="paypal"
                      className={styles.paypal}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.confirmation}>
              <FormHeading
                heading="Confirmation"
                action="We are getting to the end. Just few clicks"
                step={4}
              />
              <div className={styles.mailDiv}>
                <div className={styles.mails}>
                  <Image src={multi} alt="multi" className={styles.multi} />
                  <span className={styles.mailText}>
                    I agree with sending an Marketing and newsletter emails. No
                    spam, promissed!
                  </span>
                </div>
                <div className={`${styles.mails} ${styles.tc}`}>
                  <Image src={multi} alt="multi" className={styles.multi} />
                  <span className={styles.mailText}>
                    I agree with our{" "}
                    <span className={styles.underline}>
                      terms and conditions
                    </span>{" "}
                    and <span className={styles.underline}>privacy policy</span>
                    !
                  </span>
                </div>
              </div>
              <div className={styles.button}>
              <StripeCheckout
              token={onToken}
              name="MORENT AKQA"
              currency="INR"
              amount={80}
              stripeKey="pk_test_51MedmWSCB4j4xCoYCAClO3ZBo38BQwErfJM3laz2XyLFtchJS873BQfgSWaamQOb6ap2D33kVFwiNYMCZHj5MXFI00Z50k8cR6"
            />
              </div>
              <div className={styles.securityDiv}>
                <Image
                  src={security}
                  alt="security"
                  className={styles.security}
                />
                <span className={styles.securityHeading}>
                  All your data are safe
                </span>
                <span className={styles.securityText}>
                  We are using the most advanced security to provide you the
                  best experience ever.
                </span>
              </div>
            </div>
            {/* <GooglePayButton
              environment="TEST"
              
              paymentRequest={{
                apiVersion: 2,
                apiVersionMinor: 0,
                allowedPaymentMethods: [
                  {
                    type: "CARD",
                    parameters: {
                      allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                      allowedCardNetworks: ["MASTERCARD", "VISA"],
                    },
                    tokenizationSpecification: {
                      type: "PAYMENT_GATEWAY",
                      parameters: {
                        gateway: "example",
                        gatewayMerchantId: "exampleGatewayMerchantId",
                      },
                    },
                  },
                ],
                merchantInfo: {
                  merchantId: "BCR2DN4T6SL2DN3T",
                  merchantName: "MORENT",
                },
                transactionInfo: {
                  totalPriceStatus: "FINAL",
                  totalPriceLabel: "Total",
                  totalPrice: "1",
                  currencyCode: "USD",
                  countryCode: "US",
                },
                shippingAddressRequired: true,
                callbackIntents: ["PAYMENT_AUTHORIZATION"],
              }}
              onLoadPaymentData={(paymentRequest) => {
                console.log("Success", paymentRequest);
              }}
              onPaymentAuthorized={(paymentData) => {
                console.log("Payment Authorized Success", paymentData);
                return { transactionState: "SUCCESS" };
              }}
              buttonColor="black"
              buttonType="pay"
            /> */}
            {/* <StripeCheckout
              token={onToken}
              name="MORENT AKQA"
              currency="INR"
              amount={80}
              stripeKey="pk_test_51MedmWSCB4j4xCoYCAClO3ZBo38BQwErfJM3laz2XyLFtchJS873BQfgSWaamQOb6ap2D33kVFwiNYMCZHj5MXFI00Z50k8cR6"
            /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
