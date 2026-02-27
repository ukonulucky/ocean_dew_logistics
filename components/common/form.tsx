"use client";
import { useState } from "react";
import ReusableModal from "./reusableModal";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAppContext } from "@/context/useAppContext";

// Validation Schema
export const quoteSchema = Yup.object({
  name: Yup.string().min(2, "Name is too short").required("Name is required"),
  companyName: Yup.string().required("Company name is required"),
  consignee: Yup.string().required("Consignee is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Invalid phone number")
    .required("Phone number is required"),
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  productDescription: Yup.string().required("Product description is required"),
  quantity: Yup.number()
    .positive("Must be a positive number")
    .required("Quantity is required"),
  weight: Yup.string().required("Weight is required"),
  billOfLading: Yup.string().required("Bill of lading/airway bill is required"),
  packingList: Yup.string().required("Packing list is required"),
  containerSize: Yup.string().required("Container size is required"),
  hsCode: Yup.string().required("HS code is required"),
  fobCif: Yup.string()
    .oneOf(["FOB", "CIF"], "Must be FOB or CIF")
    .required("FOB/CIF is required"),
  countryOfOrigin: Yup.string().required("Country of origin is required"),
  countryOfDestination: Yup.string().required(
    "Country of destination is required",
  ),
  deliveryLocation: Yup.string().required("Delivery location is required"),
});
export default function FormQuote() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const { showForm, setShowForm } = useAppContext();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     // Your API call here
  //     console.log("Form submitted:", formData);

  //     // Reset form and close modal
  //     setFormData({ name: "", email: "", service: "", message: "" });
  //     setShowForm(false);
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* ... other components ... */}

      <ReusableModal
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        title="Get a Quote"
      >
        <div className="w-full px-2 py-1 overflow-y-auto scrollbar-hide max-h-[65vh]">
          <Formik
            initialValues={{
              name: "",
              companyName: "",
              consignee: "",
              phoneNumber: "",
              emailAddress: "",
              productDescription: "",
              quantity: "",
              weight: "",
              billOfLading: "",
              packingList: "",
              containerSize: "",
              hsCode: "",
              fobCif: "",
              countryOfOrigin: "",
              countryOfDestination: "",
              deliveryLocation: "",
            }}
            validationSchema={quoteSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values, "values");
              // Your API call here
              setTimeout(() => {
                resetForm();
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-6">
                {/* Personal Information Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Name */}
                  <div>
                    <Field
                      name="name"
                      placeholder="Full Name"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="name">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Company Name */}
                  <div>
                    <Field
                      name="companyName"
                      placeholder="Company Name"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="companyName">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Consignee */}
                  <div>
                    <Field
                      name="consignee"
                      placeholder="Consignee"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="consignee">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <Field
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="phoneNumber">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Email Address */}
                  <div className="md:col-span-2">
                    <Field
                      name="emailAddress"
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="emailAddress">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Product Information Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Product Description */}
                  <div className="md:col-span-2">
                    <Field
                      name="productDescription"
                      as="textarea"
                      rows="3"
                      placeholder="Product Description"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10 resize-none"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="productDescription">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Quantity */}
                  <div>
                    <Field
                      name="quantity"
                      type="number"
                      placeholder="Quantity"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="quantity">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Weight */}
                  <div>
                    <Field
                      name="weight"
                      placeholder="Weight (e.g., 100kg)"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="weight">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Shipping Documents Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Bill of Lading */}
                  <div>
                    <Field
                      name="billOfLading"
                      placeholder="Bill of Lading / Airway Bill"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="billOfLading">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Packing List */}
                  <div>
                    <Field
                      name="packingList"
                      placeholder="Packing List"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="packingList">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Container Size */}
                  <div>
                    <Field
                      name="containerSize"
                      as="select"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      <option value="">Select Container Size</option>
                      <option value="20ft">20ft Container</option>
                      <option value="40ft">40ft Container</option>
                      <option value="40ft-hc">40ft High Cube</option>
                      <option value="45ft">45ft Container</option>
                    </Field>
                    <ErrorMessage name="containerSize">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* HS Code */}
                  <div>
                    <Field
                      name="hsCode"
                      placeholder="HS Code"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="hsCode">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* FOB/CIF */}
                  <div>
                    <Field
                      name="fobCif"
                      as="select"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    >
                      <option value="">Select FOB or CIF</option>
                      <option value="FOB">FOB (Free on Board)</option>
                      <option value="CIF">
                        CIF (Cost, Insurance & Freight)
                      </option>
                    </Field>
                    <ErrorMessage name="fobCif">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Location Information Section */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Country of Origin */}
                  <div>
                    <Field
                      name="countryOfOrigin"
                      placeholder="Country of Origin"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="countryOfOrigin">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Country of Destination */}
                  <div>
                    <Field
                      name="countryOfDestination"
                      placeholder="Country of Destination"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="countryOfDestination">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>

                  {/* Delivery Location */}
                  <div className="md:col-span-2">
                    <Field
                      name="deliveryLocation"
                      placeholder="Delivery Location (Full Address)"
                      className="w-full rounded-[8px] bg-[#F7FAFB] px-4 py-3 text-[12px] font-normal text-[#01011B] outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-[#FF6B35]/10"
                      style={{
                        fontFamily: "Inter",
                        lineHeight: "100%",
                        letterSpacing: "0%",
                      }}
                    />
                    <ErrorMessage name="deliveryLocation">
                      {(msg) => (
                        <p className="mt-1 flex items-start gap-1 text-[11px] italic text-[#6B7280]">
                          <span className="text-[#FF6B35]">•</span>
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-fit rounded-[8px] ml-auto  bg-[#FF6B35] px-6 py-3 text-[12px] font-medium text-white transition hover:bg-[#FF6B35]/90 disabled:opacity-60"
                  style={{
                    fontFamily: "Inter",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {isSubmitting ? "Submitting..." : "Get Quote"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </ReusableModal>

      {/* ... Footer ... */}
    </div>
  );
}
