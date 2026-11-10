/* Korean browsers land on the Korean page; "?en" (the English button on the Korean page) keeps English. */
if (!new URLSearchParams(location.search).has("en") && /^ko\b/i.test(navigator.language || "")) {
  location.replace("ko/");
}
