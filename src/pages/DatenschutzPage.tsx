import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CookieBanner from '../components/modals/CookieBanner';
import Button from '../components/ui/Button';
import { ArrowLeft, Shield } from 'lucide-react';

const DatenschutzPage: React.FC = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      
      <section className="pt-24 pb-8 bg-gradient-to-r from-blue-50 to-blue-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Shield className="h-8 w-8 text-blue-700" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4 text-blue-900">Datenschutzerklärung</h1>
            <p className="text-xl text-gray-700 mb-6">
              Transparenz über den Umgang mit Ihren Daten in der SHK + Haustechnik Community
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/"
                className="inline-flex items-center px-4 py-2 text-blue-700 hover:text-blue-900 transition-colors font-medium border border-blue-300 rounded-lg hover:bg-blue-50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Zurück zur Community
              </Link>
              <span className="text-gray-500">oder</span>
              <Button variant="primary">
                Jetzt Mitglied werden
              </Button>
            </div>
          </div>
        </Container>
      </section>
      
      <section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Allgemeine Hinweise</h3>
              <div className="mb-8">
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Hosting</h2>
              <div className="mb-8">
                <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Hinweis zur verantwortlichen Stelle</h3>
              <div className="mb-8">
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p>DigitalWerk Solutions<br />
                Seb.-Tiefenthalerstr. 14<br />
                83101 Rohrdorf<br />
                Deutschland</p>
                <p>Telefon: +49 175 223 9594<br />
                E-Mail: info@digitalwerk.solutions</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Cookies</h3>
              <div className="mb-8">
                <p>Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Ihre Rechte</h2>
              <div className="mb-8">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                  <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
                  <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
                  <li>Recht auf Einschränkung der Datenverarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
                </ul>
              </div>

              <p className="text-sm text-gray-600 mt-8">Stand: {new Date().toLocaleDateString('de-DE')}</p>
            </div>
            
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                Ihre Daten sind bei uns sicher
              </h3>
              <p className="text-gray-700 mb-6">
                Werden Sie Teil unserer Community und profitieren Sie vom sicheren Austausch mit anderen SHK-Profis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg">
                  Jetzt Mitglied werden
                </Button>
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

export default DatenschutzPage;