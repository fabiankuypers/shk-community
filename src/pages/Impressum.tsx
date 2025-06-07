import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

const Impressum: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="font-sans bg-white min-h-screen">
      <Header showBackButton={true} />
      
      {/* Hero Section with Back Navigation */}
      <section className="pt-24 pb-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            {/* Mobile Back Button */}
            <div className="md:hidden mb-6">
              <button
                onClick={handleBackToHome}
                className="flex items-center text-blue-700 hover:text-blue-900 transition-colors group"
              >
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Zurück zur Startseite</span>
              </button>
            </div>
            
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-blue-900">Impressum</h1>
              <p className="text-xl text-gray-700 mb-6">
                Rechtliche Informationen zur SHK + Haustechnik Community
              </p>
              
              {/* Quick CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="primary" 
                  onClick={() => window.location.href = '/'}
                  className="flex items-center"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Zurück zur Community
                </Button>
                <span className="text-gray-500">oder</span>
                <Button variant="outline">
                  Jetzt Mitglied werden
                </Button>
              </div>
            </div>
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

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
              <div className="mb-8">
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Haftung für Inhalte</h2>
              <div className="mb-8">
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Haftung für Links</h2>
              <div className="mb-8">
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
                <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Urheberrecht</h2>
              <div className="mb-8">
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
                <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
              </div>
            </div>
            
            {/* Bottom CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Bereit für den Austausch mit anderen SHK-Profis?
              </h3>
              <p className="text-gray-700 mb-6">
                Werden Sie Teil unserer Community und profitieren Sie vom Erfahrungsaustausch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Jetzt Mitglied werden
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleBackToHome}
                >
                  Zurück zur Startseite
                </Button>
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

export default Impressum;