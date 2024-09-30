//skriv state

const state = {
  shop: [
    {
      vegetable: "Broccoli",
      amount: 12,
      color: "green",
    },
    {
      vegetable: "Potato",
      amount: 25,
      color: "Brown",
    },
    {
      vegetable: "onion",
      amount: 8,
    },
  ],

  order: [],
  //                     inparameter1 och 2
  addVegetable: function (vegetable, amount) {
    //add Vegetable
    //pekar på state och refererar till shop. pushar parametrarna till ett nytt objekt i arrayen shop
    this.shop.push({ vegetable, amount });
  },
};

/* skriv ut menyn: */

const renderShop = () => {
  //tömma shop-diven först!
  const shopDiv = document.querySelector(".shop");
  shopDiv.innerHTML = "";

  /*   Första iterationen:
  v blir ett objekt. Alltså följande: { vegetable: "Broccoli", amount: 12, color: "green" }
  Andra iterationen:
  v blir { vegetable: "Potato", amount: 25, color: "brown" }
  Tredje iterationen:
  v blir { vegetable: "Onion", amount: 8 } */

  // Använd forEach för att loopa genom state.shop
  state.shop.forEach((v) => {
    // Skapa ny div-tag
    const vegetable = document.createElement("div");

    // Lägg till text i div-taggen, ta text ifrån state
    vegetable.innerHTML = `${v.vegetable} (amount: ${v.amount})${v.color === undefined ? "" : ", " + v.color}`;

    // Lägg till nya div-taggen i DOMen
    shopDiv.appendChild(vegetable);
  });
};

//här kommer appen:
/* state.egenskap(grönsak, antal) */
state.addVegetable("Cucumber", 34);
renderShop();

//skapa eventlistener på knappen
const form = document.querySelector(".add-vegetable");
form.addEventListener("click", (event) => {
  event.preventDefault();

  //state.addVeg inmatningsfälten
  state.addVegetable(
    document.querySelector("#vegetable").value,
    document.querySelector("#amount").value
  );

  //render vegs
  renderShop();
  form.reset();
});
