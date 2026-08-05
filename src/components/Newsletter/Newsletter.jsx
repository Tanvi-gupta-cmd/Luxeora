import "./Newsletter.css";

export default function Newsletter() {
  return (
    <section className="newsletter">

      <div className="newsletter-box">

        <p className="section-tag">
          EXCLUSIVE ACCESS
        </p>

        <h2>
          Stay In The World Of Luxury
        </h2>

        <p>
          Subscribe to receive exclusive launches, offers and luxury inspirations.
        </p>

        <form>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </form>

      </div>

    </section>
  );
}