const sliceText = (text, wordLimit) => {
  if (typeof text !== "string" || !text.trim()) {
    return "";
  }

  if (!Number.isInteger(wordLimit) || wordLimit <= 0) {
    return "";
  }

  const words = text.trim().split(/\s+/);

  if (words.length <= wordLimit) {
    return text.trim();
  }

  return `${words.slice(0, wordLimit).join(" ")}...`;
};

export default sliceText;