module.exports = (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  res.setHeader("Content-Type", "text/plain");
  res.send(
    [
      "server|206.189.83.8",
      "port|17091",
      "type|1",
      "loginurl|gtps-loginurl-rust.vercel.app",
      "type2|1",
      "#maint|`5The server has on maintenance mode. Please check information about the server again.",
      "meta|localhost",
      "RTENDMARKERBS1001",
    ].join("\n")
  );
};
