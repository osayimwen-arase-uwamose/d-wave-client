const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CONTACT_ENDPOINT = `${API_BASE_URL}/api/contact`;

export const submitContactMessage = async (payload) => {
let response;

try {
response = await fetch(CONTACT_ENDPOINT, {
method: "POST",
headers: {
"Content-Type": "application/json",
Accept: "application/json",
},
credentials: "omit",
body: JSON.stringify(payload),
});
} catch {
throw new Error(
"We couldn't connect to our server. Please check your connection and try again."
);
}

let result;

try {
result = await response.json();
} catch {
result = null;
}

if (!response.ok) {
if (response.status === 429) {
throw new Error(
"Too many requests. Please wait a while before trying again."
);
}

if (response.status >= 500) {
  throw new Error(
    "Our contact service is temporarily unavailable. Please try again later."
  );
}

throw new Error(
  result?.message ||
    "We couldn't submit your message. Please review your details and try again."
);
}

return result;
};
