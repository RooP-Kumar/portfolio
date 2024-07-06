import React from "react";
import './PrivacyPolicy.css'

export default function PrivacyPolicy() {
  return (
    <>
      <div className="card w-75 mb-3">
        <div className="card-body">
          <h5 className="card-title">Privacy Policy for Accounts</h5>
          <p id="date">Effective Date: July 6, 2024</p>
          <h6>Introduction</h6>
          <p id="intro">
            Accounts is committed to protecting the privacy of its users. This
            privacy policy explains how we collect, use, and disclose personal
            information about you when you use our mobile app, Accounts, a
            expense tracker app.
          </p>
          <h6 id="pi-heading">What Is Personal Information (PI)?</h6>
          <p id="pi-body">
            Personal information (PI) refers to any information that can be used
            to identify an individual, including but not limited to:
          </p>
          <ul className="pi-list">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Profile picture (uploaded from your device's camera)</li>
          </ul>
          <h6 id="collect-pi-heading">How We Collect Personal Information</h6>
          <p id="collect-pi-inner-heading">
            We collect personal information when you
          </p>
          <ul className="collect-pi-list">
            <li>
              Create an account and provide your full name, phone number and
              email address
            </li>
            <li>
              Grant us access to your device's camera to upload aprofile picture
            </li>
            <li>Use our app's features and services to track your expenses</li>
          </ul>
          <h6 id="use-pi-heading">How We Use Personal Information</h6>
          <p id="use-pi-inner-heading">We use personal information to</p>
          <ul className="use-pi-list">
            <li>
              Create and manage your account Provide and improve our app's
              services, including expense tracking and reporting
            </li>
            <li>
              Communicate with you about our app and services, including sending
              you notifications and updates
            </li>
            <li>Analyze and improve our app's performance</li>
          </ul>
          <h6 id="camera-heading">Camera Access</h6>
          <p id="camera-body">
            We request access to your device's camera to allow you to upload a
            profile picture. We do not use your camera for any other purpose,
            and we do not store any photos or videos taken by your camera.
          </p>
          <h6 id="security-heading">Security</h6>
          <p id="security-body">
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or method of electronic storage is
            100% secure.
          </p>
          <h6 id="rights-heading">Your Rights</h6>
          <p id="rights-inner-heading">You have the right to</p>
          <ul className="rights-list">
            <li>Request access to your personal information </li>
            <li>Request correction or deletion of your personal information</li>
            <li>Object to our processing of your personal information</li>
            <li>
              Request that we restrict our processing of your personal
              information
            </li>
          </ul>
          <h6 id="change-policy-heading">Changes to This Policy</h6>
          <p id="change-policy-body">
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the updated policy on this page.
          </p>
          <h6 id="contact-us-heading">Contact Us</h6>
          <p id="contact-us-body">
            If you have any questions or concerns about this privacy policy,
            please contact us at <span id="email-span" onClick={() => {}}>roopkm12@gmail.com</span>.
          </p>
          <p id="end-body">
            By using our app, you consent to the collection, use, and disclosure
            of your personal information as described in this privacy policy.
          </p>
        </div>
      </div>
    </>
  );
}
