import { useEffect } from "react";

function MDN() {
  const getData = async () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const request = new Request("https://example.org/post", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({ username: "example" }),
    });
    const response1 = await fetch(request);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>MDN Tutorial</h1>
    </div>
  );
}

export default MDN;
