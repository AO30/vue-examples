function get() {
  let name = "AO";
  setTimeout(() => {
    name = "SUN";
  }, 2000);
  return name;
}

console.log(get());

function get1() {
  let name = "AO";
  return new Promise(resolve => {
    setTimeout(() => {
      name = "SUN";
      resolve(name);
    }, 2000);
  });
}

get1().then(name => {
  console.log(name);
});

function get2() {
  let name = "AO";
  let res = resolve => {
    setTimeout(() => {
      name = "SUN";
      resolve(name);
    }, 2000);
  };
  return new Promise(res);
}
get2().then(name => {
  console.log(name);
});

async function getA() {
  let name = await get2();
  console.log(name);
}
getA();
