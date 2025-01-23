import React from "react";

const ServicePolicy = () => {
  return (
    
    <div className="w-5/6 mx-auto my-10">
        <div
                className="hero rounded-3xl z-30"
                style={{
                  backgroundImage:
                    "url(https://t4.ftcdn.net/jpg/10/02/87/85/360_F_1002878589_lOGwVkEjAkDjHIWKxixKk0vWjnQJ4f0g.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60 rounded-2xl "></div>
                <div className="hero-content text-neutral-content text-center">
                  <div className="max-w-md py- pt-5">
                    <p>Home / Service & Policy</p>
                    <h1 className="mb-5 text-5xl font-bold">
                    Service & Policy
                    </h1>
                    <p className="mb-5">
                      Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                      excepturi exerationem quasi. In deleniti eaque aut repudiandae
                      et a id nisi.
                    </p>
                  </div>
                </div>
              </div>
      
      
      

      {/* Policy Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="prose max-w-none">
            {/* Introduction */}
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              Welcome to our Service Policy page. This document outlines the terms and conditions under which our
              services are provided. By using our services, you agree to comply with these policies.
            </p>

            {/* General Terms */}
            <h2 className="text-2xl font-bold mt-8 mb-4">General Terms</h2>
            <ul className="list-disc ml-6">
              <li>All users must adhere to the policies and guidelines outlined on this page.</li>
              <li>Services are provided as-is and may be subject to updates or modifications.</li>
              <li>Users are responsible for maintaining the confidentiality of their account information.</li>
            </ul>

            {/* Payments and Fees */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Payments and Fees</h2>
            <ul className="list-disc ml-6">
              <li>All fees are transparently displayed before purchase or subscription.</li>
              <li>Payments must be made using approved payment methods.</li>
              <li>No hidden fees are charged unless explicitly mentioned during the transaction.</li>
            </ul>

            {/* Refund Policy */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Refund Policy</h2>
            <p>
              Refund requests must be made within 14 days of the transaction. Refunds are subject to review and may take
              up to 10 business days to process. Please contact our support team for assistance with refunds.
            </p>

            {/* Data Protection */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Data Protection</h2>
            <p>
              We prioritize the protection of your personal data. All information is handled in accordance with
              applicable data protection laws. Refer to our Privacy Policy for more details.
            </p>

            {/* Reporting Issues */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Reporting Issues</h2>
            <p>
              If you encounter any technical issues or have concerns about our services, please contact our support team
              immediately. We are committed to resolving all issues promptly.
            </p>

            {/* Contact Information */}
            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
            <p>
              If you have questions about this Service Policy or our services, feel free to reach out:
            </p>
            <ul className="list-disc ml-6">
              <li>Email: support@homelengo.com</li>
              <li>Phone: +1-234-567-890</li>
              <li>Address: 123 Main Street, City, State, ZIP</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicePolicy;
