# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

@layer base {
html {
scroll-behavior: smooth;
}

body {
min-width: 320px;
margin: 0;
background: #f8fafc;
color: #1e293b;
font-family: "Montserrat", sans-serif;
-webkit-font-smoothing: antialiased;
}

button,
input,
textarea,
select {
font: inherit;
}

button {
cursor: pointer;
}

button:disabled {
cursor: not-allowed;
}

::selection {
color: #ffffff;
background: #0284c7;
}

::-webkit-scrollbar {
width: 8px;
}

::-webkit-scrollbar-track {
background: #0f172a;
}

::-webkit-scrollbar-thumb {
background: #475569;
border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
background: #38bdf8;
}
}

@layer components {
/_ Layout _/

.dw-container {
width: 100%;
max-width: 1440px;
margin-inline: auto;
padding-inline: 1.25rem;
}

.dw-container--narrow {
max-width: 960px;
}

.dw-section {
position: relative;
width: 100%;
padding-block: clamp(4rem, 8vw, 7rem);
}

.dw-page-container {
position: relative;
isolation: isolate;
width: 100%;
min-height: 100vh;
background: #ffffff;
}

/_ Shared buttons _/

.dw-button {
display: inline-flex;
min-height: 48px;
align-items: center;
justify-content: center;
gap: 0.625rem;
padding: 0.75rem 1.5rem;
border: 1px solid transparent;
border-radius: 0.5rem;
font-weight: 700;
text-align: center;
transition:
background-color 180ms ease,
border-color 180ms ease,
color 180ms ease,
transform 180ms ease,
box-shadow 180ms ease;
}

.dw-button:focus-visible {
outline: 3px solid #38bdf8;
outline-offset: 3px;
}

.dw-button:disabled {
opacity: 0.55;
cursor: not-allowed;
transform: none;
}

.dw-button--primary {
color: #ffffff;
background: #0284c7;
}

.dw-button--primary:hover:not(:disabled) {
background: #0369a1;
transform: translateY(-1px);
}

.dw-button--outline {
color: #ffffff;
background: transparent;
border-color: rgb(255 255 255 / 45%);
}

.dw-button--outline:hover:not(:disabled) {
color: #0f172a;
background: #ffffff;
border-color: #ffffff;
}

.dw-button--light {
color: #0f172a;
background: #ffffff;
border-color: #e2e8f0;
}

.dw-button--light:hover:not(:disabled) {
background: #f1f5f9;
}

.dw-button--full {
width: 100%;
}

/_ Shared section headings _/

.dw-section-heading {
margin-bottom: 3rem;
}

.dw-section-heading\_\_eyebrow {
display: block;
margin-bottom: 0.75rem;
color: #0284c7;
font-size: 0.75rem;
font-weight: 800;
letter-spacing: 0.18em;
text-transform: uppercase;
}

.dw-section-heading\_\_title {
color: #0f172a;
font-family: "Montserrat", sans-serif;
font-size: clamp(2rem, 4vw, 3.25rem);
font-weight: 900;
letter-spacing: -0.045em;
line-height: 1.1;
}

.dw-section-heading\_\_description {
max-width: 720px;
margin-top: 1rem;
color: #64748b;
font-size: 1rem;
line-height: 1.8;
}

/_ Hero _/

.dw-hero {
position: relative;
isolation: isolate;
display: flex;
min-height: 90vh;
min-height: 90svh;
align-items: center;
justify-content: center;
overflow: hidden;
padding-block: 8rem 6rem;
background: #0f172a;
color: #ffffff;
}

.dw-hero\_\_background {
position: absolute;
z-index: -2;
inset: 0;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

.dw-hero\_\_background::after {
position: absolute;
inset: 0;
background: linear-gradient(
110deg,
rgb(10 15 30 / 88%),
rgb(10 15 30 / 68%)
);
content: "";
}

.dw-hero\_\_container {
display: flex;
justify-content: center;
}

.dw-hero\_\_content {
width: 100%;
max-width: 960px;
text-align: center;
}

.dw-hero\_\_eyebrow {
display: inline-flex;
align-items: center;
gap: 0.625rem;
margin-bottom: 2rem;
color: #7dd3fc;
font-size: 0.75rem;
font-weight: 800;
letter-spacing: 0.2em;
text-transform: uppercase;
}

.dw-hero\_\_title {
color: #ffffff;
font-size: clamp(2.75rem, 7vw, 6rem);
font-weight: 900;
letter-spacing: -0.065em;
line-height: 0.98;
}

.dw-hero\_\_title-primary {
display: block;
}

.dw-hero\_\_title-accent {
display: block;
margin-top: 0.4rem;
background: linear-gradient(90deg, #ffffff, #7dd3fc);
background-clip: text;
-webkit-text-fill-color: transparent;
}

.dw-hero\_\_description {
max-width: 700px;
margin: 2rem auto 0;
color: #cbd5e1;
font-size: clamp(1rem, 2vw, 1.2rem);
line-height: 1.8;
}

.dw-hero\_\_actions {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;
margin-top: 2.5rem;
}

/_ Event cards _/

.dw-event-card {
overflow: hidden;
border: 1px solid #e2e8f0;
border-radius: 0.75rem;
background: #ffffff;
box-shadow: 0 8px 30px rgb(15 23 42 / 6%);
transition:
transform 200ms ease,
box-shadow 200ms ease;
}

.dw-event-card:hover {
transform: translateY(-4px);
box-shadow: 0 18px 40px rgb(15 23 42 / 12%);
}

.dw-event-card\_\_image {
position: relative;
height: 16rem;
overflow: hidden;
background: #0f172a;
}

.dw-event-card\_\_image img {
width: 100%;
height: 100%;
object-fit: cover;
transition: transform 500ms ease;
}

.dw-event-card:hover .dw-event-card\_\_image img {
transform: scale(1.05);
}

.dw-event-card\_\_date {
position: absolute;
top: 1rem;
left: 1rem;
min-width: 60px;
padding: 0.5rem;
border-radius: 0.5rem;
background: rgb(255 255 255 / 95%);
text-align: center;
box-shadow: 0 4px 12px rgb(15 23 42 / 12%);
}

.dw-event-card\_\_body {
padding: 1.5rem;
}

.dw-event-card\_\_meta {
display: flex;
align-items: flex-start;
justify-content: space-between;
gap: 0.75rem;
margin-bottom: 1rem;
}

.dw-event-card\_\_category {
display: inline-flex;
align-items: center;
border-radius: 0.375rem;
padding: 0.375rem 0.5rem;
background: #e0f2fe;
color: #0369a1;
font-size: 0.7rem;
font-weight: 800;
letter-spacing: 0.08em;
text-transform: uppercase;
}

.dw-event-card\_\_venue {
display: inline-flex;
align-items: flex-start;
gap: 0.35rem;
color: #64748b;
font-size: 0.8rem;
}

.dw-event-card\_\_title {
margin-bottom: 1.25rem;
color: #0f172a;
font-size: 1.15rem;
font-weight: 800;
line-height: 1.5;
}

/_ Services _/

.dw-service-card {
display: flex;
align-items: flex-start;
gap: 1rem;
padding: 1.25rem;
border: 1px solid #e2e8f0;
border-radius: 0.75rem;
background: #ffffff;
transition:
border-color 180ms ease,
box-shadow 180ms ease;
}

.dw-service-card:hover {
border-color: #7dd3fc;
box-shadow: 0 8px 24px rgb(15 23 42 / 6%);
}

.dw-service-card\_\_icon {
display: flex;
width: 3rem;
height: 3rem;
flex: 0 0 3rem;
align-items: center;
justify-content: center;
border-radius: 50%;
background: #e0f2fe;
color: #0369a1;
}

/_ Newsletter _/

.dw-newsletter {
border-top: 1px solid #e2e8f0;
background: #ffffff;
}

.dw-newsletter\_\_icon {
display: inline-flex;
width: 3.5rem;
height: 3.5rem;
align-items: center;
justify-content: center;
border-radius: 50%;
background: #e0f2fe;
color: #0369a1;
}

.dw-newsletter\_\_input {
width: 100%;
min-height: 52px;
border: 1px solid #cbd5e1;
border-radius: 0.5rem;
padding: 0.875rem 1rem;
background: #f8fafc;
color: #0f172a;
outline: none;
transition:
border-color 180ms ease,
box-shadow 180ms ease;
}

.dw-newsletter\_\_input:focus {
border-color: #0284c7;
box-shadow: 0 0 0 3px rgb(2 132 199 / 15%);
}

.dw-newsletter\_\_input:disabled {
opacity: 0.65;
}

/_ Footer _/

.dw-footer {
background: #0f172a;
color: #ffffff;
}

.dw-footer\_\_grid {
display: grid;
grid-template-columns: 1fr;
gap: 2.5rem;
}

.dw-footer\_\_column {
min-width: 0;
}

.dw-footer\_\_brand {
margin-bottom: 1rem;
color: #ffffff;
font-size: 1.25rem;
font-weight: 900;
letter-spacing: -0.03em;
}

.dw-footer\_\_description {
max-width: 360px;
color: #94a3b8;
font-size: 0.9rem;
line-height: 1.8;
}

.dw-footer\_\_heading {
margin-bottom: 1.25rem;
color: #ffffff;
font-size: 0.9rem;
font-weight: 800;
}

.dw-footer\_\_links {
display: grid;
gap: 0.875rem;
color: #94a3b8;
font-size: 0.875rem;
}

.dw-footer**links a,
.dw-footer**contact a {
transition: color 180ms ease;
}

.dw-footer**links a:hover,
.dw-footer**contact a:hover {
color: #7dd3fc;
}

.dw-footer\_\_contact {
display: grid;
gap: 1rem;
color: #94a3b8;
font-size: 0.875rem;
overflow-wrap: anywhere;
}

.dw-footer\_\_contact-item {
display: flex;
align-items: flex-start;
gap: 0.75rem;
}

.dw-footer\_\_socials {
display: flex;
flex-wrap: wrap;
gap: 0.75rem;
margin-top: 1.5rem;
}

.dw-footer\_\_social-link {
display: inline-flex;
width: 2.75rem;
height: 2.75rem;
align-items: center;
justify-content: center;
border: 1px solid #334155;
border-radius: 50%;
color: #cbd5e1;
transition:
background-color 180ms ease,
border-color 180ms ease,
color 180ms ease;
}

.dw-footer\_\_social-link:hover {
border-color: #0284c7;
background: #0284c7;
color: #ffffff;
}

.dw-footer\_\_bottom {
display: flex;
flex-direction: column;
gap: 0.75rem;
align-items: flex-start;
justify-content: space-between;
margin-top: 3rem;
border-top: 1px solid #334155;
padding-top: 1.5rem;
color: #94a3b8;
font-size: 0.8rem;
}

/_ Existing reusable utility classes _/

.no-scrollbar {
-ms-overflow-style: none;
scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
display: none;
}

.stroke-primary {
-webkit-text-stroke: 0.7px #2e070f;
}
}

@media (min-width: 640px) {
.dw-container {
padding-inline: 1.5rem;
}

.dw-footer\_\_bottom {
flex-direction: row;
align-items: center;
}

.dw-hero\_\_actions {
flex-direction: row;
}
}

@media (min-width: 768px) {
.dw-container {
padding-inline: 2rem;
}

.dw-footer\_\_grid {
grid-template-columns: repeat(2, minmax(0, 1fr));
}
}

@media (min-width: 1024px) {
.dw-footer\_\_grid {
grid-template-columns: 1.35fr 0.8fr 1fr 1.2fr;
}
}

@media (prefers-reduced-motion: reduce) {
html {
scroll-behavior: auto;
}

_,
_::before,
\*::after {
animation-duration: 0.01ms !important;
animation-iteration-count: 1 !important;
transition-duration: 0.01ms !important;
scroll-behavior: auto !important;
}
}
