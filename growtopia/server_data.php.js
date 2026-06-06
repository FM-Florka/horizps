module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  res.setHeader("Content-Type", "text/plain");
  res.send(
    [
      "server|127.0.0.1",
      "port|17091",
      "type|1",
      "beta_server|127.0.0.1",
      "beta_port|17091",
      "beta_type|1",
      "meta|HELLOWORLD",
      "#maint|Server is under maintenance.",
      "RTENDMARKERBS1001",
    ].join("\n")
  );
};