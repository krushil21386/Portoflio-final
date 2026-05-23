# Software Requirements Specification (SRS)
## Project: Neural Breach – Cybersecurity SOC Portfolio
**Version:** 1.0.0  
**Status:** DECLASSIFIED / ALPHA_7  
**Date:** April 6, 2026  

---

## 1. Introduction

### 1.1 Purpose
This document provides a comprehensive technical overview and requirement specification for the **Neural Breach** system. It serves as the primary reference for the architecture, functional modules, and security protocols implemented within the portfolio dashboard.

### 1.2 Scope
Neural Breach is a high-performance, cybersecurity-themed portfolio and Security Operations Center (SOC) simulator. It integrates multiple sub-systems, including:
*   **Global SOC Interface**: A central hub for project navigation and identity.
*   **Medicare+ Deep Dive**: A defense-in-depth architectural analysis module.
*   **Hydromap System**: A parallel-pipeline reactive data visualization engine.
*   **Tactical Uplink**: A secure, rate-limited communication channel.

### 1.3 Definitions and Acronyms
*   **SOC**: Security Operations Center.
*   **JWT**: JSON Web Token (Access + Refresh strategy).
*   **RBAC**: Role-Based Access Control.
*   **CSRF/XSS**: Cross-Site Request Forgery / Cross-Site Scripting.
*   **HTTPOnly**: Secure cookie attribute preventing JavaScript access.

---

## 2. Product Overview

### 2.1 System Context
Neural Breach is designed as a standalone web application that simulates a futuristic hacker terminal. It prioritizes high-density technical information presented through premium, motion-heavy interfaces.

### 2.2 User Classes
*   **Recruiters/Collaborators**: Seeking technical intelligence and contact protocols.
*   **Security Engineers**: Reviewing architectural patterns and implementation logic.
*   **System Administrators**: Managing the backend SOC API.

### 2.3 Operating Environment
*   **Frontend**: Modern browsers (Chrome, Firefox, Safari, Edge) with JS/CSS support.
*   **Backend**: Node.js v18+ environment.
*   **Hosting**: Capable of supporting Express servers and React static assets.

---

## 3. System Architecture

### 3.1 Frontend Architecture
*   **Framework**: React 18+ with Vite for optimized builds.
*   **Styling**: Vanilla CSS + Tailwind CSS for a modular design system.
*   **Animations**: Framer Motion for high-fidelity transitions and interaction feedback.
*   **Icons**: Lucide-React for tactical iconography.

### 3.2 Backend Architecture (SOC API)
*   **Runtime**: Node.js with Express.
*   **Security Middleware**:
    *   `Helmet`: Managed security headers.
    *   `CORS`: Restricted to validated frontend origins.
    *   `Express-Validator`: Strict payload sanitization.
*   **Monitoring**: Morgan (logging) and local process monitors.

### 3.3 Data Flow Model
The system utilizes a **Concurrent API Execution** model (via `Promise.all`) to minimize latency, ensuring that complex data visualizations like Hydromap render in <50ms after data resolution.

---

## 4. Functional Requirements

### 4.1 Global SOC (Core Dashboard)
*   **REQ-01**: The system shall implement a **Boot Sequence** to simulate unauthorized access protocols on initial load.
*   **REQ-02**: The **Arsenal (Skills)** section must categorize technical competencies by architecture layers.
*   **REQ-03**: The **Project Archive** shall provide dynamic routing to deep-dive specifications for specialized projects.

### 4.2 Medicare+ Defense-in-Depth (Security Module)
*   **REQ-04**: The system shall visualize a **7-Layer Security Stack**:
    1.  Client Request (Sanitization)
    2.  Rate Limiter (IP Throttling)
    3.  Auth Gateway (JWT Verification)
    4.  RBAC Engine (Role Matrix)
    5.  Business Logic (Expiring Links)
    6.  Audit Log (Forensic Tracking)
    7.  Database (Encrypted at Rest)
*   **REQ-05**: All layers must provide interactive "Decryption" to reveal underlying technical specifications.

### 4.3 Hydromap Workflow (Visualization Engine)
*   **REQ-06**: The system shall implement an **8-Layer Reactive Pipeline** for data processing.
*   **REQ-07**: Real-time **System Metrics** (Latency, Nodes, Render Time) must be displayed via a tactical HUD.
*   **REQ-08**: The system shall provide an **Execution Log** detailing the lifecycle of a data request.

### 4.4 Tactical Uplink (Contact System)
*   **REQ-09**: The backend shall enforce a **Rate Limit** of 5 transmissions per 15 minutes per IP address.
*   **REQ-10**: The contact form shall validate input against `INTERNSHIP`, `COLLABORATION`, or `JUST_HI` protocols.

---

## 5. Non-Functional Requirements

### 5.1 Performance
*   **Latency**: API response times shall be targeted at <120ms.
*   **Rendering**: UI transitions shall maintain a consistent 60 FPS across all animations.

### 5.2 Security
*   **Sanitization**: All incoming payloads MUST be escaped and normalized to prevent XSS.
*   **Integrity**: Use of double-JWT strategy (Rotating Refresh Tokens) for persistence.

### 5.3 Reliability
*   **Zero Trust**: All system components must assume no prior trust, requiring validation at every layer transition.

### 5.4 Aesthetics (Premium HUD)
*   **Visual FX**: Implementation of scanlines, noise overlays, and CRT-style flickering.
*   **Accessibility**: Maintain 100% contrast for text against the `voidBlack` background.

---

## 6. Technical Stack Details

*   **Logic**: JavaScript (ES6+), React Hooks.
*   **Data**: JSON-driven mock engines (Hydromap), MongoDB (Medicare+ spec).
*   **Protocol**: REST API over HTTPS.
*   **Tooling**: PostCSS, Autoprefixer, ESLint.

---

## 7. Deployment & Maintenance

*   **Process Management**: Node process with uncaught exception handling.
*   **Environment**: `.env` driven configuration for API endpoints and security keys.
