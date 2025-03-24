import Footer from "@/components/footer/Footer";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";

const heroProps = {
  btnText: "Contact Us",
  title: "Welcome to our",
  gradientTitle: "Next.js",
  description: "A production-ready web framework for building modern web applications.",
};


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero {...heroProps} />
      </main>

      <Footer />

    </div>
  );
}
