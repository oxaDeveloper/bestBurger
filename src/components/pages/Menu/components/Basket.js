import React from "react";
import { db } from "../../../../firebase";

export default function Basket(props) {
  const { cartItems, onRemove, user } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = 5000;
  const totalPrice = itemsPrice + taxPrice;

  const saveProducts = (e) => {
    e.preventDefault();

    db.collection("orders").add({
      mahsulot: cartItems.map((x) => x.name).join(", "),
      soni: cartItems.map((x) => x.qty).join(", "),
      telefonRaqam: user.phoneNumber,
      narxi: itemsPrice,
    });

    alert(
      "Sizning buyurtmaningiz muvaffaqiyatli qo'shildi!" +
        " " +
        "Iltimos, buyurtmangiz xatolikka uchramasligi uchun sahifani yangilang."
    );
  };

  const hidde = () => {
    document.getElementById("alert").style.display = "none";
  };

  return (
    <aside className="block col-1">
      <h2 className="orders">BUYURTMALAR</h2>
      <div className="all_box">
        {cartItems.length === 0 && (
          <div className="emptyCart">
            <img
              src="https://mentormyboard.com/assets/img/empty-cart.png"
              className="emptyCart_logo"
            />
            <h1 className="emptyCart_tilte">MAHSULOT TANLANMAGAN!</h1>
          </div>
        )}

        <form>
          {cartItems.map((item) => (
            <div key={item.id} className="row" id="answer">
              <div className="col-2" id="item">
                {item.name}
              </div>
              <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                  O'CHIRISH!
                </button>
              </div>

              <div className="col-2 text-right">
                {item.qty} x UZS {item.price.toFixed(2)}
              </div>
            </div>
          ))}

          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div className="col-2">Mahsulot narxi:</div>
                <div className="col-1 text-right">
                  UZS {itemsPrice.toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">Dastavka narxi:</div>
                <div className="col-1 text-right">
                  UZS {taxPrice.toFixed(2)}
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <strong>Umumiy qiymat:</strong>
                </div>
                <div className="col-1 text-right">
                  <strong>UZS {totalPrice.toFixed(2)}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <a href="/menu">
                  <button onClick={saveProducts} className="checkout">
                    XARID QILISH!
                  </button>
                </a>
              </div>
            </>
          )}
        </form>
      </div>

      <div id="alert">
        <h1>Mahsulot Savatdan olib tashlandi!</h1>
        <button onClick={hidde}>OK</button>
      </div>
    </aside>
  );
}
