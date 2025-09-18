"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  AlertCircle,
  X,
  Clock,
  Phone,
  Mail,
} from "lucide-react";

// Define form schema using zod - matching the page validation and fields
const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

interface ContactInfo {
  name: string;
  email: string;
  subject: string;
}

interface ConfirmationInfo {
  title: string;
  description: string;
  estimatedResponse: string;
  referenceId: string;
  nextSteps: string[];
}

const inputBaseStyles =
  "w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors text-gray-900";
const errorStyles = "border-red-500";
const labelBaseStyles = "block text-sm font-medium text-text-primary mb-1";

export function ContactForm({ onSuccess, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
    details?: unknown;
    contact?: ContactInfo;
    confirmation?: ConfirmationInfo;
  } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
  });

  // Update schema on change to clear errors like in page
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setValue(name as keyof ContactFormData, value);
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Use Next.js API route
      console.log("Form data:", data);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log("Success response:", result);
        setSubmitStatus({
          success: true,
          message:
            result.message ||
            "Thank you for your message! We&apos;ll get back to you soon.",
          details: result.details,
          contact: result.contact,
          confirmation: result.confirmation,
        });
        reset();
        if (onSuccess) {
          setTimeout(onSuccess, 3000);
        }
      } else {
        const errorData = await response.text();
        console.error("Error response:", errorData);
        throw new Error(
          `Server responded with ${response.status}: ${errorData}`
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        success: false,
        message: `Error: ${
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again later."
        }`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 w-full max-w-lg mx-auto"
        role="alert"
        aria-live="polite"
      >
        <div className="text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto mb-6 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
          >
            <CheckCircle className="w-8 h-8 text-green-600" />
          </motion.div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {submitStatus.confirmation?.title || "Message Sent Successfully!"}
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 leading-relaxed">
            {submitStatus.confirmation?.description || String(submitStatus.message) || "Thank you for your message!"}
          </p>

          {/* Contact Summary */}
          {submitStatus.contact && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3 text-center">
                Message Summary
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-medium text-gray-900">
                    {submitStatus.contact?.name || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">
                    {submitStatus.contact?.email || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Subject:</span>
                  <span className="font-medium text-gray-900">
                    {submitStatus.contact?.subject || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Details */}
          {submitStatus.details && (
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-blue-900">
                    Response Time
                  </div>
                  <div className="text-blue-700">
                    {submitStatus.confirmation?.estimatedResponse ||
                      "Within 24 hours"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-blue-900">
                    Reference ID
                  </div>
                  <div className="text-blue-700 font-mono text-xs">
                    {submitStatus.confirmation?.referenceId || "N/A"}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Next Steps */}
          {submitStatus.confirmation?.nextSteps && (
            <div className="bg-yellow-50 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-left">
                  <h4 className="font-semibold text-yellow-900 mb-1">
                    What&apos;s Next?
                  </h4>
                  <ul className="text-yellow-800 text-sm space-y-1">
                    {submitStatus.confirmation.nextSteps.map((step, index) => (
                      <li key={index}>• {step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Close Button */}
          {onClose && (
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Close
            </motion.button>
          )}

          {/* Contact Information */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">
              Need immediate assistance?
            </p>
            <div className="flex justify-center space-x-4 text-xs text-gray-600">
              <div className="flex items-center">
                <Phone className="w-3 h-3 mr-1" />
                <span>+63 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 mr-1" />
                <span>info@vraland.com.ph</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={isMounted ? { opacity: 0, y: 30 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 w-full max-w-lg mx-auto"
    >
      <div className="relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-2">
            Get in Touch
          </h2>
          <p className="text-text-secondary">
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-0 right-0 p-2 text-text-secondary hover:text-primary-600 transition-colors"
            aria-label="Close contact form"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {submitStatus && !submitStatus.success && (
          <div className="bg-red-50 text-red-800 p-4 rounded-lg">
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
              <span>{submitStatus.message}</span>
            </div>
          </div>
        )}

        <div>
          <label htmlFor="name" className={labelBaseStyles}>
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            onChange={handleChange}
            className={`${inputBaseStyles} ${
              errors.name ? errorStyles : "border-gray-300"
            }`}
            placeholder="John Doe"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className={labelBaseStyles}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              onChange={handleChange}
              className={`${inputBaseStyles} ${
                errors.email ? errorStyles : "border-gray-300"
              }`}
              placeholder="your@email.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className={labelBaseStyles}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              onChange={handleChange}
              className={`${inputBaseStyles} border-gray-300`}
              placeholder="+63 912 345 6789"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className={labelBaseStyles}>
            Subject
          </label>
          <select
            id="subject"
            {...register("subject")}
            onChange={handleChange}
            className={`${inputBaseStyles} border-gray-300 bg-white`}
            disabled={isSubmitting}
          >
            <option value="">Select a subject</option>
            <option value="general">General Inquiry</option>
            <option value="sales">Sales Inquiry</option>
            <option value="support">Customer Support</option>
            <option value="partnership">Partnership</option>
            <option value="careers">Careers</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className={labelBaseStyles}>
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            onChange={handleChange}
            className={`${inputBaseStyles} ${
              errors.message ? errorStyles : "border-gray-300"
            }`}
            placeholder="How can we help you?"
            disabled={isSubmitting}
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">
              {errors.message.message}
            </p>
          )}
        </div>

        <div className="pt-2">
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{
              y: -2,
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:shadow-lg"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}
