const first = document.querySelector("#first");
const last = document.querySelector("#last");
const street = document.querySelector("#street");
const phone = document.querySelector("#phone");
const email = document.querySelector("#email");
const picture = document.querySelector("#photo");
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  const randomPerson = getRandomPerson();
  fillData(randomPerson);
});

const getRandomPerson = async () => {
  const res = await axios.get(
    "https://randomuser.me/api/?inc=name,location,phone,email,picture"
  );
  return res.data.results[0];
};

const fillData = async () => {
  const res = await getRandomPerson();
  first.innerHTML = res.name.first;
  last.innerHTML = res.name.last;
  street.innerHTML =
    res.location.street.name + "," + " " + res.location.street.number;
  phone.innerHTML = res.phone;
  email.innerHTML = res.email;
  picture.src = res.picture.medium;
};
