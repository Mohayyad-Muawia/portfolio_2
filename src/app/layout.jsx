import { Cairo } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Mohayyad Muawia",
  description: "",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cairo.className}`}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            style: {
              backgroundColor: "var(--light)",
              color: "var(--text)",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            },
          }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
