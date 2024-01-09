import Header from "../../components/public/Header";
import "../../style/HomePage.scss";
import img1 from "../../img/222.png";
function HomePage() {
 
  return (
    <>
      <Header />

      <main>
        <section>
          <div className="imgContainer">
            <h1>Un Monde de Douceur</h1>
            <img src={img1} alt="bébé" />
          </div>
        </section>

        <div id="test">
          <section>
            <img src="" alt="" />
            <article>
              <h2>Présentation</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae blanditiis dolorem voluptas fugiat optio, laboriosam
                dicta facere excepturi eius laborum ea corrupti nemo aut
                possimus repellendus amet dignissimos? Doloremque, voluptatibus.
              </p>
            </article>

            <article>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae blanditiis dolorem voluptas fugiat optio, laboriosam
                dicta facere excepturi eius laborum ea corrupti nemo aut
                possimus repellendus amet dignissimos? Doloremque, voluptatibus.
              </p>
            </article>

            <img src="" alt="" />
          </section>
        </div>
      </main>
    </>
  );
}
export default HomePage;
