"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Calculator, CheckCircle, ChevronRight, ChevronLeft, Home, Calendar, DollarSign, Send } from "lucide-react";

const steps = [
  { id: 1, title: "Project Type" },
  { id: 2, title: "Home Size" },
  { id: 3, title: "Timeline" },
  { id: 4, title: "Budget" },
  { id: 5, title: "Your Info" },
];

const projectTypes = [
  { id: "ac-install", label: "AC Installation", icon: "❄️" },
  { id: "furnace-install", label: "Furnace Installation", icon: "🔥" },
  { id: "full-hvac", label: "Full HVAC System", icon: "🏠" },
  { id: "ductwork", label: "Ductwork Only", icon: "💨" },
  { id: "replacement", label: "System Replacement", icon: "🔄" },
  { id: "renovation", label: "Home Renovation", icon: "🔨" },
];

const homeSizes = [
  { id: "small", label: "Under 1,500 sq ft", description: "Small home or condo" },
  { id: "medium", label: "1,500 - 2,500 sq ft", description: "Average single-family" },
  { id: "large", label: "2,500 - 4,000 sq ft", description: "Large home" },
  { id: "xlarge", label: "Over 4,000 sq ft", description: "Estate or multi-story" },
];

const timelines = [
  { id: "urgent", label: "ASAP / Emergency", description: "Need it done immediately" },
  { id: "this-month", label: "Within 2 weeks", description: "This month" },
  { id: "next-month", label: "2-4 weeks", description: "Planning ahead" },
  { id: "future", label: "Just exploring", description: "Future project" },
];

const budgetRanges = [
  { id: "under-5k", label: "Under $5,000", description: "Basic installation" },
  { id: "5k-10k", label: "$5,000 - $10,000", description: "Standard system" },
  { id: "10k-15k", label: "$10,000 - $15,000", description: "High-efficiency" },
  { id: "15k-plus", label: "$15,000+", description: "Premium / Multi-zone" },
  { id: "not-sure", label: "Not sure / Need quote", description: "Let's discuss" },
];

export function EstimateSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: "",
    homeSize: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
  };

  const progress = (currentStep / steps.length) * 100;

  if (isSubmitted) {
    return (
      <section id="estimate" className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Thank You, {formData.name}!
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              We&apos;ve received your estimate request. Cody will review your project 
              details and get back to you within 24 hours.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 text-left mb-6">
              <p className="font-semibold text-blue-900 mb-2">What happens next?</p>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  We&apos;ll review your project requirements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Cody will call you to discuss details
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  We&apos;ll schedule a free in-home assessment if needed
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  You&apos;ll receive a detailed, no-obligation quote
                </li>
              </ul>
            </div>
            <a
              href="tel:9093454360"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold"
            >
              Have Questions? Call Us
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-semibold mb-4">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Get Your Free Estimate
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll provide a detailed quote. 
            No obligation, no pressure—just honest pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-2xl">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex flex-col items-center ${
                        index + 1 <= currentStep ? "text-blue-600" : "text-slate-400"
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1 ${
                          index + 1 <= currentStep
                            ? "bg-blue-600 text-white"
                            : "bg-slate-200 text-slate-500"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className="hidden sm:block text-xs">{step.title}</span>
                    </div>
                  ))}
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-blue-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Form Steps */}
              <form onSubmit={handleSubmit}>
                {/* Step 1: Project Type */}
                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      What type of project do you need?
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Select the service that best matches your needs
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, projectType: type.id });
                            handleNext();
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            formData.projectType === type.id
                              ? "border-blue-600 bg-blue-50"
                              : "border-slate-200 hover:border-blue-300"
                          }`}
                        >
                          <span className="text-3xl mb-2 block">{type.icon}</span>
                          <span className="font-semibold text-slate-900">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Home Size */}
                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      What&apos;s the size of your home?
                    </h3>
                    <p className="text-slate-600 mb-6">
                      This helps us determine the right system size for optimal efficiency
                    </p>
                    <div className="space-y-3">
                      {homeSizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, homeSize: size.id });
                            handleNext();
                          }}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                            formData.homeSize === size.id
                              ? "border-blue-600 bg-blue-50"
                              : "border-slate-200 hover:border-blue-300"
                          }`}
                        >
                          <Home className={`w-6 h-6 ${formData.homeSize === size.id ? "text-blue-600" : "text-slate-400"}`} />
                          <div>
                            <span className="font-semibold text-slate-900 block">{size.label}</span>
                            <span className="text-sm text-slate-500">{size.description}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Timeline */}
                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      When do you need this done?
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Your timeline helps us prioritize and schedule accordingly
                    </p>
                    <div className="space-y-3">
                      {timelines.map((time) => (
                        <button
                          key={time.id}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, timeline: time.id });
                            handleNext();
                          }}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                            formData.timeline === time.id
                              ? "border-blue-600 bg-blue-50"
                              : "border-slate-200 hover:border-blue-300"
                          }`}
                        >
                          <Calendar className={`w-6 h-6 ${formData.timeline === time.id ? "text-blue-600" : "text-slate-400"}`} />
                          <div>
                            <span className="font-semibold text-slate-900 block">{time.label}</span>
                            <span className="text-sm text-slate-500">{time.description}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Budget */}
                {currentStep === 4 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      What&apos;s your budget range?
                    </h3>
                    <p className="text-slate-600 mb-6">
                      This helps us recommend the best options for your investment level
                    </p>
                    <div className="space-y-3">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget.id}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, budget: budget.id });
                            handleNext();
                          }}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 ${
                            formData.budget === budget.id
                              ? "border-blue-600 bg-blue-50"
                              : "border-slate-200 hover:border-blue-300"
                          }`}
                        >
                          <DollarSign className={`w-6 h-6 ${formData.budget === budget.id ? "text-blue-600" : "text-slate-400"}`} />
                          <div>
                            <span className="font-semibold text-slate-900 block">{budget.label}</span>
                            <span className="text-sm text-slate-500">{budget.description}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 5: Contact Info */}
                {currentStep === 5 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Tell us about yourself
                    </h3>
                    <p className="text-slate-600 mb-6">
                      We&apos;ll use this to contact you with your estimate
                    </p>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="John Smith"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="(909) 555-0123"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="123 Main St, Rancho Cucamonga, CA"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Additional Notes</label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                          placeholder="Any specific requirements or questions..."
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-3 text-slate-600 hover:text-slate-900 font-medium"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}
                  {currentStep === 5 ? (
                    <button
                      type="submit"
                      className="btn-primary flex items-center gap-2 px-8 py-3 rounded-full text-white font-bold"
                    >
                      Submit Request
                      <Send className="w-5 h-5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn-primary flex items-center gap-2 px-6 py-3 rounded-full text-white font-bold"
                    >
                      Next
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Side Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calculator className="w-8 h-8 text-orange-400" />
                <h3 className="text-xl font-bold">Why This Information?</h3>
              </div>
              <p className="text-blue-200 mb-6">
                We ask these questions to provide you with the most accurate estimate possible 
                and ensure we&apos;re the right fit for your project.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Accurate Quotes</p>
                    <p className="text-sm text-blue-200">
                      Detailed info means no surprise costs later
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Right-Sized Solutions</p>
                    <p className="text-sm text-blue-200">
                      Home size determines the perfect system for you
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Better Scheduling</p>
                    <p className="text-sm text-blue-200">
                      Your timeline helps us prioritize your project
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <p className="text-sm text-blue-200 mb-2">Prefer to talk?</p>
                <a
                  href="tel:9093454360"
                  className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
                >
                  (909) 345-4360
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
