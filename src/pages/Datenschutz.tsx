import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz: React.FC = () => {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Header />
      
      <section className="pt-32 pb-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-blue-900">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Allgemeine Hinweise</h3>
              <div className="mb-8">
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-blue-700">Datenerfassung auf dieser Website</h3>
              <div className="mb-8">
                <p><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
                
                <p><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
                <p>Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">2. Hosting</h2>
              <div className="mb-8">
                <p>Wir hosten die Inhalte unserer Website bei folgenden Anbietern:</p>
                
                <h3 className="text-xl font-semibold mb-3 text-blue-700">Externes Hosting</h3>
                <p>Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.</p>
                <p>Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">3. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Datenschutz</h3>
              <div className="mb-8">
                <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.</p>
                <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-blue-700">Hinweis zur verantwortlichen Stelle</h3>
              <div className="mb-8">
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <p>DigitalWerk Solutions<br />
                Seb.-Tiefenthalerstr. 14<br />
                83101 Rohrdorf<br />
                Deutschland</p>
                <p>Telefon: +49 175 223 9594<br />
                E-Mail: info@digitalwerk.solutions</p>
                <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Server-Log-Dateien</h3>
              <div className="mb-8">
                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
                <p>Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">5. Analyse-Tools und Werbung</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Google Analytics</h3>
              <div className="mb-8">
                <p>Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google"), Gordon House, Barrow Street, Dublin 4, Irland.</p>
                <p>Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden von Google ggf. in einem Profil zusammengefasst, das dem jeweiligen Nutzer bzw. dessen Endgerät zugeordnet ist.</p>
                <p>Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.</p>
                <p>Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der Analyse des Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung zu optimieren. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">6. Plugins und Tools</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-blue-700">GoHighLevel</h3>
              <div className="mb-8">
                <p>Wir nutzen GoHighLevel für die Verwaltung von Kundenbeziehungen und Marketing-Automatisierung. Anbieter ist HighLevel Inc., 2201 W. Broad St., Suite 202, Richmond, VA 23220, USA.</p>
                <p>Wenn Sie sich für unsere Services anmelden oder mit uns in Kontakt treten, werden Ihre Daten an GoHighLevel übertragen und dort verarbeitet. Dies umfasst insbesondere:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Name und Kontaktdaten</li>
                  <li>E-Mail-Adresse</li>
                  <li>Telefonnummer</li>
                  <li>Unternehmensinformationen</li>
                </ul>
                <p>Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an effizienter Kundenbetreuung).</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-blue-700">Stripe</h3>
              <div className="mb-8">
                <p>Für die Abwicklung von Zahlungen nutzen wir den Zahlungsdienstleister Stripe. Anbieter ist die Stripe Inc., 510 Townsend Street, San Francisco, CA 94103, USA (für Europa: Stripe Payments Europe Ltd., 1 Grand Canal Street Lower, Grand Canal Dock, Dublin, Irland).</p>
                <p>Wenn Sie eine Zahlung über Stripe durchführen, werden Ihre Zahlungsdaten (z. B. Kreditkartennummer, Ablaufdatum, CVC-Code) direkt an Stripe übertragen und dort verarbeitet. Wir erhalten keine vollständigen Zahlungsdaten, sondern nur eine Bestätigung über den Erfolg oder Misserfolg der Zahlung.</p>
                <p>Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Stripe ist nach dem EU-US Data Privacy Framework zertifiziert.</p>
              </div>

              <h2 className="text-2xl font-semibold mb-4 text-blue-800">7. Ihre Rechte</h2>
              <div className="mb-8">
                <p>Sie haben folgende Rechte:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
                  <li>Recht auf Berichtigung unrichtiger oder unvollständiger Daten</li>
                  <li>Recht auf Löschung Ihrer bei uns gespeicherten Daten</li>
                  <li>Recht auf Einschränkung der Datenverarbeitung</li>
                  <li>Recht auf Datenübertragbarkeit</li>
                  <li>Widerspruchsrecht gegen die Verarbeitung Ihrer Daten</li>
                  <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
                </ul>
                <p>Wenn Sie von diesen Rechten Gebrauch machen möchten, wenden Sie sich bitte an: info@digitalwerk.solutions</p>
              </div>

              <p className="text-sm text-gray-600 mt-8">Stand: {new Date().toLocaleDateString('de-DE')}</p>
            </div>
          </div>
        </Container>
      </section>
      
      <Footer />
    </div>
  );
};

export default Datenschutz;