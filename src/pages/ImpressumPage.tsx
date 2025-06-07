import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CookieBanner from '../components/modals/CookieBanner';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const ImpressumPage: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      
      <section className="pt-24 pb-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4 text-blue-900">Impressum</h1>
            <p className="text-xl text-gray-700 mb-6">
              Rechtliche Informationen zur SHK + Haustechnik Community
            </p>
            
            <Link 
              to="/"
              className="inline-flex items-center px-4 py-2 text-blue-700 hover:text-blue-900 transition-colors font-medium border border-blue-300 rounded-lg hover:bg-blue-50"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Zurück zur Community
            </Link>
          </div>
        </Container>
      </section>
      
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Angaben gemäß § 5 TMG</h2>
              
              <div className="mb-8">
                <p className="mb-2"><strong>SHK + Haustechnik Community</strong></p>
                <p className="mb-2">Betrieben durch: DigitalWerk Solutions</p>
                <p className="mb-2">Seb.-Tiefenthalerstr. 14</p>
                <p className="mb-2">83101 Rohrdorf</p>
                <p className="mb-4">Deutschland</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Kontakt</h2>
              <div className="mb-8">
                <p className="mb-2">Telefon: +49 175 223 9594</p>
                <p className="mb-2">E-Mail: info@digitalwerk.solutions</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Umsatzsteuer-ID</h2>
              <div className="mb-8">
                <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p>DE123456789 (Beispiel - bitte durch echte USt-IdNr. ersetzen)</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="mb-8">
                <p className="mb-2">DigitalWerk Solutions</p>
                <p className="mb-2">Seb.-Tiefenthalerstr. 14</p>
                <p className="mb-2">83101 Rohrdorf</p>
                <p className="mb-2">Deutschland</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">EU-Streitschlichtung</h2>
              <div className="mb-8">
                <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800"> https://ec.europa.eu/consumers/odr/</a></p>
                <p>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Haftung für Inhalte</h2>
              <div className="mb-8">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Urheberrecht</h2>
              <div className="mb-8">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </div>
            
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Bereit für den Austausch mit anderen SHK-Profis?
              </h3>
              <p className="text-gray-700 mb-6">
                Werden Sie Teil unserer Community und profitieren Sie vom Erfahrungsaustausch.
              </p>
              <div className="flex justify-center">
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Zurück zur Startseite
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default ImpressumPage;