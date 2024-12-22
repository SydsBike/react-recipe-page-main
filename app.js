// App Component
const { useState, useEffect } = React;

function App() {
  const assets = {
    omelette: "./assets/images/image-omelette.jpeg",
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getText = () => {
    if (windowWidth >= 768) {
      return "Simple Omelette Recipe";
    } else {
      return "Omelette Recipe";
    }
  };

  return (
    <>
      <main className="main">
        <article className="card | bg-100">
          <section className="image-container">
            <img className="card-image" src={assets.omelette} alt="" />
          </section>
          <div className="card-wrapper">
            <section className="intro | section-gap grid">
              <h1 className="title | fs-h1 clr-900 ff-young">{getText()}</h1>
              <p>An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
            </section>
            <section className="prep | bg-50">
              <h2 className="fs-20 clr-800 fw-med">Preparation time</h2>
              <ul className="prep-list | clr-600 list-gap grid" role="list">
                <li>
                  <span>Total:</span> Approximately 10 minutes
                </li>
                <li>
                  <span>Preparation:</span> 5 minutes
                </li>
                <li>
                  <span>Cooking:</span> 5 minutes
                </li>
              </ul>
            </section>
            <section className="ingredients | section-gap grid">
              <h2 className="ff-young clr-br-800 fs-28">Ingredients</h2>
              <ul className="ingredients-list | grid list-gap clr-600" role="list">
                <li>2-3 large eggs</li>
                <li>Salt, to taste</li>
                <li>Pepper, to taste</li>
                <li>1 tablespoon of butter or oil</li>
                <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
              </ul>
            </section>
            <hr />
            <section className="instructions section-gap grid">
              <h2 className="ff-young clr-br-800 fs-28">Instructions</h2>
              <ol className="instructions-list | ff-gab grid list-gap" role="list">
                <li>
                  <div className="li">
                    <span>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                  </div>
                </li>
                <li>
                  <div className="li">
                    <span>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.{" "}
                  </div>
                </li>
                <li>
                  <div className="li">
                    <span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
                  </div>
                </li>
                <li>
                  <div className="li">
                    <span>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
                  </div>
                </li>
                <li>
                  <div className="li">
                    <span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
                  </div>
                </li>
                <li>
                  <div className="li">
                    <span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
                  </div>
                </li>
              </ol>
            </section>
            <hr />
            <section className="nutrition | section-gap grid">
              <h2 className="ff-young clr-br-800 fs-28">Nutrition</h2>
              <p>The table below shows nutritional values per serving without the additional fillings.</p>
              <table className="table">
                <tr>
                  <td>Calories</td>
                  <td className="clr-br-800 fw-bold">277kcal</td>
                </tr>
                <tr>
                  <td>Carbs</td>
                  <td className="clr-br-800 fw-bold">0g</td>
                </tr>
                <tr>
                  <td>Protein</td>
                  <td className="clr-br-800 fw-bold">20g</td>
                </tr>
                <tr>
                  <td>Fat</td>
                  <td className="clr-br-800 fw-bold">22g</td>
                </tr>
              </table>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
