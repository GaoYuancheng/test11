const { exec, execSync } = require("child_process");

const gitCommandList = [];

const init = async () => {
  // const data = await execSync("echo 11", {
  //   encoding: "utf-8",
  // });

  await execSync(
    "git remote set-url origin https://github.com/GaoYuancheng/test22.git"
  );

  await execSync("git checkout main");

  await execSync("git pull");

  await execSync("git push -u origin main");

  // exec("echo 11", (err, stdout) => {
  //   console.log(err, stdout);
  // });

  // exec("echo 22", (err, stdout) => {
  //   console.log(err, stdout);
  // });
};

init();
